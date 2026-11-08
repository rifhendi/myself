import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Basic in-memory rate limiter for simple spam mitigation
const ipRateMap = new Map<string, number>();

function sanitize(text: string): string {
  return text
    .replace(/[<>]/g, "") // strip dangerous html angle brackets
    .trim();
}

export async function POST(req: NextRequest) {
  try {
    // 1. IP Rate Limiting (1 request per 10 seconds per IP)
    const ip = req.headers.get("x-forwarded-for") || "local";
    const now = Date.now();
    const lastRequest = ipRateMap.get(ip);
    if (lastRequest && now - lastRequest < 10000) {
      return NextResponse.json(
        { error: "Mohon tunggu beberapa detik sebelum mengirim pesan kembali." },
        { status: 429 }
      );
    }
    ipRateMap.set(ip, now);

    const body = await req.json();
    const { name, email, subject, message, honeypot } = body;

    // 2. Honeypot check (hidden field to trap spam bots)
    if (honeypot && String(honeypot).trim().length > 0) {
      // Silently accept to mislead bots
      return NextResponse.json({ success: true });
    }

    // 3. Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Nama minimal 2 karakter." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Alamat email tidak valid." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 3) {
      return NextResponse.json(
        { error: "Subjek minimal 3 karakter." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Pesan minimal 10 karakter." },
        { status: 400 }
      );
    }

    const sanitizedName = sanitize(name);
    const sanitizedEmail = sanitize(email);
    const sanitizedSubject = sanitize(subject);
    const sanitizedMessage = sanitize(message);

    const resendApiKey = process.env.RESEND_API_KEY;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "vinorifhendi@gmail.com";

    // 4. Resend Integration
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      const emailResult = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [receiverEmail],
        replyTo: sanitizedEmail,
        subject: `[Portfolio Contact] ${sanitizedSubject} - dari ${sanitizedName}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <div style="border-bottom: 2px solid #2563eb; padding-bottom: 12px; margin-bottom: 20px;">
              <h2 style="color: #0f172a; margin: 0; font-size: 20px;">Pesan Baru dari Formulir Kontak Portfolio</h2>
              <p style="color: #64748b; margin: 4px 0 0 0; font-size: 13px;">Pengirim menghubungi melalui website Vino Rifhendi</p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; width: 100px;"><strong>Nama:</strong></td>
                <td style="padding: 8px 0; color: #0f172a;">${sanitizedName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;"><strong>Email:</strong></td>
                <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${sanitizedEmail}" style="color: #2563eb;">${sanitizedEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;"><strong>Subjek:</strong></td>
                <td style="padding: 8px 0; color: #0f172a;">${sanitizedSubject}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;"><strong>Waktu:</strong></td>
                <td style="padding: 8px 0; color: #0f172a;">${new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" })} WIB</td>
              </tr>
            </table>

            <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px; border: 1px solid #e2e8f0; margin-bottom: 20px;">
              <h4 style="color: #334155; margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Isi Pesan:</h4>
              <p style="color: #0f172a; margin: 0; white-space: pre-wrap; font-size: 14px; line-height: 1.6;">${sanitizedMessage}</p>
            </div>

            <p style="font-size: 12px; color: #94a3b8; margin: 0; text-align: center;">
              Email otomatis dari formulir kontak website Vino Rifhendi Setiawan.
            </p>
          </div>
        `,
      });

      if (emailResult.error) {
        console.error("Resend delivery error:", emailResult.error);
        return NextResponse.json(
          { error: "Gagal mengirimkan email melalui gateway Resend. Silakan hubungi langsung ke vinorifhendi@gmail.com." },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Pesan berhasil terkirim via Resend!",
        id: emailResult.data?.id,
      });
    } else {
      // Graceful local development / fallback preview mode
      console.log("[Dev Mode - Contact Form Submission]", {
        name: sanitizedName,
        email: sanitizedEmail,
        subject: sanitizedSubject,
        message: sanitizedMessage,
        note: "RESEND_API_KEY belum diset di .env.local. Masukkan RESEND_API_KEY untuk mengaktifkan pengiriman email live ke vinorifhendi@gmail.com.",
      });

      return NextResponse.json({
        success: true,
        simulated: true,
        message: "Pesan berhasil diterima! (Mode simulasi aktif: set RESEND_API_KEY di .env.local untuk pengiriman live ke vinorifhendi@gmail.com).",
      });
    }
  } catch (err: unknown) {
    console.error("Error in contact route:", err);
    return NextResponse.json(
      { error: "Terjadi kesalahan internal pada server. Silakan coba beberapa saat lagi." },
      { status: 500 }
    );
  }
}

