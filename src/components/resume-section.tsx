'use client'

import { GraduationCap, Work } from "@/media/icons";
import { useInView } from "react-intersection-observer";

const ResumeSection = () => {
    const { ref: elementRef, inView: elementIsVisible } = useInView();
    return (
        <section id="resume" className="">
            <div className="w-full">
                <div className="w-full text-center mt-8 flex flex-col items-center">
                    <h2 className="text-5xl my-5 text-lighter">My <span className="text-tertiary">Resume</span></h2>
                    <p className="tracking-wide text-base md:w-1/2 lg:w-1/3">
                        This section provides a picture of my professional history, including a complete resume that reflects my talents, expertise, and enthusiasm for meaningful initiatives.</p>
                    <div className="w-full flex items-center justify-center my-5">
                        <hr className="h-px mx-2 bg-tertiary border-2 border-tertiary w-1/6" />
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="w-full lg:w-3/4 flex flex-col lg:flex-row items-center lg:items-start justify-between lg:space-x-8 my-28 px-4 md:px-0">
                        <div ref={elementRef} className="w-full md:w-2/3 lg:w-1/2 flex flex-col">
                            <GraduationCap />
                            <h3 className="text-3xl text-lighter">Education:</h3>
                            <div className={`group mt-8 border-2 border-lighter h-72 lg:h-52 px-8 pt-8 ${elementIsVisible ? "visible animate__animated animate__fadeInLeft" : ""}`}>
                                <div className="">
                                    <strong>2017 - 2021</strong>
                                    <h5 className="text-tertiary my-2 text-xl">Electronics And Communication Engineering</h5>
                                    <p>I pursued my Bachelor&apos;s in Electronics and Communication Engineering from SRM Institue of Science And Technology, Chennai.</p>
                                    <div className="flex items-center justify-center mt-5">
                                        <hr className="bg-tertiary border-2 border-tertiary w-3/4 group-hover:w-full" />
                                    </div>
                                </div>
                            </div>
                            <div className={`group mt-8 border-2 border-lighter h-72 lg:h-52 px-8 pt-8 ${elementIsVisible ? "visible animate__animated animate__fadeInLeft animate__delay-1s" : ""}`}>
                                <div className="">
                                    <strong>2014-2016</strong>
                                    <h5 className="text-tertiary my-2 text-xl">High School</h5>
                                    <p>Gurukul Vidyapeeth Vaishali, Bihar<br /> Subject: Maths, Physics, Chemisty, English and Physical Educaiton</p>
                                    <div className="flex items-center justify-center mt-5">
                                        <hr className="bg-tertiary border-2 border-tertiary w-3/4 group-hover:w-full" />
                                    </div>
                                </div>
                            </div>
                            <div className={`group mt-8 border-2 border-lighter h-40 px-8 pt-8 ${elementIsVisible ? "visible animate__animated animate__fadeInLeft animate__delay-2s" : ""}`}>
                                <div className="">
                                    <strong>2004 - 2014</strong>
                                    <h5 className="text-tertiary my-2 text-xl">Matriculation</h5>
                                    <div className="flex items-center justify-center mt-12">
                                        <hr className="bg-tertiary border-2 border-tertiary w-3/4 group-hover:w-full" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col mt-16 lg:mt-0">
                            <Work />
                            <h3 className="text-3xl text-lighter">Experience:</h3>
                            <div className="h-160">
                                <div className={`group h-full mt-8 border-2 border-lighter  px-8 pt-8 ${elementIsVisible ? "visible animate__animated animate__fadeInRight" : ""}`}>
                                    <div className="flex flex-col justify-around">
                                        <strong>2021 - Present</strong>
                                        <h1 className="text-tertiary my-2 text-2xl">Ncompass TechStudio</h1>
                                        <h1 className="text-tertiary my-2 text-xl">Backend Developer</h1>
                                        <div className="mt-10">
                                            <ul className="list-disc">
                                                <li>
                                                    Deployed and scaled serverless apps on AWS Lambda and API Gateway successfully,
                                                    resulting in enhanced performance and cost optimisation.
                                                </li>
                                                <li>
                                                    Implemented a CI/CD pipeline with Code Pipeline to streamline the software development
                                                    lifecycle, greatly decreasing manual deployment requirements and enabling quicker delivery of
                                                    new features and issue fixes
                                                </li>
                                                <li>
                                                    Increased productivity and efficiency by using the SAM CLI for local serverless application
                                                    development and testing, allowing for quick iteration and troubleshooting
                                                </li>
                                                <li>
                                                    Successfully designed a step function to drive dynamic user interfaces, resulting in a better
                                                    user experience and greater UI modification options.
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="flex items-center justify-center mt-16">
                                            <hr className="bg-tertiary border-2 border-tertiary w-3/4 group-hover:w-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ResumeSection;