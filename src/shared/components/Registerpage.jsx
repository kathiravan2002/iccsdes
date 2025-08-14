import React from 'react'
import { BsFillClockFill } from 'react-icons/bs'
import { FaArrowRightLong, FaCalendar } from 'react-icons/fa6'
import { IoLocationSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'


function Registerpage() {
    return (
        <div>
            <section className="bg-[#FFD7D8]" >
                <div className=" max-w-[1200px] mx-auto 2xl:px-0 px-4 ld:py-15 py-10 ">
                    <h2 className="namdhinggo-extrabold text-[#C4292C] lg:text-[34px] text-[26px] text-center">Join Us at ICCSDES 2025</h2>
                    <p className="inter-medium  text-base leading-[30px] text-justify md:text-center opacity-85 mt-2">Be a part of ICCSDES and experience a global platform for innovation, research, and collaboration. Engage with leading minds and shape the future of digital technologies.</p>
                    <div className="flex lg:flex-row flex-col lg:gap-10 gap-0 space-y-5  justify-center items-start sm:items-center lg:items-start lg:mt-8 mt-6 ">
                        <p className="namdhinggo-extrabold text-[20px]  flex gap-3"><IoLocationSharp className='text-[26px] text-[#C4292C]' />Wuhan, China</p>
                        <p className="namdhinggo-extrabold text-[20px]  flex gap-3"><FaCalendar className='text-[24px] text-[#C4292C] ' />December 30, 2025</p>
                        <p className="namdhinggo-extrabold text-[20px]  flex gap-3"><BsFillClockFill className='text-[24px] text-[#C4292C] ' />9:00 AM – 5:00 PM</p>
                    </div>
                

                <div className="bg-white p-5 rounded-[20px] space-y-3 mt-4">
                    <h2 className="text-center lg:text-[24px] text-[20px] namdhinggo-extrabold">Ready to Join the Innovation ?</h2>
                    <p className="inter-medium text-base leading-[30px] text-justify md:text-center opacity-85">Connect with global experts and explore groundbreaking ideas in computer science and digital ecosystems. Be part of the movement shaping tomorrow’s technology.</p>
                    <Link to='/paper-submission'>
                    <div className="mx-auto w-fit">
                        <button className="group relative overflow-hidden hover:text-[#C4292C] bg-[#C4292C]  text-white poppins-medium  cursor-pointer py-3 px-6 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2">
                            <span className="relative z-10">Register Now</span>
                            <FaArrowRightLong className='relative z-10 group-hover:translate-x-1 group-hover:text-[#C4292C] transition-transform duration-500' />
                            <div className="absolute -left-1/4 inset-0 h-full w-0 group-hover:w-[150%] duration-500 bg-white rounded-tr-full"></div>
                        </button>
                        </div>
                    </Link>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Registerpage