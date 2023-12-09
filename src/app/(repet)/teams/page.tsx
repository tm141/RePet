import Image from "next/image"
import { fetchRandomUserApi } from "../lib/data"
import { Profile } from "../lib/definitions";
import { Suspense } from "react";
import { ProfileImgSkeleton } from "@/app/_ui/skeletons";

export default async function Teams() {
    const profiles: Profile[] = await fetchRandomUserApi(14) as Profile[];
    return (
        <div className="md:mx-[var(--px-sm)] desktop:mx-[var(--px)] pt-12 pb-20 px-10 bg-[var(--color-fourth)]">
            <p className="text-5xl font-bold pb-10 text-center">Meet our Executives</p>
            <div className="text-center">
                <Image className="mx-auto rounded-3xl" src={'/teams/drucker.jpg'} alt={'drucker'} height={400} width={400} />

                <h1 className="pt-5 text-4xl font-bold">Michael Drucker</h1>
                <h2 className="text-2xl">Founder</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-20 justify-center pt-20">
                <div className="text-center pb-10">
                    <Image className="mx-auto rounded-3xl" src={'/teams/engineer.jpg'} alt={'Weyland'} height={300} width={300} />

                    <h1 className="pt-5 text-3xl font-bold">Peter Weyland</h1>
                    <h2 className="text-xl">Chief Engineer</h2>
                </div>
                <div className="text-center pb-10">
                    <Image className="mx-auto rounded-3xl" src={'/teams/scientist.jpg'} alt={'Saitama'} height={300} width={300} />

                    <h1 className="pt-5 text-3xl font-bold">Sheperd</h1>
                    <h2 className="text-xl">Chief Bio-Engineer</h2>
                </div>
                <div className="text-center pb-10">
                    <Image className="mx-auto rounded-3xl" src={'/teams/scientist2.jpg'} alt={'Arasaka'} height={300} width={300} />

                    <h1 className="pt-5 text-3xl font-bold">Saburo Arasaka</h1>
                    <h2 className="text-xl">Chief Scientist</h2>
                </div>
            </div>
            <div>
                <p className="text-5xl font-bold py-10 text-center">Meet Some of Our Employee</p>
                <div className="flex gap-5 flex-wrap justify-evenly" >
                    {
                        profiles.map(profile => (
                            <div key={profile.imgUrl} className="flex flex-col py-5 px-2 justify-center rounded-3xl w-48 bg-[var(--color-third)]">
                                <Suspense fallback={<ProfileImgSkeleton />}>
                                    <Image className="min-w-[90px] rounded-3xl mx-auto laptop:rounded-full" src={profile.imgUrl} alt={profile.fName} width={90} height={90} />
                                    <p className="pt-3 laptop:text-xl text-center">{profile.fName} {profile.lName}</p>
                                </Suspense>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}