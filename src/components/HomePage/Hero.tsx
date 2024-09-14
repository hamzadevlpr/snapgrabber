
'use client'
import { ClipboardList } from 'lucide-react'
import Image from 'next/image'
import webStore from '../../../public/westore.png'
import { useTheme } from 'next-themes';

export default function Hero() {
    const { theme } = useTheme();
    return (
        <section className="pt-12 relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 dark:text-gray-50 mb-5 md:text-5xl leading-[50px]">
                    Download Facebook Reels quickly and<span className="text-green-600"> for free! </span>
                </h1>
                <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9 dark:text-gray-50">
                    Grab Facebook, Instagram, TikTok, and Twitter videos in Full HD, 2K, or 4K quality instantly.
                </p>
                <div className="border border-green-600 sm:w-96 w-full mx-auto rounded-full flex items-center justify-between mb-4 p-1">
                    <input className="focus:outline-none rounded-full w-full font-inter text-sm font-medium text-gray-900 dark:bg-[#181C14] dark:text-gray-400 ml-3" placeholder='Past Vidoe URL' />
                    <div className='flex'>
                        <button
                            className="w-8 h-8 rounded-full flex justify-center items-center"
                        >
                            <ClipboardList />
                        </button>
                        <button
                            className="w-8 h-8 rounded-full flex justify-center items-center bg-green-600"
                        >
                            <svg
                                width={17}
                                height={16}
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                                    stroke="white"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="sm:p-10 p-5">
                <div className={`flex flex-col justify-center items-center gap-6 md:gap-4 rounded-xl max-w-4xl p-10 mx-auto ${theme == 'light' ?'bg-custom-pattern':'bg-custom-pattern-dark'}`}>
                    <div className='text-center space-y-4'>
                        <h1 className="text-2xl md:text-4xl font-medium text-green-700 dark:text-gray-50">
                            Download SnapG Chrome Extension
                        </h1>
                        <h3 className="font-mono text-sm md:text-xl font-normal text-gray-500 dark:text-gray-300">
                            It&#39;s quick and lightweight.
                        </h3>
                    </div>
                    <button type="button" disabled className={`p-2 rounded-xl  ${theme == 'light' ? '' : 'bg-gray-900'} cursor-not-allowed `} title='Under Development'>
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

    )
}
