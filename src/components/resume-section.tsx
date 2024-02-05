'use client'

import { useInView } from "react-intersection-observer";

const ResumeSection = () => {
    const { ref: elementRef, inView: elementIsVisible } = useInView();
    return (
        <section id="resume" className="">
            <div className="w-full">
                <div className="text-center mt-16">
                    <h2 className="text-5xl my-5 text-lighter">My <span className="text-tertiary">Resume</span></h2>
                    <p className="tracking-wide text-base">Lorem Ipsum is simply dummy text of the printing and typesetting<br /> industry. Lorem Ipsum standard dummy text.</p>
                    <div className="flex items-center justify-center my-5">
                        <hr className="h-px mx-2 bg-tertiary border-2 border-tertiary w-1/6" />
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="w-3/4 flex items-center justify-between space-x-8 my-28">
                        <div ref={elementRef} className="flex flex-col">
                            <h3 className="text-3xl text-lighter">Education:</h3>
                            <div className={`mt-8 border-2 border-lighter px-8 pt-8 ${elementIsVisible ? "visible animate__animated animate__fadeInLeft" : ""}`}>
                                <div className="group">
                                    <strong>2000 - 2005</strong>
                                    <h5 className="text-tertiary my-2 text-xl">Computer science</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Enim eveniet incidunt quidem illum repellat, a nemo cumque optio asperiores
                                        tempora delectus cupiditate</p>
                                    <div className="flex items-center justify-center mt-5">
                                        <hr className="bg-tertiary border-2 border-tertiary w-3/4 group-hover:w-full" />
                                    </div>
                                </div>
                            </div>
                            <div className={`mt-8 border-2 border-lighter px-8 pt-8 ${elementIsVisible ? "visible animate__animated animate__fadeInLeft animate__delay-1s" : ""}`}>
                                <div className="group">
                                    <strong>2000 - 2005</strong>
                                    <h5 className="text-tertiary my-2 text-xl">Computer science</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Enim eveniet incidunt quidem illum repellat, a nemo cumque optio asperiores
                                        tempora delectus cupiditate</p>
                                    <div className="flex items-center justify-center mt-5">
                                        <hr className="bg-tertiary border-2 border-tertiary w-3/4 group-hover:w-full" />
                                    </div>
                                </div>
                            </div>
                            <div className={`mt-8 border-2 border-lighter px-8 pt-8 ${elementIsVisible ? "visible animate__animated animate__fadeInLeft animate__delay-2s" : ""}`}>
                                <div className="group">
                                    <strong>2000 - 2005</strong>
                                    <h5 className="text-tertiary my-2 text-xl">Computer science</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Enim eveniet incidunt quidem illum repellat, a nemo cumque optio asperiores
                                        tempora delectus cupiditate</p>
                                    <div className="flex items-center justify-center mt-5">
                                        <hr className="bg-tertiary border-2 border-tertiary w-3/4 group-hover:w-full" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <h3 className="text-3xl text-lighter">Experience:</h3>
                            <div className={`mt-8 border-2 border-lighter px-8 pt-8 ${elementIsVisible ? "visible animate__animated animate__fadeInRight" : ""}`}>
                                <div className="group">
                                    <strong>2000 - 2005</strong>
                                    <h5 className="text-tertiary my-2 text-xl">Computer science</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Enim eveniet incidunt quidem illum repellat, a nemo cumque optio asperiores
                                        tempora delectus cupiditate</p>
                                    <div className="flex items-center justify-center mt-5">
                                        <hr className="bg-tertiary border-2 border-tertiary w-3/4 group-hover:w-full" />
                                    </div>
                                </div>
                            </div>
                            <div className={`mt-8 border-2 border-lighter px-8 pt-8 ${elementIsVisible ? "visible animate__animated animate__fadeInRight animate__delay-1s" : ""}`}>
                                <div className="group">
                                    <strong>2000 - 2005</strong>
                                    <h5 className="text-tertiary my-2 text-xl">Computer science</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Enim eveniet incidunt quidem illum repellat, a nemo cumque optio asperiores
                                        tempora delectus cupiditate</p>
                                    <div className="flex items-center justify-center mt-5">
                                        <hr className="bg-tertiary border-2 border-tertiary w-3/4 group-hover:w-full" />
                                    </div>
                                </div>
                            </div>
                            <div className={`mt-8 border-2 border-lighter px-8 pt-8 ${elementIsVisible ? "visible animate__animated animate__fadeInRight animate__delay-2s" : ""}`}>
                                <div className="group">
                                    <strong>2000 - 2005</strong>
                                    <h5 className="text-tertiary my-2 text-xl">Computer science</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Enim eveniet incidunt quidem illum repellat, a nemo cumque optio asperiores
                                        tempora delectus cupiditate</p>
                                    <div className="flex items-center justify-center mt-5">
                                        <hr className="bg-tertiary border-2 border-tertiary w-3/4 group-hover:w-full" />
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