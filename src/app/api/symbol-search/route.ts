export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const keywords = searchParams.get('keywords');
    const apiKey = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;
  
    if (!keywords) {
      return new Response(JSON.stringify({ error: 'Missing keywords' }), { status: 400 });
    }
  
    const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${apiKey}`;
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        return new Response(JSON.stringify({ error: 'Failed to fetch data' }), { status: response.status });
      }
  
      const data = await response.json();
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  }
  