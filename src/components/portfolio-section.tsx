import Image from "next/image";

const PortfolioSection = () => {
    return (
        <section id="portfolio" className="py-4">
            <div className="w-full flex flex-col items-center">
                <div className="text-center w-full">
                    <h2 className="text-5xl my-5 text-lighter">My <span className="text-tertiary">Portfolio</span></h2>
                    <p className="tracking-wide text-base">Lorem Ipsum is simply dummy text of the printing and typesetting<br /> industry. Lorem Ipsum standard dummy text.</p>
                    <div className="flex items-center justify-center my-5">
                        <hr className="h-px mx-2 bg-tertiary border-2 border-tertiary w-1/6" />
                    </div>
                </div>

                <div className="w-3/4 my-28">
                    <div className="w-full grid grid-cols-2 text-center gap-8">
                        <div className="border border-tertiary h-80">
                            <Image width={500} height={500} src="/bloggin-next-site.png" alt="blogging-ste" className="w-full h-full  object-cover" />
                        </div>
                        <div className="border border-tertiary h-80">
                            PORTFOLIO 2
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PortfolioSection;