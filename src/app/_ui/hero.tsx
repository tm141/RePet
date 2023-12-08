'use client'
import { useState } from "react"

export default function Hero() {
    const [isHover, setIsHover] = useState(false);
    // const [videoOnce, setVideoOnce] = useState(false); //dev mode so it does not play evertime refreshing page
    const [videoOnce, setVideoOnce] = useState(true);

    function toggleHover(){
        setIsHover(!isHover);
    }
    function reloadVideo(){
        (videoOnce) && setVideoOnce(false);
        let video: HTMLVideoElement = document.getElementById("hero-video")! as HTMLVideoElement;
        video.load();
    }

    function toggleVideoOnce(){
        setVideoOnce(true);
    }

    return (
        <div className="py-10 desktop:py-24 align-middle flex flex-col desktop:flex-row px-[var(--px-sm)] desktop:px-[var(--px)] h-1/3 bg-[var(--color-fourth)] ">
            <div className="laptop:p-10 justify-center laptop:justify-normal">
                <h1 className="px-5 py-2 w-fit rounded-lg text-xl laptop:text-5xl font-bold tracking-tight text-[var(--color-secondary)] bg-[var(--color-primary-2)] sm:text-6xl">RePet</h1>
                <p className="mt-6 text-md text-bold desktop:text-3xl laptop:leading-8">Where Love Means no Surprises</p>
                <p className="leading-5 text-sm desktop:text-xl laptop:leading-6 laptop:tracking-wide pb-5 items-center mt-6 laptop:text-justify">At RePet, we bring the joy of beloved pets back into your life through cutting-edge cloning techniques</p>
            </div>

            <div className="min-w-[120px] max-w-[720px] desktop:min-w-[480px] mx-auto">
            {/* <div className="min-w-[360px] max-w-[720px] md:min-w-[720px] mr-0 ml-auto"> */}
                <video id="hero-video" src='/tv-ad.mov' poster="/landscape7.jpg" autoPlay={videoOnce} muted onMouseEnter={toggleHover} onMouseLeave={toggleHover} onEnded={reloadVideo} controls={isHover} className="" />
            </div>
        </div>
    )
}