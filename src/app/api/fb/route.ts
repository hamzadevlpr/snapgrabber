import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    try {
        // const url = req.nextUrl.searchParams.get('url');

        const response = await axios.get(`https://graph.facebook.com/v20.0/1230764268063432?fields=title,picture,description,format&access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN!}`);

        return NextResponse.json(response.data, { status: 200 });
    } catch (error) {
        console.error('Error fetching video details:', error);
        return NextResponse.json({ error: 'Failed to fetch video details' }, { status: 500 });
    }
}
