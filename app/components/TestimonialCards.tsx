"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
    {
        quote:
            "Zauq-e-sama ek roohani safar hai jo sirf kaanon tak simat kar nahi rehta, balki dil ke har kona tak utar jaata hai. Jab Ustad ka alaap gungunata hai, to lagta hai jaise har sur Khuda ka paighaam ban gaya ho.",
        name: "Ustad Shamsher Khan",
        title: "Classical Vocalist, Delhi Gharana",
    },
    {
        quote:
            "Qawwali mein sirf bol nahi hotay, woh to rooh ki zabaan hoti hai. Jab harmonium bajta hai aur haath taal mein uthtay hain, to mehfil mein jo jazba paida hota hai, usay sirf mehsoos kiya ja sakta hai, bayan nahi.",
        name: "Hafiz Iqbal Qawwal",
        title: "Lead Qawwal, Sufi Mehfil Ensemble",
    },
    {
        quote:
            "Main ne kai raag seekhe, kai compositions gayein, lekin jab kisi shagird ki aankhon mein sukoon dekha, tab samjha ke Zauq-e-sama ka asal maqsad sirf performance nahi, balki dilon tak pohnchna hai.",
        name: "Madam Noor Fatima",
        title: "Sufi Music Instructor, Lahore Conservatory",
    },
    {
        quote:
            "Jab zikr aur saaz ek ho jayein, to sama ka aalam paida hota hai. Us waqt na koi taal hoti hai na sur ka fikr — sirf jazba hota hai, sirf haazri. Aisi haazri jahan har lafz sajda ban jaye.",
        name: "Qari Waseem Raza",
        title: "Devotional Music Scholar",
    },
    {
        quote:
            "Zauq-e-sama ne mujhe woh sukoon diya jo kitaabon mein nahi mila. Har rag mein, har swar mein ek naya dard tha — lekin woh dard bhi aisi rahat ban gaya jo zindagi bhar saath reh gaya.",
        name: "Amaan Ali Khan",
        title: "Sarod Virtuoso, Indian Classical",
    },
    {
        quote:
            "Main sirf ek listener thi, lekin jab pehli baar ek live mehfil mein gayaki suni, to aisa laga ke saare jahaan ki khamoshi bhi music ban gayi hai. Har saaz, har bol, har silence — ek ibadat thi.",
        name: "Sana Aziz",
        title: "Student & Sufi Music Enthusiast",
    },
];



function TestimonialCards() {
    return (
        <div className="relative h-[40rem] w-full rounded-md flex flex-col antialiased items-center justify-center overflow-hidden bg-white dark:bg-black">
            {/* ✅ Background Grid Layer */}
            <div
                className="absolute inset-0 z-0 pointer-events-none 
        [background-size:40px_40px] 
        [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]
        dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
            />

            {/* ✅ Optional: Radial fade in center */}
            <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            {/* ✅ Content */}
            <h2 className="relative z-20 text-4xl">Hear our Harmony: Voices of Success</h2>
            <div className="w-full flex justify-center overflow-hidden px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="w-full max-w-6xl py-4">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="fast"
                    />
                </div>
            </div>
        </div>
    );
}

export default TestimonialCards;

