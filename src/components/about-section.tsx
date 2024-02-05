'use client'

import Image from "next/image";
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
    const { ref: elementRef, inView: elementIsVisible } = useInView();

    return (
        <section id="about" className="py-4">
            <div className="w-full">
                <div className="text-center mt-16">
                    <h2 className="text-5xl my-5 text-lighter">About <span className="text-tertiary">MySelf</span></h2>
                    <p className="tracking-wide text-base">Lorem Ipsum is simply dummy text of the printing and typesetting<br /> industry. Lorem Ipsum standard dummy text.</p>
                    <div className="flex items-center justify-center my-5">
                        <hr className="h-px mx-2 bg-tertiary border-2 border-tertiary w-1/6" />
                    </div>
                </div>

                <div className="w-full flex items-center justify-center my-28">
                    <div className="flex items-start justify-center w-4/5 space-x-14 h-160">
                        <div className="w-1/2 h-full">
                            <div ref={elementRef} className={`h-full w-full flex items-center justify-center ${elementIsVisible ? "visible animate__animated animate__fadeInLeft" : ""}`}>
                                <Image src="/blog-1.jpg" alt="profile" width={500} height={500} className="w-4/5 h-full object-cover" />
                            </div>
                        </div>
                        <div className="w-1/2 h-full">
                        <div ref={elementRef} className={`flex flex-col items-start justify-between h-full ${elementIsVisible ? "visible animate__animated animate__fadeInRight" : ""}`}>
                                        <h4 className="text-4xl text-lighter">Hello, I am <span className="text-tertiary">Siddhant Ranjan</span></h4>
                                        <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type
                                            specimen book. It has survived not only five centuries, but also the leap into
                                            electronic typesetting, remaining essentially unchanged. It was popularised
                                            in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                            passages, and more recently with desktop publishing software like Aldus
                                            PageMaker including versions of Lorem Ipsum. It is a long established fact
                                            that a reader will be distracted by the readable content of a page when
                                            looking at its layout.
                                        </p>
                                        <div className="flex flex-col space-y-6 w-full text-lighter">
                                            <div className="w-full flex items-start justify-start">
                                                <span className="w-1/4 font-semibold"> Name </span> : Siddhant Ranjan
                                            </div>
                                            <div className="w-full flex items-start justify-start">
                                                <span className="w-1/4 font-semibold"> Age </span>
                                                : 25
                                            </div>
                                            <div className="w-full flex items-start justify-start">
                                                <span className="w-1/4 font-semibold"> Address </span>
                                                : Bihar, India
                                            </div>
                                            <div className="w-full flex items-start justify-start">
                                                <span className="w-1/4 font-semibold"> Phone Number </span>
                                                : +91 8939015117
                                            </div>
                                            <div className="w-full flex items-start justify-start">
                                                <span className="w-1/4 font-semibold"> Email </span>
                                                : sidhantranjan31@gmail.com
                                            </div>
                                        </div>
                                        <button className="px-8 py-2 border border-tertiary rounded-3xl font-bold text-tertiary">Download CV</button>
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;