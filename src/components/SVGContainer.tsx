import React from 'react'

export default function SVGContainer() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="600px"
            height="400px"
            viewBox="0 0 2 1"
        >
            <rect fill="#77aa77" width={2} height={1} />
            <defs>
                <linearGradient
                    id="a"
                    gradientUnits="userSpaceOnUse"
                    x1={0}
                    x2={0}
                    y1={0}
                    y2={1}
                    gradientTransform="rotate(196,0.5,0.5)"
                >
                    <stop offset={0} stopColor="#77aa77" />
                    <stop offset={1} stopColor="#4fd" />
                </linearGradient>
                <linearGradient
                    id="b"
                    gradientUnits="userSpaceOnUse"
                    x1={0}
                    y1={0}
                    x2={0}
                    y2={1}
                    gradientTransform="rotate(326,0.5,0.5)"
                >
                    <stop offset={0} stopColor="#cf8" stopOpacity={0} />
                    <stop offset={1} stopColor="#cf8" stopOpacity={1} />
                </linearGradient>
                <linearGradient
                    id="c"
                    gradientUnits="userSpaceOnUse"
                    x1={0}
                    y1={0}
                    x2={2}
                    y2={2}
                    gradientTransform="rotate(59,0.5,0.5)"
                >
                    <stop offset={0} stopColor="#cf8" stopOpacity={0} />
                    <stop offset={1} stopColor="#cf8" stopOpacity={1} />
                </linearGradient>
            </defs>
            <rect x={0} y={0} fill="url(#a)" width={2} height={1} />
            <g fillOpacity="0.5">
                <polygon fill="url(#b)" points="0 1 0 0 2 0" />
                <polygon fill="url(#c)" points="2 1 2 0 0 0" />
            </g>
        </svg>



    )
}
