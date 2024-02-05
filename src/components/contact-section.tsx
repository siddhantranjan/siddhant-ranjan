const ContactSection = () => {
    return (
        <section id="contact" className="py-4">
            <div className="w-full flex flex-col items-center">
                <div className="text-center w-full">
                    <h2 className="text-5xl my-5 text-lighter">Let&apos;s<span className="text-tertiary">Talk</span></h2>
                    <p className="tracking-wide text-base">Lorem Ipsum is simply dummy text of the printing and typesetting<br /> industry. Lorem Ipsum standard dummy text.</p>
                    <div className="flex items-center justify-center my-5">
                        <hr className="h-px mx-2 bg-tertiary border-2 border-tertiary w-1/6" />
                    </div>
                </div>

                <div className="w-3/4 my-20">
                    <div className="w-full flex items-center justify-between space-x-4">
                        <div className="w-full">
                            <input placeholder="Name" className="w-full px-4 py-2 border-2 border-lighter focus:border-tertiary outline-none rounded-xl" />
                        </div>
                        <div className="w-full">
                            <input placeholder="Email" className="w-full px-4 py-2 border-2 border-lighter focus:border-tertiary outline-none rounded-xl" />
                        </div>
                        <div className="w-full">
                            <input placeholder="Subject" className="w-full px-4 py-2 border-2 border-lighter focus:border-tertiary outline-none rounded-xl" />
                        </div>
                    </div>
                    <div className="w-full mt-10">
                        <textarea placeholder="Write a message here" className="text-darker w-full h-72 rounded-xl px-4 py-2 resize-none" />
                    </div>
                    <div className="w-full flex flex-col items-center justify-center mt-10">
                        <button className="border border-lighter px-6 py-2 rounded-full text-tertiary hover:bg-tertiary hover:text-darker">Send Message</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;