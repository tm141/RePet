import { Suspense } from "react";
import Testimonials from "@/app/_ui/testimonials";

export default function Services() {

    return (
        <div className=" desktop:px-[var(--px)] px-[var(--px-sm)] mb-20">
            <div className="py-20 h-1/3">
                <h1 className="font-bold text-4xl md:text-5xl mb-10 text-center">Services</h1>
                <div className="min-w-[120px] max-w-[720px] desktop:min-w-[720px] mx-auto">
                    <Suspense>
                        <video id="info-video" src='/services/infomercial.mov' poster="/services/consult.jpg" muted controls className="" />
                    </Suspense>
                </div>
            </div>
            <div className="flex">
                <div className="flex flex-col md:pl-20 md:grid md:grid-cols-2 md:grid-rows-4 gap-4 md:bg-gradient-to-r md:from-black md:to-red-500 md:rounded-e-3xl md:min-h-[614px] md:justify-center md:rounded-s-3xl">
                    <div className="p-5 bg-[var(--color-fourth)] row-[1] col-[1]">
                        <h1 className="text-lg desktop:text-xl font-bold mb-2">Pet Replication</h1>
                        <p className="text-sm desktop:text-base tracking-wide leading-5">Bring back the presence of your beloved pet through genetic cloning</p>
                    </div>
                    <div className="p-5 bg-[var(--color-fourth)] row-[1] col-[2] md:rounded-se-3xl">
                        <h1 className="text-lg desktop:text-xl font-bold mb-2">Syncord</h1>
                        <p className="text-sm desktop:text-base tracking-wide leading-5">Free Syncord at every RePet store! Syncord is a process which we download your pet memories, habbits and behavior</p>
                    </div>
                    <div className="p-5 bg-[var(--color-fourth)] row-[2] col-span-2 col-start-1">
                        <h1 className="text-lg desktop:text-xl font-bold mb-2">Genetic Engineering</h1>
                        <p className="text-sm desktop:text-base tracking-wide leading-5">With a slight additional cost, we can alter your pets morphology of color, size and more. We can also alter your pet behaviour like removing bad habbit like scratching or digging the backyard</p>
                    </div>
                    <div className="p-5  bg-[var(--color-fourth)] row-[3] col-[1]">
                        <h1 className="text-lg desktop:text-xl font-bold mb-2">Consultation Services</h1>
                        <p className="text-sm desktop:text-base tracking-wide leading-5">Our experts are here to guide you through the entire cloning process, addressing any concerns and answering your questions</p>
                    </div>
                    <div className="p-5 bg-[var(--color-fourth)] row-[3] col-[2]">
                        <h1 className="text-lg desktop:text-xl font-bold mb-2">Genetic Preservation</h1>
                        <p className="text-sm desktop:text-base tracking-wide leading-5">Preserve the genetic material of your pet for future cloning possibilities</p>
                    </div>
                    <div className="p-5 bg-[var(--color-fourth)] row-[4] col-span-2 col-start-1 md:rounded-ee-3xl">
                        <h1 className="text-lg desktop:text-xl font-bold mb-2">Customer Care</h1>
                        <p className="text-sm desktop:text-base tracking-wide leading-5">We understand that the decision to clone a pet is a deeply personal one. Our compassionate and knowledgeable customer care team is available to provide support and assistance throughout your journey with rePet</p>
                    </div>
                </div>
            </div>

            <Testimonials />
        </div>
    )
}