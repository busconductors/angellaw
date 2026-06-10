import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

let _resend: Resend | null = null;
function getResend(): Resend {
  if (!_resend) _resend = new Resend(process.env.RESEND_API_KEY);
  return _resend;
}

const RECIPIENT_EMAIL = 'info@bryceangellaw.com';
const SENDER_EMAIL = 'info@bryceangellaw.com';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, phone, company, legalMatter, contactMethod } = body;

    if (!fullName || !email || !legalMatter) {
      return NextResponse.json(
        { error: 'Name, email, and legal matter description are required.' },
        { status: 400 }
      );
    }

    const { data, error } = await getResend().emails.send({
      from: `Bryce Angel Law <${SENDER_EMAIL}>`,
      to: [RECIPIENT_EMAIL],
      subject: `New Consultation Request — ${fullName} (${legalMatter.slice(0, 60)}${legalMatter.length > 60 ? '…' : ''})`,
      html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#FAF8F5;font-family:Georgia,'Times New Roman',serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAF8F5;padding:40px 0;">
<tr><td align="center">
<table width="560" cellpadding="0" cellspacing="0" style="background-color:#FFFFFF;border:1px solid #D5D5DE;border-radius:4px;">

  <tr><td style="background-color:#0A1628;padding:32px 40px;text-align:center;">
    <p style="font-family:Georgia,'Times New Roman',serif;font-size:26px;font-weight:600;color:#FFFFFF;margin:0;letter-spacing:-0.5px;">Bryce Angel Law</p>
    <p style="font-family:Montserrat,Arial,sans-serif;font-size:13px;color:#B08D57;margin:6px 0 0;letter-spacing:2px;text-transform:uppercase;">New Consultation Request</p>
  </td></tr>

  <tr><td style="padding:36px 40px;">

    <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E5E5EC;border-radius:4px;">
      <tr style="background-color:#FAFAFA;"><td style="padding:12px 16px;font-family:Montserrat,Arial,sans-serif;font-size:11px;color:#8A8A9E;text-transform:uppercase;letter-spacing:1px;">Name</td><td style="padding:12px 16px;font-family:Montserrat,Arial,sans-serif;font-size:14px;color:#1F1F2E;font-weight:600;">${fullName}</td></tr>
      <tr><td style="padding:12px 16px;font-family:Montserrat,Arial,sans-serif;font-size:11px;color:#8A8A9E;text-transform:uppercase;letter-spacing:1px;border-top:1px solid #E5E5EC;">Email</td><td style="padding:12px 16px;font-family:Montserrat,Arial,sans-serif;font-size:14px;color:#1F1F2E;border-top:1px solid #E5E5EC;"><a href="mailto:${email}" style="color:#0A1628;">${email}</a></td></tr>
      <tr style="background-color:#FAFAFA;"><td style="padding:12px 16px;font-family:Montserrat,Arial,sans-serif;font-size:11px;color:#8A8A9E;text-transform:uppercase;letter-spacing:1px;border-top:1px solid #E5E5EC;">Phone</td><td style="padding:12px 16px;font-family:Montserrat,Arial,sans-serif;font-size:14px;color:#1F1F2E;border-top:1px solid #E5E5EC;">${phone || '—'}</td></tr>
      <tr><td style="padding:12px 16px;font-family:Montserrat,Arial,sans-serif;font-size:11px;color:#8A8A9E;text-transform:uppercase;letter-spacing:1px;border-top:1px solid #E5E5EC;">Company</td><td style="padding:12px 16px;font-family:Montserrat,Arial,sans-serif;font-size:14px;color:#1F1F2E;border-top:1px solid #E5E5EC;">${company || '—'}</td></tr>
      <tr style="background-color:#FAFAFA;"><td style="padding:12px 16px;font-family:Montserrat,Arial,sans-serif;font-size:11px;color:#8A8A9E;text-transform:uppercase;letter-spacing:1px;border-top:1px solid #E5E5EC;">Preferred Contact</td><td style="padding:12px 16px;font-family:Montserrat,Arial,sans-serif;font-size:14px;color:#1F1F2E;border-top:1px solid #E5E5EC;">${contactMethod || '—'}</td></tr>
    </table>

    <div style="background:#F8F7F4;border:1px solid #E5E5EC;border-radius:4px;padding:16px 20px;margin:20px 0 0;">
      <p style="font-family:Montserrat,Arial,sans-serif;font-size:11px;color:#8A8A9E;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px;">Legal Matter</p>
      <p style="font-family:Georgia,'Times New Roman',serif;font-size:15px;color:#0A1628;line-height:1.7;margin:0;">${legalMatter}</p>
    </div>

  </td></tr>

  <tr><td style="background-color:#FAFAFA;padding:20px 40px;border-top:1px solid #D5D5DE;">
    <p style="font-family:Montserrat,Arial,sans-serif;font-size:11px;color:#8A8A9E;margin:0;line-height:1.5;">This inquiry was submitted via the bryceangellaw.com contact form on ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}.</p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`,
    });

    if (error) {
      console.error('Resend send error:', error);
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
