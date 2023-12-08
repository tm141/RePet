import Link from "next/link";
import Image from "next/image";
import ContactUsForm from "./contactUsForm";
import repetUrl from '../../../public/repet.png'

export default function Footer() {
    return (
        <div className=" bottom-0  ">
            <div className="font-metropolis h-fit bg-blue-400 w-full flex flex-col laptop:flex laptop:flex-row py-8 items-center gap-2 laptop:justify-evenly px-[var(--px-sm)] desktop:px-[var(--px)]">
                <div className="justify-center laptop:justify-evenly min-w[200]">
                    <Image
                        src={repetUrl}
                        alt="repet logo"
                        height={200}
                        width={200}
                    />
                </div>
                <div className="hidden laptop:block text-lg my-5 sm:text-xl sm:p-5 font-bold max-sm:mx-auto rounded-3xl h-fit">
                    <ul>
                        <li className="py-3 px-3 rounded-lg hover:text-[var(--color-secondary)]"><Link key="Home" href='/'>Home</Link></li>
                        <li className="py-3 px-3 rounded-lg hover:text-[var(--color-secondary)]"><Link key="About Us" href='/about-us'>About Us</Link></li>
                        <li className="py-3 px-3 rounded-lg hover:text-[var(--color-secondary)]"><Link key="Services" href='/services'>Services</Link></li>
                        <li className="py-3 px-3 rounded-lg hover:text-[var(--color-secondary)]"><Link key="Teams" href='/teams'>Teams</Link></li>
                    </ul>
                </div>
                <div className="min-md:mr-0 min-md:ml-auto max-sm:ml-auto max-sm:mr-auto">
                    <ContactUsForm />
                </div>
            </div>

            <div className="bg-blue-400 flex flex-col laptop:flex-row laptop:justify-between p-2">
                <div className="opacity-50 justify-center laptop:justify-left">
                    <p className="text-center laptop:text-left">By: Andre Timoti M</p>
                    <div className="flex justify-center laptop:justify-normal">
                        <a href="https://www.linkedin.com/in/andre-mahadika-5280a493/" target='_blank'>
                            <Image src={'/linkedin-48.png'} alt="LinkedIn" width={35} height={35} />
                        </a>
                        <a href="https://github.com/tm141" target='_blank'>
                            <Image src={'/github-48.png'} alt="github" width={35} height={35} />
                        </a>
                    </div>
                </div>
                <Link className="mx-auto laptop:mr-2 laptop:ml-auto mb-0 mt-auto opacity-50" key="credits" href='/credit'>Credits</Link>
            </div>
        </div>
    )
}