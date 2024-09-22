import { Download } from 'lucide-react';
import React from 'react';
import Dropdown from './Header/Dropdown';

// Define TypeScript interface for format
interface Format {
    itag?: number;
    url?: string;
    mimeType?: string;
    bitrate?: number;
    width?: number;
    height?: number;
    fps?: number;
    quality?: string;
    qualityLabel?: string;
    filter?: string;
}

interface DownloaderProps {
    formats: Format[];
}

const Downloader: React.FC<DownloaderProps> = ({ formats }) => {

    // Filter unique video formats based on qualityLabel
    const videoFormats = formats.filter(format => format.mimeType?.includes('video'));
    const uniqueVideoFormats = videoFormats.reduce<Format[]>((acc, format) => {
        if (format.qualityLabel && !acc.some(f => f.qualityLabel === format.qualityLabel)) {
            acc.push(format);
        }
        return acc;
    }, []);

    // Filter unique audio formats
    const audioFormats = formats.filter(format => format.mimeType?.includes('audio'));
    const uniqueAudioFormats = audioFormats.reduce<Format[]>((acc, format) => {
        if (!acc.some(f => f.itag === format.itag)) {
            acc.push(format);
        }
        return acc;
    }, []);

    return (
        <div className='flex flex-col gap-6'>
            {/* Video Formats Section */}
            <div className='flex flex-col gap-2'>
                <h3 className='text-lg font-semibold'>Video Formats</h3>
                <div className='flex flex-wrap justify-center gap-4'>
                    {uniqueVideoFormats.length > 0 ? (
                        uniqueVideoFormats.map((format) => (
                            format.qualityLabel && (
                                <a
                                    title={`Download ${format.qualityLabel}`}
                                    key={format.itag}
                                    href={format.url}
                                    className="flex gap-2 rounded-full py-1 px-4 font-medium border text-green-900 bg-green-100 border-green-300"
                                    download
                                >
                                    <Download />
                                    {format.qualityLabel}
                                </a>
                            )
                        ))
                    ) : (
                        <div>No video formats available</div>
                    )}
                </div>
            </div>

            {/* Audio Formats Section */}
            <div className='flex flex-col gap-2'>
                <h3 className='text-lg font-semibold'>Audio Formats</h3>
                <div className='flex flex-wrap justify-center gap-4'>
                    {uniqueAudioFormats.length > 0 ? (
                        uniqueAudioFormats.map((format) => (
                            <a
                                title="Download Audio"
                                key={format.itag}
                                href={format.url}
                                className="flex gap-2 rounded-full py-1 px-4 font-medium border text-blue-900 bg-blue-100 border-blue-300"
                                download
                            >
                                <Download />
                                {format.mimeType?.split('/')[1].toUpperCase()} Audio
                            </a>
                        ))
                    ) : (
                        <div>No audio formats available</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Downloader;
