"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

export const content = [
    {
        title: "Authentic Instructors",
        description:
            "Learn from seasoned Ustads, Qaris, and Madams with decades of experience in classical, Sufi, and devotional music traditions.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <Image
                    src="/images/art-of-sama.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Spiritual Depth",
        description:
            "We go beyond notes — our courses connect you with the spiritual essence of music like Sama, Naat, and Qawwali.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <Image
                    src="/images/basic.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Structured Curriculum",
        description:
            "Courses are designed from beginner to advanced levels with clear learning paths in Raag theory, breath control, and performance.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <Image
                    src="/images/christie-luke-1Z_0EdS0K6Y-unsplash.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Live & Recorded Sessions",
        description:
            "Access both recorded tutorials and live sessions for real-time feedback and deeper understanding.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <Image
                    src="/images/live-recitation.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Community of Learners",
        description:
            "Join a growing community of passionate learners who share feedback, recitations, and motivation.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <Image
                    src="/images/qawwali-foundations.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Accessible Anywhere",
        description:
            "All courses are online and accessible on mobile or desktop, so you can learn at your own pace, anywhere.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <Image
                    src="/images/sufi-singing.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
];


const WhyChooseUs = () => {
    return (
        <div className="w-full text-3xl">
            <StickyScroll content={content} />
        </div>
    )
}

export default WhyChooseUs