// app/api/download/route.js

import { NextResponse } from 'next/server';
import ytdl from 'ytdl-core';
import { Readable } from 'stream';

// Helper function to convert Node.js Readable stream to Web ReadableStream
function nodeReadableToWebReadable(nodeReadable: Readable): ReadableStream<Uint8Array> {
    return new ReadableStream({
        start(controller) {
            nodeReadable.on('data', (chunk) => {
                controller.enqueue(chunk);
            });

            nodeReadable.on('end', () => {
                controller.close();
            });

            nodeReadable.on('error', (err) => {
                controller.error(err);
            });
        },

        cancel() {
            nodeReadable.destroy();
        }
    });
}

export async function GET(req: NextResponse) {
    const { searchParams } = new URL(req.url);
    const videoUrl = searchParams.get('url');

    // Validate if the video URL is valid
    if (!videoUrl || !ytdl.validateURL(videoUrl)) {
        return NextResponse.json({ error: 'Invalid YouTube URL' }, { status: 400 });
    }

    try {
        // Get video info to extract title and other details
        const info = await ytdl.getInfo(videoUrl);

        // Set headers for file download
        const headers = new Headers();
        headers.set('Content-Disposition', `attachment; filename="${info.videoDetails.title}.mp4"`);
        headers.set('Content-Type', 'video/mp4');

        // Get the Node.js Readable stream from ytdl-core
        const videoStream = ytdl(videoUrl, { quality: 'highest' });

        // Convert Node.js Readable stream to web-compatible ReadableStream
        const webStream = nodeReadableToWebReadable(videoStream);

        return NextResponse.json({ info: info }, { status: 200 });
    } catch (error) {
        console.error('Download error:', error);
        return NextResponse.json({ error: 'Failed to download video' }, { status: 500 });
    }
}
