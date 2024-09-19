export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const symbol = searchParams.get('symbol');
  const apiKey = process.env.NEXT_PUBLIC_FINNHUB_API_KEY;

  if (!symbol) {
    return new Response(JSON.stringify({ error: 'Missing symbol' }), { status: 400 });
  }

  const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      return new Response(JSON.stringify({ error: 'Failed to fetch data' }), { status: response.status });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), { status: 500 });
  }
}
