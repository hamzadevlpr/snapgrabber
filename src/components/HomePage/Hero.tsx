'use client';
import { Check, ClipboardList, Eye } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useRef, useState } from 'react';
import webStore from '../../../public/westore.png';
import Downloader from '../Downloader';
import VideoFetcher from '../VideoFetcher';

interface VideoProps {
    id: string;
    title: string;
    description: string;
    thumbnails: {
        url: string;
        width: number;
        height: number;
    }[];
    formats: formatProps[];
    viewCount: string;
    lengthSeconds: string;
    video_url: string;
    author: {
        name: string,
        verified: boolean
    };
}

interface formatProps {
    itag: number;
    url: string;
    mimeType: string;
    bitrate: number;
    width: number;
    height: number;
    fps: number;
    quality: string;
    qualityLabel: string;
    filter: string;
}

export default function Hero({
    title,
    description,
    route,
}: {
    title: string;
    description: string;
    route: string;
}) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputValue, setInputValue] = useState<string>('');
    const [videoDetails, setVideoDetails] = useState<VideoProps | null>(null);
    const { theme } = useTheme();
    const [videoFormats, setVideoFormats] = useState<formatProps[]>([]);

    const handlePaste = async () => {
        try {
            const text = await navigator.clipboard.readText();
            if (inputRef.current) {
                inputRef.current.value = text;
                setInputValue(text);
            }
        } catch (error) {
            console.error('Failed to paste content: ', error);
        }
    };

    const handleVideoData = (data: any) => {
        setVideoDetails(data?.info?.videoDetails);
        setVideoFormats(data?.info?.formats);
    };

    const handleDownload = async (format: any) => {
        const videoId = inputValue.split('v=')[1];
        window.open(`/api/yt/download?id=${videoId}&format=${encodeURIComponent(format.itag)}`);
    };

    return (
        <section className="pt-12 max-w-6xl mx-auto relative">
            <div className="px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h1 className="max-w-4xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 dark:text-gray-50 mb-5 md:text-5xl leading-[50px]">
                    {title} quickly and <span className="text-green-600">for free!</span>
                </h1>
                <p className="max-w-2xl mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9 dark:text-gray-50">
                    {description}
                </p>

                <div className="border border-green-600 max-w-xl w-full mx-auto rounded-full flex items-center justify-between p-4">
                    <input
                        ref={inputRef}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="focus:outline-none rounded-full w-full font-inter text-sm font-medium text-gray-900 dark:bg-[#181C14] dark:text-gray-400 ml-3"
                        placeholder="Paste Video URL"
                    />
                    <div className="flex gap-2">
                        <button
                            onClick={handlePaste}
                            title="Paste Video URL"
                            className="w-8 h-8 rounded-full flex justify-center items-center"
                        >
                            <ClipboardList />
                        </button>

                        {/* Use VideoFetcher to download the video */}
                        <VideoFetcher inputValue={inputValue} onVideoData={handleVideoData} />
                    </div>
                </div>

                {videoDetails && (
                    <div className="my-5 max-w-[45rem] mx-auto flex space-y-4  lg:flex-col md:flex-row gap-2 flex-col justify-between items-center">
                        <h2 className="self-start pl-2 text-green-600">Video Detail</h2>
                        <div className="flex sm:flex-row flex-col gap-2 text-left">
                            <div className="relative">
                                <div className='sm:w-52 w-full'>
                                    <Image
                                        src={videoDetails.thumbnails[0].url}
                                        alt="Video Thumbnail"
                                        width={400}
                                        height={300}
                                        className="rounded-md"
                                    />
                                </div>
                                <p className="absolute top-2 sm:right-2 right-10 text-gray-100 bg-black p-1 rounded-md text-xs">
                                    {`${Math.floor(Number(videoDetails.lengthSeconds) / 60)}:${Number(videoDetails.lengthSeconds) % 60
                                        }`}
                                </p>
                            </div>

                            <div className="flex flex-col justify-center gap-2">
                                {/* Video Title */}
                                <a
                                    href={videoDetails.video_url}
                                    className="max-w-md w-full overflow-x text-xm font-medium text-gray-900 dark:text-gray-50 hover:text-green-400 dark:hover:text-green-400 text-ellipsis"
                                >
                                    {videoDetails.title}
                                </a>
                                <a
                                    href={videoDetails.video_url}
                                    className="flex items-center text-gray-800 dark:text-gray-400 text-s"
                                >
                                    {videoDetails.author.name}
                                    {videoDetails.author.verified && (
                                        <span className="ml-2 mb-2 w-4 h-4 rounded-full flex justify-center items-center bg-green-600">
                                            <Check size={10} className="text-white" />
                                        </span>
                                    )}
                                </a>

                                <p className="flex items-center gap-2 text-gray-800 dark:text-gray-400">
                                    <Eye size={16} />
                                    {videoDetails.viewCount === '0' ? 'No views' : `${videoDetails.viewCount} views`}
                                </p>
                            </div>

                        </div>

                        <div className="flex flex-col items-center w-full">
                            <h2 className="self-start pl-2 text-green-600">Quality</h2>
                            <Downloader formats={videoFormats} />
                        </div>


                    </div>
                )}
            </div>

            {/* Extension Download Section */}
            <div className="mt-10 sm:px-10 px-5">
                <div
                    className={`flex flex-col justify-center items-center gap-6 md:gap-4 rounded-xl p-10 mx-auto ${theme === 'light' ? 'bg-custom-pattern' : 'bg-custom-pattern-dark'
                        }`}
                >
                    <div className="text-center space-y-4">
                        <h1 className="text-2xl md:text-4xl font-medium text-green-700 dark:text-gray-50">
                            Download SnapG Chrome Extension
                        </h1>
                        <h3 className="font-mono text-sm md:text-xl font-normal text-gray-500 dark:text-gray-300">
                            It&#39;s quick and lightweight.
                        </h3>
                    </div>
                    <button
                        type="button"
                        disabled
                        className={`p-2 rounded-xl ${theme === 'light' ? '' : 'bg-gray-900'
                            } cursor-not-allowed`}
                        title="Under Development"
                    >
                        <Image
                            src={webStore}
                            alt="Chrome Extension Logo"
                            className="h-full object-contain"
                            width={200}
                            height={300}
                        />
                    </button>
                </div>
            </div>
        </section>
    );
}
