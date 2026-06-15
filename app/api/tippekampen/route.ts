import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (body.action === 'setTippingOpen' || body.action === 'saveFasit') {
      const response = await fetch(process.env.TIPPEKAMPEN_SCRIPT_URL!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      return NextResponse.json(data);
    }

    const statusResponse = await fetch(process.env.TIPPEKAMPEN_SCRIPT_URL!, {
      cache: 'no-store',
    });

    const statusData = await statusResponse.json();

    if (statusData.tippingOpen === false) {
      return NextResponse.json({
        success: false,
        error: 'Tippekampen er stengt. Innsending er ikke lenger mulig.',
      });
    }

    const response = await fetch(process.env.TIPPEKAMPEN_SCRIPT_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Kunne ikke sende inn tips',
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  try {
    const response = await fetch(process.env.TIPPEKAMPEN_SCRIPT_URL!, {
      cache: 'no-store',
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Kunne ikke hente leaderboard',
      },
      {
        status: 500,
      }
    );
  }
}
