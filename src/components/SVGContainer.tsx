import React from 'react'

export default function SVGContainer({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            {/* Gradient Background */}
            <defs>
                <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "lightblue", stopOpacity: 1 }} />
                    <stop
                        offset="100%"
                        style={{ stopColor: "deepskyblue", stopOpacity: 1 }}
                    />
                </linearGradient>
            </defs>
            {/* Background Rectangle with Gradient */}
            <rect width="100%" height="100%" fill="url(#bgGradient)" />
            {/* Abstract Shapes */}
            {/* Left Side */}
            <polygon points="0,0 100,100 0,200" fill="rgba(0, 153, 255, 0.5)" />
            <polygon points="0,200 100,300 0,400" fill="rgba(0, 128, 255, 0.5)" />
            {/* Right Side (Adjusted Coordinates) */}
            <polygon points="100%,0 100%,200 800,200" fill="rgba(0, 102, 255, 0.5)" />
            <polygon points="100%,200 100%,400 800,400" fill="rgba(0, 178, 255, 0.5)" />
            {/* Text */}
            <text
                x="50%"
                y="40%"
                fontFamily="Arial, sans-serif"
                fontSize="30px"
                fill="white"
                textAnchor="middle"
            >
                Download SnapX Android App
            </text>
            <text
                x="50%"
                y="50%"
                fontFamily="Arial, sans-serif"
                fontSize="16px"
                fill="white"
                textAnchor="middle"
            >
                Its fast, and light.
            </text>
            {/* Google Play Image Placeholder */}
            <image
                x="50%"
                y="60%"
                width="150px"
                height="50px"
                href="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                transform="translate(-75, 0)"
            />
        </svg>



    )
}
