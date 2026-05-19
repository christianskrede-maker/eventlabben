import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(
      process.env.TIPPEKAMPEN_SCRIPT_URL!,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );

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
    const response = await fetch(
      process.env.TIPPEKAMPEN_SCRIPT_URL!
    );

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
