import Image from "next/image";
import { fetchRandomUserApi } from "../(repet)/lib/data";
import { Suspense } from "react";
import { ProfileImgSkeleton } from "./skeletons";

export default async function Testimonials() {
    const profilesFetch = await fetchRandomUserApi(3);

    if (profilesFetch !== undefined) {
        return (
            <div className="px-[var(--px-sm)] py-12 bg-[var(--color-third)]">
                <h1 className="pb-5 text-center font-bold text-2xl laptop:text-5xl">Don't Just Take Our Word for it</h1>
                <div className="my-5 p-5 rounded-3xl laptop:rounded-full flex flex-col laptop:flex-row bg-[var(--color-fourth)]">
                    <Suspense fallback={<ProfileImgSkeleton />}>
                        <Image className="min-w-[90px] rounded-3xl laptop:rounded-full mx-auto laptop:mr-5" src={profilesFetch[0].imgUrl} alt={profilesFetch[0].fName} width={90} height={90} />
                    </Suspense>
                    <div className="flex flex-col gap-3 max-laptop:text-center">
                        <p className="font-bold text-xl">{profilesFetch[0].fName} {profilesFetch[0].lName}</p>
                        <p>"After losing my cherished dog, this pet cloning company provided a second chance at joy. The process was handled with care, and my cloned pet is a living testament to their remarkable technology. Grateful for the unconditional love returned."</p>
                    </div>
                </div>
                <div className="my-5 p-5 rounded-3xl laptop:rounded-full flex flex-col laptop:flex-row bg-[var(--color-fourth)]">
                    <Suspense fallback={<ProfileImgSkeleton />}>
                        <Image className="min-w-[90px] rounded-3xl laptop:rounded-full mx-auto laptop:mr-5" src={profilesFetch[1].imgUrl} alt={profilesFetch[1].fName} width={90} height={90} />
                    </Suspense>
                    <div className="flex flex-col gap-3 max-laptop:text-center">
                        <p className="font-bold text-xl">{profilesFetch[1].fName} {profilesFetch[1].lName}</p>
                        <p>"This pet cloning company's expertise and compassion shine through. My repeated positive experiences highlight their commitment to replicating the unique qualities of my pets. Seamless integration and emotional support make them the go-to for cloning services."</p>
                    </div>
                </div>
                <div className="my-5 p-5 rounded-3xl laptop:rounded-full flex flex-col laptop:flex-row bg-[var(--color-fourth)]">
                    <Suspense fallback={<ProfileImgSkeleton />}>
                        <Image className="min-w-[90px] rounded-3xl laptop:rounded-full mx-auto laptop:mr-5" src={profilesFetch[2].imgUrl} alt={profilesFetch[2].fName} width={90} height={90} />
                    </Suspense>
                    <div className="flex flex-col gap-3 max-laptop:text-center">
                        <p className="font-bold text-xl">{profilesFetch[2].fName} {profilesFetch[2].lName}</p>
                        <p>"Miraculous moments with cloned companions! From consultation to arrival, this pet cloning company's transparent, efficient, and caring process has brought two furry friends back into my life. A heartfelt recommendation for those seeking a meaningful connection with their past pets."</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                Something went wrong!
            </div>
        )
    }

    // return (
    //     <div>
    //         {
    //             profilesFetch?.map(profile => {
    //                 return (
    //                     <div key="profile.imgUrl">
    //                         <p>First Name: {profile.fName}</p>
    //                         <p>Last Name: {profile.lName}</p>
    //                         <p>Image url: {profile.imgUrl}</p>
    //                         <Image className="rounded-full" src={profile.imgUrl} alt={profile.fName} width={50} height={50} />
    //                     </div>
    //                 )
    //             })
    //         }
    //     </div>
    // )

}