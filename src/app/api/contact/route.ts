import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";
import { siteConfig } from "@/data/site";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: Request) {
  if (!resend) {
    return NextResponse.json(
      { error: "Resend is not configured on this environment." },
      { status: 500 },
    );
  }

  const payload = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form fields and try again." },
      { status: 400 },
    );
  }

  const { name, email, subject, message } = parsed.data;

  try {
    await resend.emails.send({
      from:
        process.env.CONTACT_FROM_EMAIL ??
        `Portfolio <no-reply@ramykhachab.dev>`,
      to: [siteConfig.email],
      replyTo: email,
      subject: `Portfolio contact: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        message,
      ].join("\n"),
      html: `
<div style="margin:0;padding:40px 20px;background-color:#fafafa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <div style="max-width:560px;margin:0 auto;background-color:#ffffff;border:1px solid #eeeeee;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.02);">
    
    <div style="padding:32px 32px 24px;border-bottom:1px solid #f0f0f0;">
      <div style="display:inline-block;padding:6px 12px;background-color:#f4f4f5;border-radius:6px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#52525b;margin-bottom:12px;">
        Inbox
      </div>
      <h1 style="margin:0;font-size:22px;font-weight:600;letter-spacing:-0.5px;color:#18181b;line-height:1.2;">
        New Portfolio Message
      </h1>
      <p style="margin:6px 0 0;font-size:14px;color: #71717a;">
        A visitor has submitted a response through your contact form.
      </p>
    </div>

    <div style="padding:32px;background-color:#ffffff;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
        <tr>
          <td style="padding-bottom:20px;width:50%;vertical-align:top;">
            <p style="margin:0;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;color:#a1a1aa;font-weight:500;">Sender</p>
            <p style="margin:4px 0 0;font-size:14px;font-weight:500;color:#18181b;">${escapeHtml(name)}</p>
          </td>
          <td style="padding-bottom:20px;width:50%;vertical-align:top;">
            <p style="margin:0;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;color:#a1a1aa;font-weight:500;">Email Address</p>
            <p style="margin:4px 0 0;font-size:14px;font-weight:500;color:#18181b;"><a href="mailto:${escapeHtml(email)}" style="color:#09090b;text-decoration:underline;">${escapeHtml(email)}</a></p>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="padding-bottom:24px;vertical-align:top;">
            <p style="margin:0;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;color:#a1a1aa;font-weight:500;">Subject</p>
            <p style="margin:4px 0 0;font-size:14px;font-weight:500;color:#18181b;">${escapeHtml(subject)}</p>
          </td>
        </tr>
      </table>

      <div style="margin-top:8px;padding:20px;background-color:#fcfcfc;border:1px solid #e4e4e7;border-radius:8px;">
        <p style="margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;color:#a1a1aa;font-weight:500;">Message</p>
        <div style="margin:0;font-size:14px;line-height:1.6;color:#27272a;white-space:pre-wrap;font-family:inherit;">
          ${escapeHtml(message)}
        </div>
      </div>
    </div>

    <div style="padding:20px 32px;background-color:#fafafa;border-top:1px solid #f0f0f0;text-align:center;font-size:12px;color:#71717a;">
      Automated notification from your portfolio website.
    </div>
  </div>
</div>
`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again." },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
