const ContactSection = () => {
    return (
        <section id="contact" className="py-4">
            <div className="w-full flex flex-col items-center">
                <div className="w-full text-center mt-8 flex flex-col items-center">
                    <h2 className="text-5xl my-5 text-lighter">Let&apos;s <span className="text-tertiary">Talk</span></h2>
                    <p className="tracking-wide text-base md:w-1/2 lg:w-1/3">
                    I welcome any opportunities to collaborate, brainstorm project fit, or discuss ways we can work together.</p>
                    <div className="w-full flex items-center justify-center my-5">
                        <hr className="h-px mx-2 bg-tertiary border-2 border-tertiary w-1/6" />
                    </div>
                </div>
                <div className="w-full lg:w-3/4 my-20 px-4 lg:p-0">
                    <div className="w-full flex flex-col lg:flex-row items-center justify-between space-y-5 lg:space-y-0 lg:space-x-4">
                        <div className="w-full">
                            <input placeholder="Name" className="text-darker w-full px-4 py-2 border-2 border-lighter focus:border-tertiary outline-none rounded-xl" />
                        </div>
                        <div className="w-full">
                            <input placeholder="Email" className="text-darker w-full px-4 py-2 border-2 border-lighter focus:border-tertiary outline-none rounded-xl" />
                        </div>
                        <div className="w-full">
                            <input placeholder="Subject" className="text-darker w-full px-4 py-2 border-2 border-lighter focus:border-tertiary outline-none rounded-xl" />
                        </div>
                    </div>
                    <div className="w-full mt-10">
                        <textarea placeholder="Write a message here" className="text-darker w-full h-72 rounded-xl px-4 py-2 resize-none outline-none border-2 focus:border-tertiary" />
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