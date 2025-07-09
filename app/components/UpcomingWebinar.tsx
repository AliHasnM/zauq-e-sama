
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'

export const projects = [
    {
        title: "Mehfil-e-Sama",
        description:
            "A curated space for listening to spiritually uplifting Qawwalis, classical ragas, and devotional performances from legendary Ustads and Qawwals.",
        link: "/mehfil-e-sama",
    },
    {
        title: "Raag Exploration",
        description:
            "Dive deep into the world of Indian classical music. Learn the essence, emotion, and history behind every Raag through guided listening.",
        link: "/raag-exploration",
    },
    {
        title: "Ustad Profiles",
        description:
            "Meet the masters: discover the journeys, philosophies, and teachings of iconic vocalists, instrumentalists, and composers.",
        link: "/ustad-profiles",
    },
    {
        title: "Sufi Wisdom",
        description:
            "Immerse yourself in verses of Rumi, Bulleh Shah, and Amir Khusrau with interpretive audio and musical renditions.",
        link: "/sufi-wisdom",
    },
    {
        title: "Devotional Playlists",
        description:
            "Handpicked playlists of soulful devotional music for every mood — from Fajr reflection to midnight zikr.",
        link: "/devotional-playlists",
    },
    {
        title: "Zauq Learning",
        description:
            "An interactive learning space for beginners and seekers to understand the art of listening, voice culture, and rhythmic cycles.",
        link: "/zauq-learning",
    },
];

const UpcomingWebnar = () => {
    return (
        <div className='py-12 bg-gray-900'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6'>
                <div className='text-center text-base text-teal-600 font-semibold tracking-wide uppercase'>featured webinars</div>
                <div className='mt-2 text-center text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Where Every Note Leads to Silence Within</div>
                <div className='mt-10'>
                    <div className="max-w-5xl mx-auto px-8">
                        <HoverEffect items={projects} />
                    </div>
                    <div className='flex items-center justify-center'>
                        <Link href={`/courses/`} className="mt-2 px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition">
                            View Course
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpcomingWebnar