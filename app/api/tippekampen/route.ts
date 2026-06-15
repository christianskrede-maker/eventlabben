import { NextResponse } from 'next/server';

function buildScriptUrl(mode?: string) {
  const url = new URL(process.env.TIPPEKAMPEN_SCRIPT_URL!);

  if (mode) {
    url.searchParams.set('mode', mode);
  }

  return url.toString();
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (body.action === 'setTippingOpen' || body.action === 'saveFasit') {
      const response = await fetch(buildScriptUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        cache: 'no-store',
      });

      const data = await response.json();
      return NextResponse.json(data);
    }

    const statusResponse = await fetch(buildScriptUrl('status'), {
      cache: 'no-store',
    });

    const statusData = await statusResponse.json();

    const tippingIsOpen =
      statusData.tippingOpen === true ||
      statusData.tippingOpen === 'true' ||
      statusData.tippingOpen === 'ÅPEN' ||
      statusData.tippingOpen === 'open';

    if (!tippingIsOpen) {
      return NextResponse.json({
        success: false,
        error: 'Tippekampen er stengt. Innsending er ikke lenger mulig.',
      });
    }

    const response = await fetch(buildScriptUrl(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      cache: 'no-store',
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: 'Kunne ikke sende inn tips',
      },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const mode = searchParams.get('mode') || undefined;

    const response = await fetch(buildScriptUrl(mode), {
      cache: 'no-store',
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: 'Kunne ikke hente leaderboard',
      },
      { status: 500 }
    );
  }
}
