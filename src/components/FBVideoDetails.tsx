'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FBVideoDetails = ({ videoId }: { videoId: string; }) => {
    const [videoDetails, setVideoDetails] = useState(null);
    const [error, setError] = useState('');


    if (error) return <div>{error}</div>;

    return (
        <>
        
        </>
        // <div>
        //     {videoDetails ? (
        //         <div>
        //             <h3>Title: {videoDetails.title || 'N/A'}</h3>
        //             <p>Description: {videoDetails.description || 'No description'}</p>
        //             <p>Length: {videoDetails.length || 'N/A'} seconds</p>
        //             <p>Created Time: {new Date(videoDetails.created_time).toLocaleString()}</p>
        //             <a href={videoDetails.source} target="_blank" rel="noopener noreferrer">
        //                 Watch Video
        //             </a>
        //         </div>
        //     ) : (
        //         <p>Loading video details...</p>
        //     )}
        // </div>
    );
};

export default FBVideoDetails;
