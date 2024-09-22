

import axios from 'axios';
import React, { useState } from 'react';
import { ArrowRight, LoaderCircle } from 'lucide-react';

interface VideoFetcherProps {
    inputValue: string;
    onVideoData: (videoData: any) => void;
}

const VideoFetcher = ({ inputValue, onVideoData }: VideoFetcherProps) => {
    const [loading, setLoading] = useState<boolean>(false);

    const handleDownload = async () => {
        if (!inputValue) return;

        try {
            setLoading(true);
            const response = await axios.get(`/api/yt?url=${inputValue}`);
            onVideoData(response.data);
        } catch (err: any) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button
                onClick={handleDownload}
                className="w-8 h-8 rounded-full flex justify-center items-center bg-green-600"
            >
                {loading ? <LoaderCircle size={20} color='#fff' className="animate-spin text-green-600" /> : <ArrowRight size={20} color="#fff" />}
            </button>
        </div>
    );
};

export default VideoFetcher;
