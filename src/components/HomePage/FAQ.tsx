'use client';
import { ChevronDown } from "lucide-react";
import React from "react";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null); // Track which FAQ is open

  const handleClick = (index: number) => {
    // Toggle the open state for each item
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Why Use SnapGrabber to Download Facebook Videos?",
      answer:
        "SnapGrabber is currently recognized as one of the fastest and most reliable tools for downloading Facebook videos, according to user reviews and feedback. We aim to provide the best video-saving experience from Facebook, consistently improving the tool's performance and quality.",
    },
    {
      question: "How to Download Facebook Videos to Your Computer?",
      answer:
        "Downloading videos to your computer is simple. Just copy the link to the Facebook video, paste it into the input box at the top of SnapGrabber's page, and click the download button. You’re all set! For more detailed instructions, visit the SnapGrabber guide.",
    },
    {
      question: "How to Download Facebook Videos to Android?",
      answer:
        "Downloading on Android is straightforward, just like on a computer. Visit SnapGrabber, paste the Facebook video link, click the download button, and choose the desired video quality (up to 4K is supported).",
    },
    {
      question: "How to Download 4K Facebook Videos?",
      answer:
        "If you have a 4K Facebook video link, simply copy the link, head over to SnapGrabber, paste it, and click download. Then, select the 4K resolution to download the video in ultra-high quality.",
    },
    {
      question: "How to Download Facebook Videos to Your iPhone (iOS)?",
      answer:
        "Downloading Facebook videos on iOS devices is a bit more complicated because the platform does not support direct video downloads. You'll need to install the 'Documents by Readdle' app, open it, use its browser to visit SnapGrabber, paste the video link, and then download it at your preferred quality.",
    },
    {
      question: "How to Download Facebook Videos Online?",
      answer:
        "To download a Facebook video online, simply copy the link of the desired video, paste it into the input box at SnapGrabber, and the tool will handle the rest.",
    },
    {
      question: "Can I Save Facebook Videos on My Phone?",
      answer:
        "Yes, you can save Facebook videos on your phone. On Windows or Android, downloaded videos are typically saved in the 'Downloads' folder. iPhone users may have a more involved process, as outlined in the instructions for iOS.",
    },
    {
      question: "Can I Download Facebook Live Stream Videos?",
      answer:
        "Yes, you can download Facebook Live videos, but only after the live stream has ended. It’s not possible to download while the video is still streaming.",
    },
    {
      question: "Does SnapGrabber Store Downloaded Videos or Keep a Copy of Them?",
      answer:
        "No, SnapGrabber does not host or store any downloaded videos. All videos are stored on Facebook’s servers and are directly downloaded to your device without being archived on our platform.",
    },
  ];

  return (
    <main className="p-5 sm:p-0 bg-light-blue max-w-6xl mx-auto ">
      <div className="flex justify-center items-start my-2">
        <div className="w-full my-1">
          <h2 className="text-xl font-semibold text-vnet-blue mb-2">
            Frequently Asked Questions
          </h2>
          <ul className="flex flex-col">
            {faqItems.map((item, index) => {
              const { question, answer } = item;
              const isOpen = openIndex === index;

              return (
                <li key={index} className="bg-white dark:bg-gray-800 my-2 shadow-lg">
                  <h2
                    onClick={() => handleClick(index)}
                    className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
                  >
                    <span>{question}</span>
                    <ChevronDown
                      className={`border border-green-400 rounded-full  p-1 text-green-700 h-7 w-7 transform transition-transform duration-500 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </h2>
                  <div
                    className={`border-l-4 border-green-600 overflow-hidden transition-all duration-500 ${
                      isOpen ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    <p className="p-3 text-gray-900 dark:text-gray-50">{answer}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default FAQ;
