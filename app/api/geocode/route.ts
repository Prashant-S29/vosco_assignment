import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  const params = {
    access_key: process.env.POSITION_STACK_API_KEY!,
    query,
  };

  try {
    const response = await axios.get('https://api.positionstack.com/v1/forward', { params });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Geocoding API error:', error);
    return NextResponse.json({ error: 'Failed to fetch geocoding data' }, { status: 500 });
  }
}
