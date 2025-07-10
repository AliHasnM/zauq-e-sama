"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

export const people = [
    {
        id: 1,
        name: "Abida Parveen",
        designation: "Queen of Sufi Music",
        image: "/images/abida-parveen.webp",
    },
    {
        id: 2,
        name: "Sanam Marvi",
        designation: "Sufi & Folk Vocalist",
        image: "/images/sanam-marvi.jpg",
    },
    {
        id: 3,
        name: "Zakir Hussain",
        designation: "Tabla Virtuoso & Percussionist",
        image: "/images/zakir-hussain.webp",
    },
    {
        id: 4,
        name: "Rahat Fateh Ali Khan",
        designation: "Sufi Qawwal & Playback Singer",
        image: "/images/rahat-fateh-ali-khan.jpeg",
    },
    {
        id: 5,
        name: "Ali Sethi",
        designation: "Contemporary Sufi & Ghazal Artist",
        image: "/images/ali-sethi.jpg",
    },
    {
        id: 6,
        name: "Shuja Haider",
        designation: "Composer & Classical Fusion Artist",
        image: "/images/shuja-haider.webp",
    },
];



const Instructors = () => {
    return (
        <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
            <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
                <h2 className="text-2xl md:text-4xl lg:text-7xl text-white mb-8 font-bold text-center">Meet Our Instructors</h2>
                <p className="text-center text-base md:text-lg text-neutral-800 dark:text-neutral-300 mb-4">
                    Discover the soulful masters who will guide you through the art, rhythm, and spirit of music.
                </p>
                <div className="flex flex-row items-center justify-center mt-10 w-full">
                    <AnimatedTooltip items={people} />
                </div>
            </WavyBackground>
        </div>
    )
}

export default Instructors
