import Image from "next/image"

export default function AboutUs() {
    return (
        <div className="px-[var(--px-sm)] pt-6 laptop:px-[var(--px)] mt-8 mb-12">
            <h1 className="font-bold text-5xl py-10  text-center">About</h1>
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

            <div className="bg-[var(--color-fourth)] p-5 mt-10 laptop:rounded-3xl">
                <h1 className="text-2xl laptop:text-5xl font-bold pt-2 py-10">Our History</h1>
                <h1 className="text-lg desktop:text-2xl font-bold laptop:text-2xl pb-5">Our Humble Beginnings: Late 80s</h1>

                <p className="leading-5 text-sm desktop:text-xl laptop:leading-6 laptop:tracking-wide laptop:text-justify pb-5">
                    In the late 1980s, Repet had its roots in the passionate heart of Michael Drucker. It all began with a profound loss - a fire that claimed the lives of Michael's beloved dogs. This tragic event ignited a flame within him to channel grief into purpose.
                </p>

                <h1 className="text-lg desktop:text-2xl font-bold laptop:text-2xl py-5">The Journey of Michael Drucker: Scientist and Businessman</h1>

                <p className="leading-5 text-sm desktop:text-xl laptop:leading-6 laptop:tracking-wide laptop:text-justify pb-5">
                    Determined to prevent others from experiencing the heart-wrenching loss he endured, Michael embarked on a transformative journey. Driven by his love for animals and a newfound mission, he delved into the world of science and business.

                    Through years of dedication, Michael evolved into both a seasoned scientist and a compassionate entrepreneur. His mission was clear: to develop innovative solutions that would safeguard the bond between pets and their owners, sparing families from the anguish of losing a cherished companion.
                </p>

                <h1 className="text-lg desktop:text-2xl font-bold laptop:text-2xl py-5">The Birth of Repet: Where Science Meets Compassion</h1>

                <p className="leading-5 text-sm desktop:text-xl laptop:leading-6 laptop:tracking-wide laptop:text-justify pb-5">
                    In the spirit of innovation and driven by empathy, Repet was born. Michael's vision for Repet was grounded in the belief that cutting-edge technology and heartfelt compassion could coalesce to create products that would redefine pet care.
                </p>

                <h1 className="text-lg desktop:text-2xl font-bold laptop:text-2xl py-5">A Legacy of Preventing Heartache</h1>

                <p className="leading-5 text-sm desktop:text-xl laptop:leading-6 laptop:tracking-wide laptop:text-justify pb-5">
                    As the years unfolded, Repet grew from a humble endeavor to a leading force in the pet care industry. The company's commitment to preventing the pain of lost pets has remained unwavering. Each product and service is a testament to Michael Drucker's enduring passion and the enduring mission of Repet: to keep the bonds between pets and their families unbroken.

                    Today, as we reflect on our journey, we honor the legacy of our founder, Michael Drucker, whose love for his dogs set in motion a chain of events that has touched the lives of countless families. At Repet, our story is one of turning personal loss into a shared mission, and we continue to strive for a world where no one has to endure the heartache of losing a beloved pet.
                </p>
            </div>

            <div className="bg-[var(--color-fourth)] rounded-3xl p-5 mt-10">
                <div className="flex flex-col py-10 testimonial:flex-row laptop:align-middle">
                    <Image className="mx-auto rounded-3xl" src={'/teams/drucker.jpg'} alt={'drucker'} height={400} width={400} />

                    <div className="laptop:pl-5 flex flex-col justify-center">
                        <h1 className="text-2xl laptop:text-5xl py-2 pt-5 font-bold">Michael Drucker</h1>
                        <h2 className="text-xl laptop:text-2xl py-2">Founder</h2>
                        <p className="leading-5 text-sm desktop:text-xl laptop:leading-6 laptop:tracking-wide pb-5 items-center">
                            Michael Drucker, Repet's founder, transitioned from a tragic loss in the late 1980s to become a distinguished scientist. Focused on preventing pet loss, he founded Repet, merging scientific expertise with entrepreneurship. His professional journey drives Repet's commitment to innovative pet care solutions, ensuring enduring bonds between pets and families.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col py-10 testimonial:flex-row laptop:align-middle">
                    <Image className="mx-auto rounded-3xl" src={'/teams/engineer.jpg'} alt={'engineer'} height={400} width={400} />

                    <div className="laptop:pl-5 flex flex-col justify-center">
                        <h1 className="text-2xl laptop:text-5xl py-2 pt-5 font-bold">Peter Weyland</h1>
                        <h2 className="text-xl laptop:text-2xl py-2">Chief Engineer</h2>
                        <p className="leading-5 text-sm desktop:text-xl laptop:leading-6 laptop:tracking-wide pb-5 items-center">
                            Peter Weyland, our esteemed Chief Engineer at Repet, embarked on a professional journey fueled by a passion for pushing technological frontiers. With a keen understanding of engineering intricacies, he applies his expertise to enhance Repet's innovative pet care solutions. Inspired by a shared vision with Repet's founder, Weyland plays a pivotal role in ensuring that the company continues to pioneer cutting-edge advancements. As Chief Engineer, he contributes to reinforcing the unbreakable bonds between pets and their families through the seamless integration of technology and compassion.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col py-10 testimonial:flex-row laptop:align-middle">
                    <Image className="mx-auto rounded-3xl" src={'/teams/scientist.jpg'} alt={'scientist'} height={400} width={400} />

                    <div className="laptop:pl-5 flex flex-col justify-center">
                        <h1 className="text-2xl laptop:text-5xl py-2 pt-5 font-bold">Sheperd</h1>
                        <h2 className="text-xl laptop:text-2xl py-2">Chief Scientist</h2>
                        <p className="leading-5 text-sm desktop:text-xl laptop:leading-6 laptop:tracking-wide pb-5 items-center">
                            Saitama, our distinguished Chief Scientist at Repet, embarked on a professional journey driven by a relentless pursuit of excellence. Armed with a profound understanding of science and a passion for advancing pet care, Saitama brings unparalleled expertise to our team. Inspired by Repet's mission to prevent the pain of pet loss, Saitama's innovative contributions play a pivotal role in shaping cutting-edge solutions. As Chief Scientist, Saitama is dedicated to pushing the boundaries of technology and compassion, ensuring Repet remains at the forefront of revolutionizing the pet care industry and preserving the enduring bonds between pets and their families.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col py-10 testimonial:flex-row laptop:align-middle">
                    <Image className="mx-auto rounded-3xl" src={'/teams/scientist2.jpg'} alt={'scientist2'} height={400} width={400} />

                    <div className="laptop:pl-5 flex flex-col justify-center">
                        <h1 className="text-2xl laptop:text-5xl py-2 pt-5 font-bold">Saburo Arasaka</h1>
                        <h2 className="text-xl laptop:text-2xl py-2">Chief Scientist 2</h2>
                        <p className="leading-5 text-sm desktop:text-xl laptop:leading-6 laptop:tracking-wide pb-5 items-center">
                            Saburo Arasaka, our distinguished Chief Scientist at Repet, has forged an illustrious career driven by a profound dedication to scientific innovation. With an exceptional understanding of the intricate dynamics of pet care, Arasaka brings unparalleled expertise to our team. Inspired by Repet's unwavering commitment to preventing the heartache of pet loss, Arasaka's groundbreaking contributions play a central role in shaping advanced solutions. In his role as Chief Scientist, Saburo Arasaka is at the forefront of integrating cutting-edge technology and compassion.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-[var(--color-fourth)] rounded-3xl p-5 mt-10">
                <h1 className="text-2xl laptop:text-5xl font-bold pt-2 py-10">Our Culture</h1>
                <h1 className="text-lg desktop:text-2xl font-bold laptop:text-2xl pb-5">Nurturing Innovation, Fueled by Compassion</h1>
                <p className="leading-5 text-sm desktop:text-xl laptop:leading-6 laptop:tracking-wide laptop:text-justify pb-5">
                    At rePet, our culture is a vibrant tapestry woven with innovation, compassion, and a shared commitment to transforming the pet care landscape. We are more than a company; we are a community of passionate individuals united by a singular vision — to safeguard the unbreakable bond between pets and their families.
                </p>

                <h1 className="text-lg desktop:text-2xl font-bold laptop:text-2xl pb-5">Innovation at the Core</h1>
                <p className="leading-5 text-sm desktop:text-xl laptop:leading-6 laptop:tracking-wide laptop:text-justify pb-5">
                    Our foundation rests on a bedrock of innovation. We encourage a spirit of curiosity and exploration, empowering each team member to push boundaries and challenge the status quo. From our Chief Scientists to our Engineers, every role plays a vital part in pioneering cutting-edge solutions that redefine pet care.
                </p>

                <h1 className="text-lg desktop:text-2xl font-bold laptop:text-2xl pb-5">Passion for Pets</h1>
                <p className="leading-5 text-sm desktop:text-xl laptop:leading-6 laptop:tracking-wide laptop:text-justify pb-5">
                    Our love for animals is not just a sentiment but a driving force. Every member of the rePet family shares a deep, heartfelt connection with the pets we aim to protect. This shared passion fosters an environment where empathy and understanding flourish, ensuring our products and services resonate with the genuine needs of pets and their families.
                </p>

                <h1 className="text-lg desktop:text-2xl font-bold laptop:text-2xl pb-5">Collaborative Synergy</h1>
                <p className="leading-5 text-sm desktop:text-xl laptop:leading-6 laptop:tracking-wide laptop:text-justify pb-5">
                    Collaboration is the heartbeat of rePet. We believe in the power of collective intelligence, where diverse perspectives converge to spark innovative ideas. Open communication channels and a flat organizational structure foster an atmosphere where every voice is heard, and each contribution is valued.
                </p>

                <h1 className="text-lg desktop:text-2xl font-bold laptop:text-2xl pb-5">Empathy in Action</h1>
                <p className="leading-5 text-sm desktop:text-xl laptop:leading-6 laptop:tracking-wide laptop:text-justify pb-5">
                    Compassion is more than a virtue; it's a principle that guides our actions. From our Chief Scientist to our customer support team, empathy is at the forefront of our interactions. We understand the emotional bonds our customers share with their pets, and this understanding permeates every aspect of our work.
                </p>

                <h1 className="text-lg desktop:text-2xl font-bold laptop:text-2xl pb-5">Continuous Learning and Growth</h1>
                <p className="leading-5 text-sm desktop:text-xl laptop:leading-6 laptop:tracking-wide laptop:text-justify pb-5">
                    At rePet, we view challenges as opportunities for growth. Our commitment to continuous learning is reflected in the support and resources we provide for professional development. As we evolve, so do our team members, ensuring that everyone grows both personally and professionally.
                </p>

                <h1 className="text-lg desktop:text-2xl font-bold laptop:text-2xl pb-5">Sustainability and Responsibility</h1>
                <p className="leading-5 text-sm desktop:text-xl laptop:leading-6 laptop:tracking-wide laptop:text-justify pb-5">
                    We recognize the interconnectedness of our actions with the wider world. As stewards of the environment, we strive for sustainability in our operations and products. Our commitment to responsible business practices ensures that we contribute positively to the communities we serve.
                </p>

                <h1 className="text-lg desktop:text-2xl font-bold laptop:text-2xl pb-5">Celebrating Success Together</h1>
                <p className="leading-5 text-sm desktop:text-xl laptop:leading-6 laptop:tracking-wide laptop:text-justify pb-5">
                    Success at rePet is a collective achievement. Whether it's a product launch, a breakthrough in research, or a team milestone, we celebrate together. Recognition is not just a formality but a genuine acknowledgment of the dedication and hard work that propels us forward.

                    In essence, the rePet culture is a dynamic ecosystem where innovation flourishes, empathy prevails, and the shared love for pets binds us together. We are not just creating products; we are shaping a future where the bonds between pets and their families remain enduring and unbreakable.
                </p>
            </div>
        </div>
    )
}