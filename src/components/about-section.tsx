'use client'

import Image from "next/image";
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
    const { ref: elementRef, inView: elementIsVisible } = useInView();

    return (
        <section id="about" className="py-4">
            <div className="w-full">
                <div className="w-full text-center mt-16 flex flex-col items-center">
                    <h2 className="text-5xl my-5 text-lighter">About <span className="text-tertiary">MySelf</span></h2>
                    <p className="tracking-wide text-base w-1/3">
                        Explore my professional domain, digging into the experiences, talents, and beliefs that have shaped my identity during this digital journey. 🌐🚀</p>
                    <div className="w-full flex items-center justify-center my-5">
                        <hr className="h-px mx-2 bg-tertiary border-2 border-tertiary w-1/6" />
                    </div>
                </div>

                <div className="w-full flex items-center justify-center my-28">
                    <div className="flex items-start justify-center w-4/5 space-x-14 h-160">
                        <div className="w-1/2 h-full">
                            <div ref={elementRef} className={`h-full w-full flex items-center justify-center ${elementIsVisible ? "visible animate__animated animate__fadeInLeft" : ""}`}>
                                <Image src="/display-photo.jpg" alt="profile" width={500} height={500} className="w-4/5 h-full object-cover" />
                            </div>
                        </div>
                        <div className="w-1/2 h-full">
                            <div ref={elementRef} className={`flex flex-col items-start justify-between h-full ${elementIsVisible ? "visible animate__animated animate__fadeInRight" : ""}`}>
                                <h4 className="text-4xl text-lighter">Hello, I am <span className="text-tertiary">Siddhant Ranjan</span></h4>
                                <p className="">
                                    Over the past three years, I have built a strong foundation in developing and delivering highly scalable, reliable, and secure online
                                    applications using Node.js, AWS Lambda, CloudFormation templates, and the Code Pipeline. My experience includes creating robust
                                    and efficient serverless architectures, leveraging the power of AWS Lambda for seamless scaling and cost optimization. I have
                                    successfully utilized CloudFormation templates to automate infrastructure provisioning, ensuring consistent and reproducible
                                    environments. By implementing the Code Pipeline, I have streamlined the deployment process, enabled faster delivery of updates
                                    while maintained rigorous testing and security measures.
                                    I've also broadened my technical expertise to include Firebase and Next.js, enhancing my capabilities in web development.
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