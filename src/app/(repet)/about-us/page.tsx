import Image from "next/image"

export default function AboutUs() {
    return (
        <div className="px-[var(--px-sm)] laptop:px-[var(--px)] mt-8 mb-12">
            <h1 className="font-bold text-5xl py-10 sm:text-left text-center">About</h1>
            <div className="flex justify-evenly my-5 xl:my-0">
                <Image src={'/science/4.jpg'} width={300} height={300} alt="science4" className="rounded-s-3xl hidden laptop:block" />
                <div className="bg-[var(--color-fourth)] w-fit h-fit leading-6 tracking-wide p-5 laptop:rounded-e-3xl my-5 sm:mb-auto sm:mt-auto">
                    <h1 className="pb-5 font-bold text-lg desktop:text-2xl">About RePet</h1>
                    <p className="text-sm desktop:text-xl">RePet emerged as a groundbreaking company at the forefront of pet cloning technology, revolutionizing the way we connect with our animal companions. At rePet, we bring the joy of beloved pets back into your life through cutting-edge cloning techniques</p>
                </div>
            </div>
            <div className="flex justify-evenly my-5 xl:my-0">
                <div className="bg-[var(--color-fourth)] w-fit h-fit leading-6 tracking-wide p-5 laptop:rounded-s-3xl my-5 sm:mb-auto sm:mt-auto">
                    <h1 className="pb-5 font-bold text-lg desktop:text-2xl">Our Vision</h1>
                    <p className="text-sm desktop:text-xl">Our vision at rePet is to offer pet owners the unique opportunity to preserve the bond with their cherished pets, ensuring that the love, loyalty, and companionship they shared are perpetuated through advanced cloning technology. We strive to redefine the concept of pet companionship, transcending the boundaries of time and loss</p>
                </div>
                <Image src={'/portrait3.jpg'} width={300} height={300} alt="science4" className="rounded-e-3xl hidden laptop:block" />
            </div>
            <div className="flex justify-evenly my-5 xl:my-0">
                <Image src={'/science/2.jpg'} width={300} height={300} alt="science4" className="rounded-s-3xl hidden laptop:block" />
                <div className="bg-[var(--color-fourth)] w-fit h-fit leading-6 tracking-wide p-5 laptop:rounded-e-3xl my-5 sm:mb-auto sm:mt-auto">
                    <h1 className="pb-5 font-bold text-lg desktop:text-2xl">The Cloning Process</h1>
                    <p className="text-sm desktop:text-xl">At rePet, we employ state-of-the-art cloning procedures that adhere to the highest ethical standards. Our team of experts utilizes the latest advancements in genetic replication to recreate a faithful and genetically identical companion to your original pet. We understand the emotional significance of this process, and every step is taken with the utmost care and precision</p>
                </div>
            </div>
            <div className="flex justify-evenly my-5 xl:my-0">
                <div className="bg-[var(--color-fourth)] w-fit h-fit leading-6 tracking-wide p-5 laptop:rounded-s-3xl my-5 sm:mb-auto sm:mt-auto">
                    <h1 className="pb-5 font-bold text-lg desktop:text-2xl">Ethical and Responsible Cloning</h1>
                    <p className="text-sm desktop:text-xl">We prioritize ethical considerations and transparency in our cloning process. Our practices adhere to all relevant regulations, ensuring the well-being of the cloned pets and promoting responsible cloning within the boundaries of ethical guidelines</p>
                </div>
                <Image src={'/law.jpg'} width={300} height={300} alt="science4" className="rounded-e-3xl hidden laptop:block" />
            </div>
        </div>
    )
}