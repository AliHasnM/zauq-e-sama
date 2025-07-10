"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

const ContactUs = () => {
    return (
        <div className="h-[48rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4 w-full">
                <h1 className="relative z-10 text-3xl sm:text-5xl md:text-6xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
                    Get in Touch with Zauq-e-Sama
                </h1>
                <p className="text-neutral-500 max-w-xl mx-auto my-4 text-sm text-center relative z-10">
                    Have questions about our courses, events, or instructors? We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to you as soon as we can.
                </p>

                <form className="space-y-4 mt-8 relative z-10">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-300">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Ali Hassan"
                            className="mt-1 block w-full rounded-md border border-neutral-800 bg-neutral-950 px-4 py-2 placeholder:text-neutral-700 focus:ring-2 focus:ring-teal-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-300">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="you@example.com"
                            className="mt-1 block w-full rounded-md border border-neutral-800 bg-neutral-950 px-4 py-2 placeholder:text-neutral-700 focus:ring-2 focus:ring-teal-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-neutral-300">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            placeholder="Write your message here..."
                            className="mt-1 block w-full rounded-md border border-neutral-800 bg-neutral-950 px-4 py-2 placeholder:text-neutral-700 focus:ring-2 focus:ring-teal-500"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-4 bg-teal-600 hover:cursor-pointer hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-md transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            <BackgroundBeams />
        </div>
    );
};

export default ContactUs;
