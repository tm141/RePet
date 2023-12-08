import Image from "next/image"

export default function OverView() {
    return (
        <div className="px-[var(--px-sm)] pt-12 pb-12 bg-[rgba(var(--color-primary-rgb),0.3)]">
            <h1 className="text-center desktop:text-right text-5xl font-bold py-5 rounded-xl desktop:px-14">Overview</h1>
            <div className="flex gap-20 desktop:pl-16 desktop:flex-row justify-center">
                <div className="pl-15 hidden desktop:block">
                    <Image src={'/scientist.jpg'} alt="scientist" height={600} width={600} className="rounded-xl" />
                </div>
                <div className="flex flex-col desktop:grid desktop:grid-rows-2 desktop:grid-cols-2 desktop:w-[50%] gap-4 ">
                    <div className="desktop:row-[1] desktop:leading-3  desktop:col-span-2 bg-[var(--color-fourth)] rounded-xl p-5 desktop:p-10">
                        <h1 className="text-xl desktop:text-3xl font-bold mb-6">Our Vision</h1>
                        <p className="tracking-wide desktop:leading-7">Our vision at rePet is to offer pet owners the unique opportunity to preserve the bond with their cherished pets, ensuring that the love, loyalty, and companionship they shared are perpetuated through advanced cloning technology. We strive to redefine the concept of pet companionship, transcending the boundaries of time and loss.</p>
                    </div>
                    <div className="desktop:row-[2] desktop:leading-3  desktop:col-[1] bg-[var(--color-fourth)] rounded-xl p-5">
                        <h1 className="text-lg desktop:text-2xl font-bold mb-6">Ethical Cloning</h1>
                        <p className="desktop:leading-7">We prioritize ethical considerations and transparency in our cloning process.</p>
                    </div>
                    <div className="desktop:row-[2] desktop:leading-3  desktop:col-[2] bg-[var(--color-fourth)] rounded-xl p-5">
                        <h1 className="text-lg desktop:text-2xl font-bold mb-6">Responsible Cloning</h1>
                        <p className="desktop:leading-7">Our practices adhere to all relevant regulations, ensuring the well-being of the cloned pets and promoting responsible cloning within the boundaries of ethical guidelines.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}