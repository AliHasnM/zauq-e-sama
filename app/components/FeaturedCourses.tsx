"use client";

import Link from 'next/link'
import React from 'react'
import courseData from "../data/zauq_e_sama.json"
import Image from 'next/image'
import { BackgroundGradient } from './ui/background-gradient'

interface Course {
    id: string,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean
    image: string
}
const FeaturedCourses = () => {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)
    return (
        <div className='py-12 bg-gray-900'>
            <div>
                <div className='text-center'>
                    <h1 className='text-base text-emerald-600 font-semibold tracking-wide uppercase'>Featured Courses</h1>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn With The Best</p>
                </div>
            </div>
            <div className='mt-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                    {
                        featuredCourses.map((course: Course) => (
                            <div key={course.id} className="flex justify-center">
                                <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                                    <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                                        <Image src={course.image} alt={course.title} width={400} height={400} className="object-contain w-full h-40 rounded-md mb-4" />
                                        <h2 className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</h2>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                        <span className="text-emerald-600 font-bold mb-2">${course.price}</span>
                                        <span className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">By {course.instructor}</span>
                                        <Link href={`/courses/${course.slug}`} className="mt-2 px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition">
                                            View Course
                                        </Link>
                                    </div>
                                </BackgroundGradient>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='mt-20 text-center'>
                <Link href={"/courses"} className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>
                    View All Courses
                </Link>
            </div>
        </div>
    )
}

export default FeaturedCourses