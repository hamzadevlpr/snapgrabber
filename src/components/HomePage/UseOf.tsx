import { BadgeCheck, DollarSign, ShieldCheck } from 'lucide-react';
import React from 'react';

interface Feature {
  title: string;
  description: string;
  icon?: JSX.Element;
}

const features: Feature[] = [
  {
    title: 'Top-Quality Downloads ',
    description: 'With SnapGrabber, you can easily download Facebook videos in Full HD or 4K with sound. Many other tools limit you to HD quality, but SnapGrabber takes it further.',
    icon: <ShieldCheck size={36} color='#32c961' />
  },
  {
    title: 'Effortless to Use',
    description: 'Compatible with all devices (mobile, PC, tablet) and operating systems (Android, iOS). No app downloads required – just use your browser!',
    icon: <BadgeCheck size={36} color='#32c961' />
  },
  {
    title: '100% Free',
    description: 'SnapGrabber is completely free to use! We only display a few ads to keep the service running and continue developing new features.',
    icon: <DollarSign size={36} color='#32c961' />
  },
];

export default function UseOf() {
  return (
    <section className="min-h-screen pt-8 lg:pt-20 relative px-5">
      <div className="bg-green-50 dark:bg-gray-800 dark:border dark:border-gray-700 rounded-xl max-w-6xl mx-auto px-6 py-20 sm:px-20 lg:px-8 text-center shadow-lg">
        <h1 className="font-manrope font-bold md:text-5xl text-[1.8rem] text-gray-900 dark:text-white mb-5 leading-[50px] opacity-100">
          Why You Should Use SnapGrabber for
          <span className="text-green-600 dark:text-green-400"> Facebook Video Downloads </span>
        </h1>
        <p className="max-w-4xl mx-auto sm:text-center text-justify text-base font-normal leading-7 text-gray-500 dark:text-gray-300 mb-9">
          SnapGrabber is the best Facebook video downloader on the market. It’s fast, secure, and easy to use. Here are some of the reasons why you should use SnapGrabber to download Facebook videos.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 text-left px-8 py-6 border-l-2 border-gray-200 dark:border-gray-600 border-opacity-60 dark:border-opacity-50 rounded-lg shadow-md transform hover:scale-105 transition duration-500 ease-in-out"
            >
              <div className="mb-4 text-gray-900 dark:text-gray-300">
                {feature.icon}
              </div>
              <h2 className="text-lg sm:text-xl text-gray-900 dark:text-white font-medium title-font mb-2 font-mono">
                {feature.title}
              </h2>
              <p className="leading-relaxed text-sm text-gray-500 dark:text-gray-400 mb-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
