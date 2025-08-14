import React from 'react'
import { HiChevronDoubleRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function Scope() {

    const data = [
        {
            title: "Pure and Applied Sciences",
            content: "Physics, chemistry, biology, mathematics, and environmental sciences, fostering innovative approaches that solve global challenges and drive sustainable advancements across various interdisciplinary scientific fields worldwide."
        },
        {
            title: "Engineering Disciplines",
            content: "Civil, mechanical, electrical, electronics, computer, and chemical engineering, encouraging creative, practical, and technology-driven solutions that transform industries, infrastructure, and communities while addressing pressing environmental and societal issues globally."
        },
        {
            title: "Emerging Technologies",
            content: "Artificial intelligence, robotics, nanotechnology, renewable energy, biotechnology, Internet of Things (IoT), and quantum computing, supporting innovations that enhance industry efficiency, sustainability, and overall quality of life worldwide."
        },
    ]
    return (
        <div>
            <div className="lg:h-90 h-70  relative bg-cover bg-center " style={{ backgroundImage: "url('/assets/images/allhero.jpg')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[28px] md:text-[36px] lg:text-[40px] namdhinggo-bold text-white mt-10">Scope of the Conference</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className=" text-[18px] sm:text-[22px] namdhinggo-bold text-white hover:text-[#C4292C] duration-300 ">Home</h2>
                        </Link>
                        <div className="flex justify-center items-center gap-1">  <span className="text-white  text-xl"><HiChevronDoubleRight /> </span><h2 className=" text-[18px] sm:text-[22px] namdhinggo-bold  text-[#C4292C] ">Scope of the Conference</h2></div>

                    </div>
                </div>
            </div>

            <section className="">
                <div className="  2xl:px-0 px-4 lg:py-20 py-10  ">
                    <div className="flex lg:flex-row flex-col items-center justify-center gap-0 lg:gap-10 max-w-[1400px] mx-auto ">
                        <div className="  max-w-[565px] mx-auto lg:block hidden">
                            <img src="/assets/images/homemission.png" alt="aboutus" className=" rounded-[35px] border-4 border-[#C4292C]  " loading='lazy' />
                        </div>
                        <div className="space-y-5 lg:space-y-5  ">
                            <h2 className="namdhinggo-bold lg:text-[34px] text-[34px] text-[#C4292C] lg:text-start text-center border-b-4 border-[#C4292C]  ">Scope of Our Conference</h2>

                            <div className="  max-w-[565px] mx-auto block lg:hidden">
                                <img src="/assets/images/homemission.png" alt="aboutus" className=" rounded-[35px] border-4 border-[#C4292C]  " loading='lazy' />
                            </div>
                            <p className="namdhinggo-bold lg:text-[28px] text-[20px] leading-[30px]">Building Digital Ecosystems Through Innovation </p>
                            <div className="space-y-3 mt-4">
                                <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">The International Conference on Computer Science and Digital Ecosystems Summit brings together experts, researchers, and professionals to share innovative ideas, research findings, and technological advancements shaping the future of computer science and interconnected digital ecosystems worldwide.</p>
                                <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">This summit covers diverse domains including artificial intelligence, blockchain, cybersecurity, cloud computing, data science, IoT, and smart technologies. It promotes interdisciplinary collaboration between academia and industry to develop impactful, sustainable, and inclusive digital solutions for global challenges.</p>
                                <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">Through keynote speeches, technical sessions, and panel discussions, participants will explore both theoretical and practical perspectives. The conference aims to inspire innovation, foster partnerships, and empower communities to navigate and thrive in a rapidly evolving digital landscape.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Scope