import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const groupRecipients = [
  'ida.oiesvold@gmail.com',
  'christianskrede@gmail.com',
  'knutzen64@hotmail.com',
  'karihelsing@hotmail.com',
];

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      type,
      name,
      email,
      phone,
      message,
      child,
      school,
      guardian,
      items,
      tables,
    } = body;

    let subject = 'Ny melding fra Eventlabben';
    let to: string[] = groupRecipients;

    switch (type) {
      case 'sales':
        subject = 'Ny interesse for salgsplass';
        to = ['ninaogdennis@hotmail.com', 'christianskrede@gmail.com'];
        break;

      case 'volunteer':
        subject = 'Ny frivillig';
        to = groupRecipients;
        break;

      case 'contact':
        subject = 'Nytt spørsmål fra nettsiden';
        to = groupRecipients;
        break;

      case 'school':
        subject = 'Påmelding skolestartpakke';
        to = groupRecipients;
        break;
    }

    await resend.emails.send({
      from: 'EventLabben <festival@eventlabben.com>',
      to,
      subject,
      html: `
        <h2>${subject}</h2>

        <p><strong>Skjematype:</strong> ${type ?? ''}</p>
        <p><strong>Navn:</strong> ${name ?? guardian ?? ''}</p>
        <p><strong>E-post:</strong> ${email ?? ''}</p>
        <p><strong>Telefon:</strong> ${phone ?? ''}</p>

        ${child ? `<p><strong>Barn:</strong> ${child}</p>` : ''}
        ${school ? `<p><strong>Skole:</strong> ${school}</p>` : ''}
        ${guardian ? `<p><strong>Foresatt:</strong> ${guardian}</p>` : ''}
        ${items ? `<p><strong>Ønsker å selge:</strong><br>${items}</p>` : ''}
        ${tables ? `<p><strong>Bord:</strong> ${tables}</p>` : ''}
        ${message ? `<p><strong>Melding:</strong><br>${message}</p>` : ''}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}