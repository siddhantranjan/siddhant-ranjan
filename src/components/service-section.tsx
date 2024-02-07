'use client'

import { Android, Code } from "@/media/icons";
import { useInView } from "react-intersection-observer";

const ServiceSection = () => {

    const { ref: elementRef, inView: elementIsVisible } = useInView();

    return (
        <section id="service" className="py-4 ">
            <div className="w-full flex flex-col items-center">
                <div className="w-full text-center mt-16 flex flex-col items-center">
                    <h2 className="text-5xl my-5 text-lighter">My <span className="text-tertiary">Services</span></h2>
                    <p className="tracking-wide text-base md:w-1/2 lg:w-1/3">
                    Uncover a spectrum of tailored services designed to enhance and fulfill your unique needs in the Service section.</p>
                    <div className="w-full flex items-center justify-center my-5">
                        <hr className="h-px mx-2 bg-tertiary border-2 border-tertiary w-1/6" />
                    </div>
                </div>
                <div className="w-3/4 my-28">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-3 text-center gap-8">
                        <div ref={elementRef} className={`border border-tertiary py-12 px-8 ${elementIsVisible ? "visible animate__animated animate__fadeInLeft" : ""}`}>
                            <div className="w-full flex items-center justify-center ">
                                <div className="border p-3 rounded-full">
                                    <Code />
                                </div>
                            </div>
                            <h4 className="text-lighter capitalize my-4 text-xl">FrontEnd Developer</h4>
                            <p className="text-base">I focus in front-end development, using modern technologies like as Next.js and Tailwind CSS to create intuitive and visually appealing user experiences. With an aptitude for jQuery, I improve interactivity and create dynamic, engaging web experiences. Your projects are in capable hands for a modern, efficient, and user-friendly front end.</p>
                        </div>
                        <div className={`border border-tertiary py-12 px-8 ${elementIsVisible ? "visible animate__animated animate__flipInX" : ""}`}>
                            <div className="w-full flex items-center justify-center ">
                                <div className="border p-3 rounded-full">
                                    <Code />
                                </div>
                            </div>
                            <h4 className="text-lighter capitalize my-4 text-xl">BackEnd Developer</h4>
                            <p className="text-base">As a backend developer, I specialize in creating strong and scalable systems that provide smooth server-side functionality for applications. My services include creating efficient APIs, optimizing database structures, and building secure authentication mechanisms, all designed to improve the efficiency of your digital projects.</p>
                        </div>
                        <div className={`border border-tertiary py-12 px-8 ${elementIsVisible ? "visible animate__animated animate__fadeInRight" : ""}`}>
                            <div className="w-full flex items-center justify-center ">
                                <div className="border border-tertiary rounded-full">
                                    <Android />
                                </div>
                            </div>
                            <h4 className="text-lighter capitalize my-4 text-xl">Android Developer</h4>
                            <p className="text-base">I&apos;m excited to tackle a variety of projects and difficulties as I start on my Android development adventure. As a new Android developer, I&apos;m dedicated to continual learning, ensuring that your app&apos;s needs are handled with excitement and a fresh viewpoint. Let&apos;s work together to create new mobile solutions!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}

export default ServiceSection;