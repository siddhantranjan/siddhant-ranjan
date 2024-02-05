'use client'

import { initHeadline } from '@/jquery-scripts/animated-headline'
import 'animate.css'
import { useEffect } from 'react'

import { useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const IntroSection = () => {

    const [init, setInit] = useState(false);
    const [particleJson, setParticleJson] = useState<any>();

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
            const particleJson = await import("@/config/particles.json");
            setParticleJson(particleJson);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);


    useEffect(() => {
        const init = async () => {
            const jquery = (await import('jquery')).default;
            initHeadline(jquery);
        }
        init();
    }, [])

    return (
        <section id="home" className="h-160 flex items-center justify-center">
            <div id="particles-js" className='-z-10'>
                {init && <Particles
                    id="tsparticles"
                    options={particleJson}
                />
                }
            </div>
            <div className="w-fit ">
                <div className="text-lighter flex flex-col items-center justify-center text-center">
                    <div className="cd-headline clip text-7xl px-4">
                        <span className="font-extrabold mx-2 text-center">I Am</span>
                        <span className="cd-words-wrapper font-extrabold mx-2 text-center">
                            <b className="is-visible">Siddhant Ranjan</b>
                            <b className="">Web Developer</b>
                        </span>
                    </div>
                    <div className='m-10'>
                        <a href="#work" className="px-6 py-3 border-2 border-tertiary m-4 rounded-full">View Work</a>
                        <a href="#contact" className="px-6 py-3 border-2 border-tertiary m-4 rounded-full js-scroll">Hire Me</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IntroSection;