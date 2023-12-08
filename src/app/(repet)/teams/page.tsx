import Image from "next/image"

export default function Teams() {
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
                    <Image className="mx-auto rounded-3xl" src={'/teams/scientist.jpg'} alt={'Johnny'} height={300} width={300} />

                    <h1 className="pt-5 text-3xl font-bold">Johnny Sins</h1>
                    <h2 className="text-xl">Chief Bio-Engineer</h2>
                </div>
                <div className="text-center pb-10">
                    <Image className="mx-auto rounded-3xl" src={'/teams/scientist2.jpg'} alt={'Arasaka'} height={300} width={300} />

                    <h1 className="pt-5 text-3xl font-bold">Saburo Arasaka</h1>
                    <h2 className="text-xl">Chief Scientist</h2>
                </div>
            </div>
        </div>
    )
}