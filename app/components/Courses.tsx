"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";

const courses = [
    {
        title: "Classical Vocal Training",
        description:
            "Master the ancient art of raags and surs under the guidance of Ustads with decades of experience.",
        image: "/images/vocal-warmups-breathing.avif",
    },
    {
        title: "Sufi Music & Qawwali",
        description:
            "Learn the soulful renditions of Sufi kalams and immerse yourself in spiritual expression.",
        image: "/images/sufi-singing.jpg",
    },
    {
        title: "Harmonium Mastery",
        description:
            "A complete guide to playing harmonium with sur coordination and finger techniques.",
        image: "/images/live-recitation.webp",
    },
    {
        title: "Tabla for Beginners",
        description:
            "Dive into rhythms and taal structures with our beginner-friendly tabla course.",
        image: "/images/basic.webp",
    },
];

const Courses = () => {
    return (
        <div className="flex flex-wrap justify-center gap-8">
            <div className="py-10">
                <h1 className="text-center text-base text-teal-600 font-semibold tracking-wide uppercase">
                    Our Courses
                </h1>
                <p className="mt-2 text-center text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                    Explore our carefully curated courses designed to nurture your passion for Sufi, Classical, and Devotional music.
                </p>

                <div className="flex flex-wrap justify-center gap-8">
                    {courses.map((course, index) => (
                        <CardContainer key={index} className="inter-var">
                            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                    {course.title}
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                    {course.description}
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <Image
                                        src={course.image}
                                        height={1000}
                                        width={1000}
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt={course.title}
                                    />
                                </CardItem>
                                <div className="flex justify-between items-center mt-20">
                                    <CardItem
                                        translateZ={20}
                                        as="a"
                                        href="#"
                                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                    >
                                        Learn more →
                                    </CardItem>
                                    <CardItem
                                        translateZ={20}
                                        as="button"
                                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                    >
                                        Enroll Now
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Courses;
