import Button from "./button"

export default function ContactUsForm() {
    return (
        <div className="content-center hidden sm:block">
            <p className="font-bold text-md md:text-lg laptop:text-4xl">Contact us</p>
            <form action='#'>
                <input className="my-2 p-3" type="text" id="name" name="name" placeholder="Enter your Name" /><br />
                <input className="my-2 p-3" type="email" id="email" name="email" placeholder="Enter a valid email address" /><br /><br />
                <textarea className="mb-2 p-3" placeholder="Something" rows={4}  id="message-daf4" name="message" required></textarea>
                <Button type1="blackButton" content1="Submit" ref1="#" />
            </form>
        </div>
    )
}