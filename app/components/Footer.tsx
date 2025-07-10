"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "../lib/utils";

const Footer = () => {
    return (
        <div className="relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg py-16 px-4">
            {/* Background blur and glow */}
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            {/* Animated Boxes */}
            <Boxes />

            {/* Grid Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-6xl z-20 relative">
                {/* About Us */}
                <div className="flex flex-col">
                    <h3 className={cn("text-lg font-semibold mb-3", "relative z-20")}>About Us</h3>
                    <p className={cn("text-sm text-neutral-300", "relative z-20")}>
                        Zauq-e-Sama is a musical sanctuary where tradition meets soul. We nurture
                        Sufi, Classical, and Devotional music to inspire hearts and elevate minds.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col">
                    <h3 className={cn("text-lg font-semibold mb-3", "relative z-20")}>Quick Links</h3>
                    <ul className="space-y-2 text-sm text-neutral-300 relative z-20">
                        <li>
                            <a href="#" className={cn("hover:underline", "relative z-20")}>Home</a>
                        </li>
                        <li>
                            <a href="#" className={cn("hover:underline", "relative z-20")}>Courses</a>
                        </li>
                        <li>
                            <a href="#" className={cn("hover:underline", "relative z-20")}>Instructors</a>
                        </li>
                        <li>
                            <a href="#" className={cn("hover:underline", "relative z-20")}>Events</a>
                        </li>
                    </ul>
                </div>

                {/* Follow Us */}
                <div className="flex flex-col">
                    <h3 className={cn("text-lg font-semibold mb-3", "relative z-20")}>Follow Us</h3>
                    <ul className="space-y-2 text-sm text-neutral-300 relative z-20">
                        <li>
                            <a href="#" className={cn("hover:underline", "relative z-20")}>Instagram</a>
                        </li>
                        <li>
                            <a href="#" className={cn("hover:underline", "relative z-20")}>YouTube</a>
                        </li>
                        <li>
                            <a href="#" className={cn("hover:underline", "relative z-20")}>Facebook</a>
                        </li>
                        <li>
                            <a href="#" className={cn("hover:underline", "relative z-20")}>Spotify</a>
                        </li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div className="flex flex-col">
                    <h3 className={cn("text-lg font-semibold mb-3", "relative z-20")}>Contact Us</h3>
                    <ul className="space-y-2 text-sm text-neutral-300 relative z-20">
                        <li>
                            Email:{" "}
                            <a href="mailto:mughal201burewala@gmail.com" className={cn("hover:underline", "relative z-20")}>
                                mughal201burewala@gmail.com
                            </a>
                        </li>
                        <li>
                            Phone:{" "}
                            <a href="tel:+923078357370" className={cn("hover:underline", "relative z-20")}>
                                +92 307 8357370
                            </a>
                        </li>
                        <li className="relative z-20">Location: Burewala, Pakistan</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="relative z-20 mt-10 text-lg text-neutral-400 text-center">
                © {new Date().getFullYear()} Zauq-e-Sama. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;
