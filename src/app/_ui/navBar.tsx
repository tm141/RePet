'use client'

import Link from "next/link";
import Image from "next/image";
import repetUrl from '../../../public/repet.png'
import { useState } from "react";

export default function NavBar() {
    const [sidebar, setSidebar] = useState(false);

    const handleSideBar = () => {
        setSidebar(!sidebar);
    }

    return (
        <div className="sticky top-0">
            <div className="flex h-fit bg-blue-100 border-b-2 border-[var(--color-secondary)] p-2 justify-between items-center px-[var(--px-sm)] desktop:px-[var(--px)]">
                <div className="">
                    <Link
                        key="Icon"
                        href="/"
                        className=""
                    >
                        <Image
                            src={repetUrl}
                            alt="repet logo"
                            width={85}
                            height={85}
                        />
                    </Link>
                </div>

                <div className="hidden laptop:block">
                    <Link
                        key="Home"
                        href="/"
                        className="p-3 hover:text-[var(--color-secondary)] hover:bg-[var(--color-primary)] rounded-lg"
                    >
                        Home
                    </Link>
                    <Link
                        key="About Us"
                        href="/about-us"
                        className="p-3 hover:text-[var(--color-secondary)] hover:bg-[var(--color-primary)] rounded-lg"
                    >
                        About Us
                    </Link>
                    <Link
                        key="Services"
                        href="/services"
                        className="p-3 hover:text-[var(--color-secondary)] hover:bg-[var(--color-primary)] rounded-lg"
                    >
                        Services
                    </Link>
                    <Link
                        key="Teams"
                        href="/teams"
                        className="p-3 hover:text-[var(--color-secondary)] hover:bg-[var(--color-primary)] rounded-lg"
                    >
                        Teams
                    </Link>
                </div>
                <button aria-label="side-bar" className="items-end laptop:hidden" onClick={handleSideBar}>
                    <div className="flex flex-col justify-between w-[20px] h-[20px]">
                        <div className="bg-black h-[2px] w-7 rounded"></div>
                        <div className="bg-black h-[2px] w-7 rounded"></div>
                        <div className="bg-black h-[2px] w-7 rounded"></div>
                    </div>
                </button>
            </div>
            <div className={`transition ease-in-out duration-300 mx-[var(--px-sm)] right-0 bg-gray-900 bg-opacity-90 w-fit h-fit p-3 laptop:hidden rounded-b-3xl absolute ${sidebar?"translate-x-0":"-translate-x-full opacity-0"}`}>
                <div className="flex flex-col gap-2 pt-5">
                    <Link
                        key="Home"
                        href="/"
                        className="py-0 px-3 text-[var(--color-secondary)] text-lg"
                    >
                        Home
                    </Link>
                    <Link
                        key="About Us"
                        href="/about-us"
                        className="py-0 px-3 text-[var(--color-secondary)] text-lg"
                    >
                        About Us
                    </Link>
                    <Link
                        key="Services"
                        href="/services"
                        className="py-0 px-3 text-[var(--color-secondary)] text-lg"
                    >
                        Services
                    </Link>
                    <Link
                        key="Teams"
                        href="/teams"
                        className="py-0 px-3 text-[var(--color-secondary)] text-lg"
                    >
                        Teams
                    </Link>
                </div>
            </div>
        </div>
    )
}