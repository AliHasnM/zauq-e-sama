"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import Link from "next/link";


const Header = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Link href={"/"} className="flex items-center gap-2">
                    <MenuItem setActive={setActive} active={active} item="Home">
                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Our Courses">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/courses">All Courses</HoveredLink>
                        <HoveredLink href="/sur-scale-identification">Sur & Scale Identification</HoveredLink>
                        <HoveredLink href="/art-of-sama">Art of Sama</HoveredLink>
                        <HoveredLink href="/voice-modulation-expression">Voice Modulation & Expression</HoveredLink>
                        <HoveredLink href="/live-recitation-te">Live Recitation Techniques</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div >
    )
}

export default Header;