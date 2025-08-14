import React from 'react'
import { HiChevronDoubleRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';


function About() {

    return (
        <div>
            <div className="lg:h-90 h-70  relative bg-cover bg-center " style={{ backgroundImage: "url('/assets/images/allhero.jpg')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[28px] md:text-[36px] lg:text-[40px] namdhinggo-bold text-white mt-10">About Us</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className=" text-[18px] sm:text-[22px] namdhinggo-bold text-white hover:text-[#C4292C] duration-300 ">Home</h2>
                        </Link>
                        <div className="flex justify-center items-center gap-1">  <span className="text-white  text-xl"><HiChevronDoubleRight /> </span><h2 className=" text-[18px] sm:text-[22px] namdhinggo-bold  text-[#C4292C] ">About The Conference</h2></div>

                    </div>
                </div>
            </div>

            <section className="">
                <div className="  2xl:px-0 px-4 lg:py-20 py-10  ">
                    <div className="flex lg:flex-row flex-col items-center justify-center gap-0 lg:gap-10 max-w-[1400px] mx-auto ">
                        <div className="  max-w-[565px] mx-auto lg:block hidden">
                            <img src="/assets/images/homeabout.png" alt="aboutus" className=" rounded-[35px] border-4 border-[#C4292C]  " loading='lazy' />
                        </div>
                        <div className="space-y-5 lg:space-y-5  ">
                            <h2 className="namdhinggo-bold lg:text-[34px] text-[34px] text-[#C4292C] lg:text-start text-center border-b-4 border-[#C4292C]  ">About Our Conference</h2>

                            <div className="  max-w-[565px] mx-auto block lg:hidden">
                                <img src="/assets/images/homeabout.png" alt="aboutus" className=" rounded-[35px] border-4 border-[#C4292C]  " loading='lazy' />
                            </div>
                            <p className="namdhinggo-bold lg:text-[28px] text-[20px] leading-[30px]">Shaping the Future of Digital Ecosystems</p>
                            <div className="space-y-3 mt-4">
                                <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">Our conference brings together global experts to explore innovations in computer science and digital ecosystems. It serves as a platform for sharing research, exchanging ideas, and promoting collaboration across disciplines to address technological challenges and shape the future of digital innovation.</p>
                                <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">The event features keynote sessions, technical presentations, workshops, and expert panels. Topics include artificial intelligence, cybersecurity, cloud computing, and IoT. Attendees gain insights, showcase work, and build connections that support academic growth, industry relevance, and technological advancement.</p>
                                <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">We aim to foster impactful dialogue and practical solutions through research and collaboration. Our mission is to support innovation, bridge academia and industry, and inspire participants to contribute meaningfully to the evolving landscape of digital ecosystems and smart technologies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About