'use client'

import { Android, Code } from "@/media/icons";
import { useInView } from "react-intersection-observer";

const ServiceSection = () => {

    const { ref: elementRef, inView: elementIsVisible } = useInView();

    return (
        <section id="service" className="py-4 ">
            <div className="w-full flex flex-col items-center">
                <div className="text-center w-full">
                    <h2 className="text-5xl my-5 text-lighter">My <span className="text-tertiary">Services</span></h2>
                    <p className="tracking-wide text-base">Lorem Ipsum is simply dummy text of the printing and typesetting<br /> industry. Lorem Ipsum standard dummy text.</p>
                    <div className="flex items-center justify-center my-5">
                        <hr className="h-px mx-2 bg-tertiary border-2 border-tertiary w-1/6" />
                    </div>
                </div>

                <div className="w-3/4 my-28">
                    <div className="w-full grid grid-cols-3 text-center gap-8">
                        <div ref={elementRef} className={`border border-tertiary py-12 px-8 ${elementIsVisible ? "visible animate__animated animate__fadeInLeft" : ""}`}>
                            <div className="w-full flex items-center justify-center ">
                                <div className="border p-3 rounded-full">
                                    <Code />
                                </div>
                            </div>
                            <h4 className="text-lighter capitalize my-4 text-xl">FrontEnd Developer</h4>
                            <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div ref={elementRef} className={`border border-tertiary py-12 px-8 ${elementIsVisible ? "visible animate__animated animate__fadeInDown" : ""}`}>
                            <div className="w-full flex items-center justify-center ">
                                <div className="border p-3 rounded-full">
                                    <Code />
                                </div>
                            </div>
                            <h4 className="text-lighter capitalize my-4 text-xl">BackEnd Developer</h4>
                            <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div ref={elementRef} className={`border border-tertiary py-12 px-8 ${elementIsVisible ? "visible animate__animated animate__fadeInRight" : ""}`}>
                            <div className="w-full flex items-center justify-center ">
                                <div className="border border-tertiary rounded-full">
                                    <Android />
                                </div>
                            </div>
                            <h4 className="text-lighter capitalize my-4 text-xl">Android Developer</h4>
                            <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}

export default ServiceSection;