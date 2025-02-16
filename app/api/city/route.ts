// app/api/city/[slug]/route.ts

import { MAGIC_BRICKS_URL } from '@/constants/global';
import { GlobalResponseType } from '@/types/api';
import { CityAPIResponseType } from '@/types/api/city/req_res.types';
import { scrapeMagicBricks } from '@/utils/helper/scrapeData';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse<GlobalResponseType<CityAPIResponseType[]>>> {
  try {
    const body = await request.json();
    const { city } = body;

    if (!city) {
      return NextResponse.json(
        {
          data: null,
          message: 'Please provide a city in the request body.',
          error: 'Please provide a city in the request body.',
        },
        { status: 400 },
      );
    }

    const htmlBlobRes = await fetch(`${MAGIC_BRICKS_URL}${city}`);
    const htmlBlob = await htmlBlobRes.text();

    const d = await scrapeMagicBricks(htmlBlob);

    console.log('d from /city/route.ts', d);
    console.log('d.length from /city/route.ts', d.length);

    return NextResponse.json({
      data: d,
      message: 'Successfully processed city.',
      error: null,
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      {
        data: null,
        message: 'Internal Server Error',
        error: 'Internal Server Error',
      },
      { status: 500 },
    );
  }
}
