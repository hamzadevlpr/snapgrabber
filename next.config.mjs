/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.fbcdn.net',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'i.ytimg.com',
                port: '',
            },
        ],
    },
};

export default nextConfig;
