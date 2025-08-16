import React from 'react'
import { BsCalendar2RangeFill } from 'react-icons/bs';
import { FaArrowRightLong, FaLocationDot } from 'react-icons/fa6';
import { GoDotFill } from 'react-icons/go';
import { TbPointFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';


function Home() {


    const researchAreas = [
        {
            title: "Quantum Computing",
            content: "Explore quantum algorithms, hardware, and applications for complex problems."
        },
        {
            title: "Climate Technologies",
            content: "Innovative solutions for emissions reduction and sustainable climate practices."
        },
        {
            title: "Synthetic Biology",
            content: "Design biological systems for medicine, agriculture, and industry applications."
        },
        {
            title: "Smart Systems",
            content: "Connect devices for automation in homes, cities, and industries."
        },
        // {
        //     title: "Blockchain and Decentralized Technologies",
        //     content: "Study the underlying principles of blockchain, its applications in secure transactions, smart contracts, and decentralized finance, along with emerging decentralized web technologies."
        // }
    ];
    return (
        <div >
            <div className="relative sm:h-screen bg-cover " style={{ backgroundImage: "url('/assets/images/homehero.png')" }}>

                <div className="absolute inset-0 bg-[#000000] sm:h-screen opacity-65"></div>
                <div className="relative max-w-[1100px] mx-auto flex flex-col  justify-center h-full space-y-5 py-5 px-4 pt-36 sm:pt-0">
                    <div className="flex  flex-col md:flex-row max-w-[700px] mx-auto gap-5 md:gap-10 ">
                        <h1 className="inter-semibold lg:text-xl flex items-center gap-5 text-white "><BsCalendar2RangeFill className='text-2xl text-[#C4292C] flex shrink-0' />30th December, 2025</h1>
                        <h2 className="inter-semibold lg:text-xl flex items-center gap-5 text-white "><FaLocationDot className='text-2xl text-[#C4292C] flex shrink-0' />Wuhan, China</h2>

                    </div>
                    <div className=" space-y-5">
                        <h2 className="namdhinggo-extrabold lg:text-4xl text-2xl text-center " > <span className="text-white ">International Conference  </span><span className="text-[#C4292C]">on Computer Science</span><span className="text-white"> and </span> <span className="text-[#C4292C]">Digital Ecosystems </span> <span className="text-[#C4292C]">Summit</span> </h2>
                        <p className="text-white  md:text-lg text-base text-justify leading-[30px] inter-medium">This global summit unites researchers, industry experts, and innovators from around the world.It focuses on the latest advancements in computer science and digital ecosystems.The event provides a platform to share pioneering research and real-world applications.Participants engage in discussions on emerging technologies and their transformative impact.</p>
                        <div className="flex justify-center">

                            <div className="space-y-2">
                                <p className='flex gap-2 items-center text-white text-base inter-medium leading-[30px] text-justify '><GoDotFill />Focus on AI, machine learning, cloud computing, and IoT innovations.</p>
                                <p className='flex gap-2 items-center text-white text-base inter-medium leading-[30px] text-justify '><GoDotFill />Promotes academic-industry collaboration for real-world solutions.</p>
                                <p className='flex gap-2 items-center text-white text-base inter-medium leading-[30px] text-justify '><GoDotFill />Features keynote talks, technical sessions, and paper presentations.</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex gap-10 justify-center">
                        <Link to='/paper-submission'>
                            <div className="flex bg-[#C4292C] w-fit rounded-lg justify-center    py-2 px-2  ">
                                <button type="submit" className=' text-white flex gap-2 items-center inter-medium cursor-pointer  text-lg' >Register now <FaArrowRightLong /></button>
                            </div>
                        </Link>
                        <Link to='/about'>
                            <div className="flex bg-white w-fit rounded-lg   justify-center     py-2 px-2  ">
                                <button type="submit" className=' text-[#C4292C]  flex gap-2 items-center inter-medium cursor-pointer  text-lg'   >Learn more  <FaArrowRightLong /></button>
                            </div>
                        </Link>
                    </div> */}
                    <div className="flex gap-6 md:gap-10 justify-center items-center flex-wrap pb-3 lg:pb-0">
                        <Link to='/paper-submission'>
                            <button className="group relative overflow-hidden hover:text-[#C4292C] bg-[#C4292C]  text-white poppins-medium  cursor-pointer py-3 px-6 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2">
                                <span className="relative z-10">Register Now</span>
                                <FaArrowRightLong className='relative z-10 group-hover:translate-x-1 group-hover:text-[#C4292C] transition-transform duration-500' />
                                <div className="absolute -left-1/4 inset-0 h-full w-0 group-hover:w-[150%] duration-500 bg-white rounded-tr-full"></div>
                            </button>
                        </Link>
                        {/* <Link to='/about'>
                            <button className="group relative overflow-hidden hover:text-white bg-white  text-[#C4292C] poppins-medium  cursor-pointer py-3 px-6 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2">
                                <span className="relative z-10"> Learn More</span>
                                <FaArrowRightLong className='relative z-10 group-hover:translate-x-1 group-hover:text-white transition-transform duration-200' />
                                <div className="absolute -left-1/4 inset-0 h-full w-0 group-hover:w-[150%] duration-500 bg-[#C4292C] rounded-tr-full"></div>
                            </button>
                        </Link> */}
                    </div>
                </div>
            </div>
            <div className="md:block hidden">
                <div className="absolute left-1/2 -translate-x-1/2 lg:-translate-y-31 -translate-y-23 flex justify-center items-stretch  max-w-[1400px] w-full mx-auto px-4 xl:px-0">
                    <div className=" text-white p-10 min-h-[100px] flex flex-col items-center justify-center relative -right-1 bg-gradient-to-b from-[#C4292C] to-[#5E1415]  clip-left" >
                        <div className="text-center flex gap-2 items-center justify-center">

                            <p className="flex-50 poppins-bold lg:text-[94px] md:text-[45px]">10</p>
                            <div className="">
                                <p className="text-white namdhinggo-bold lg:text-[20px]  text-[16px] text-start">July, 2025</p>
                                <p className="text-white namdhinggo-bold lg:text-[18px]  text-[12px] text-start leading-tight">Paper Submission Deadline</p>
                            </div>
                        </div>
                    </div>

                    <div className=" text-white p-10 min-h-[100px] flex flex-col items-center justify-center relative bg-gradient-to-t from-[#C4292C] to-[#5E1415] clip-right">
                        <div className="text-center flex gap-2 items-center justify-center">

                            <p className="flex-50 poppins-bold lg:text-[94px] md:text-[45px]">18</p>
                            <div className="">
                                <p className="text-white namdhinggo-bold lg:text-[20px]  text-[16px] text-start">December, 2025</p>
                                <p className="text-white namdhinggo-bold lg:text-[18px]  text-[12px] text-start leading-tight">Author Acceptance Notification</p>
                            </div>
                        </div>
                    </div>

                    <div className=" text-white p-10 min-h-[100px] flex flex-col items-center justify-center relative right-1 bg-gradient-to-b from-[#C4292C] to-[#5E1415] clip-left">
                        <div className="text-center flex gap-2 items-center justify-center">

                            <p className="flex-50 poppins-bold lg:text-[94px] md:text-[45px]">24</p>
                            <div className="">
                                <p className="text-white namdhinggo-bold lg:text-[20px]  text-[16px] text-start">December, 2025</p>
                                <p className="text-white namdhinggo-bold lg:text-[18px]  md:text-[12px] text-[14px] text-start leading-tight">Final Manuscript Submission</p>
                            </div>
                        </div>
                    </div>

                    <div className=" text-white p-10 min-h-[100px] flex flex-col items-center justify-center relative  right-2 bg-gradient-to-t from-[#C4292C] to-[#5E1415] clip-right">
                        <div className="text-center flex gap-2 items-center justify-center">

                            <p className="flex-50 poppins-bold lg:text-[94px] md:text-[45px]">24</p>
                            <div className="">
                                <p className="text-white namdhinggo-bold lg:text-[20px]  text-[16px] text-start">December, 2025</p>
                                <p className="text-white namdhinggo-bold lg:text-[18px]  md:text-[12px] text-[14px] text-start leading-tight">Registration Deadline</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <div className="block md:hidden bg-[#FFD7D8] overflow-hidden">
                <div className=" flex flex-col justify-center items-stretch  max-w-[1400px] w-full mx-auto px-4 xl:px-0" >
                    <div className=" text-white p-10 min-h-[100px] flex flex-col items-center justify-center relative  bg-gradient-to-b from-[#C4292C] to-[#5E1415]  clip-left" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                        <div className="text-center flex gap-2 items-center justify-center">

                            <p className="flex-50 poppins-bold lg:text-[94px] md:text-[45px] text-[48px]">12</p>
                            <div className="">
                                <p className="text-white namdhinggo-bold lg:text-[20px]  text-[16px] text-start">July, 2025</p>
                                <p className="text-white namdhinggo-bold lg:text-[18px]  md:text-[12px] text-[14px] text-start leading-tight">Paper Submission Deadline</p>
                            </div>
                        </div>
                    </div>

                    <div className=" text-white p-10 min-h-[100px] flex flex-col items-center justify-center relative -mt-4 bg-gradient-to-t from-[#C4292C] to-[#5E1415] clip-right" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                        <div className="text-center flex gap-2 items-center justify-center">

                            <p className="flex-50 poppins-bold lg:text-[94px] md:text-[45px] text-[48px]">10</p>
                            <div className="">
                                <p className="text-white namdhinggo-bold lg:text-[20px]  text-[16px] text-start">December, 2025</p>
                                <p className="text-white namdhinggo-bold lg:text-[18px]  md:text-[12px] text-[14px] text-start leading-tight">Author Acceptance Notification</p>
                            </div>
                        </div>
                    </div>

                    <div className=" text-white p-10 min-h-[100px] flex flex-col items-center justify-center relative -mt-4  bg-gradient-to-b from-[#C4292C] to-[#5E1415] clip-left" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                        <div className="text-center flex gap-2 items-center justify-center">

                            <p className="flex-50 poppins-bold lg:text-[94px] md:text-[45px] text-[48px]">24</p>
                            <div className="">
                                <p className="text-white namdhinggo-bold lg:text-[20px]  text-[16px] text-start">December, 2025</p>
                                <p className="text-white namdhinggo-bold lg:text-[18px]  md:text-[12px] text-[14px] text-start leading-tight">Final Manuscript Submission</p>
                            </div>
                        </div>
                    </div>

                    <div className=" text-white p-10 min-h-[100px] flex flex-col items-center justify-center relative -mt-4   bg-gradient-to-t from-[#C4292C] to-[#5E1415] clip-right" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                        <div className="text-center flex gap-2 items-center justify-center">

                            <p className="flex-50 poppins-bold lg:text-[94px] md:text-[45px] text-[48px]">30</p>
                            <div className="">
                                <p className="text-white namdhinggo-bold lg:text-[20px]  text-[16px] text-start">December, 2025</p>
                                <p className="text-white namdhinggo-bold lg:text-[18px]  md:text-[12px] text-[14px] text-start leading-tight">Registration Deadline</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="bg-[#FFD7D8]">
                <div className="  2xl:px-0 px-4 lg:py-20 py-10  ">
                    <div className="flex lg:flex-row flex-col items-center justify-center gap-0 lg:gap-10 max-w-[1400px] mx-auto md:mt-25">
                        <div className="  max-w-[565px] mx-auto lg:block hidden">
                            <img src="/assets/images/homeabout.png" alt="aboutus" className=" rounded-[35px] border-4 border-[#C4292C]  " loading='lazy' />
                        </div>
                        <div className="space-y-5 lg:space-y-5  ">
                            <h2 className="namdhinggo-bold lg:text-[34px] text-[34px] text-[#C4292C] lg:text-start text-center border-b-4 border-[#C4292C]  ">About Us</h2>

                            <div className="  max-w-[565px] mx-auto block lg:hidden">
                                <img src="/assets/images/homeabout.png" alt="aboutus" className=" rounded-[35px] border-4 border-[#C4292C]  " loading='lazy' />
                            </div>
                            <p className="namdhinggo-bold lg:text-[28px] text-[20px] leading-[30px]"> Empowering Digital Futures Through Innovation</p>
                            <div className="space-y-3 mt-4">
                                <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">We are a global initiative committed to fostering innovation in computer science and digital ecosystems. Our platform connects researchers, professionals, and academicians from around the world to share knowledge and collaborate on groundbreaking research.</p>
                            </div>

                            <div className="mt-5">
                                <div className="space-y-2">
                                    <div className="space-y-1">
                                        <h2 className="namdhinggo-bold text-[24px]  ">Global Collaboration</h2>
                                        <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#C4292C]' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify ">We connect experts, researchers, and academicians from across the world to foster meaningful collaboration and knowledge sharing.</p></div>
                                    </div>
                                    <div className="space-y-1">
                                        <h2 className="namdhinggo-bold text-[24px]  ">Innovation-Driven Platform</h2>
                                        <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#C4292C]' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify ">Our focus is on driving innovation in computer science and digital ecosystems through research, discussion, and real-world applications.</p></div>
                                    </div>


                                    <Link to="/about" className="flex justify-start items-start">
                                        <button className="group relative overflow-hidden hover:text-[#C4292C] bg-[#C4292C]  text-white poppins-medium  cursor-pointer py-3 px-6 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2">
                                            <span className="relative z-10"> Read more</span>
                                            <FaArrowRightLong className='relative z-10 group-hover:translate-x-1 group-hover:text-[#C4292C] transition-transform duration-200' />
                                            <div className="absolute -left-1/4 inset-0 h-full w-0 group-hover:w-[150%] duration-500 bg-white rounded-tr-full"></div>
                                        </button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="">
                <div className="  2xl:px-0 px-4 lg:py-20 py-10  ">
                    <div className="flex lg:flex-row flex-col items-center justify-center gap-0 lg:gap-10 max-w-[1400px] mx-auto ">

                        <div className="space-y-5 lg:space-y-5  ">
                            <h2 className="namdhinggo-bold lg:text-[34px] text-[34px] text-[#C4292C] lg:text-start text-center border-b-4 border-[#C4292C]  ">Our Mission</h2>

                            <div className="  max-w-[565px] mx-auto block lg:hidden">
                                <img src="/assets/images/homemission.png" alt="Our Mission" className=" rounded-[35px] border-4 border-[#C4292C]  " loading='lazy' />
                            </div>
                            <p className="namdhinggo-bold lg:text-[28px] text-[20px] leading-[30px]">Advancing Innovation and Collaboration</p>
                            <div className="space-y-3 mt-4">
                                <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">Our mission is to accelerate progress in computer science and digital ecosystems by fostering innovation and collaboration. We aim to create a dynamic environment for researchers and professionals to share insights and develop impactful technologies.</p>
                            </div>
                            <div className="mt-5">
                                <div className="space-y-2">
                                    <div className="space-y-1">
                                        <h2 className="namdhinggo-bold text-[24px]  ">Fostering Innovation</h2>
                                        <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#C4292C]' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify ">We prioritize the development of groundbreaking ideas and technologies that push the boundaries of computer science and digital ecosystems.</p></div>
                                    </div>
                                    <div className="space-y-1">
                                        <h2 className="namdhinggo-bold text-[24px]  ">Encouraging Collaboration</h2>
                                        <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#C4292C]' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify ">Our platform promotes collaboration among global researchers, professionals, and academic institutions to achieve shared goals.</p></div>
                                    </div>
                                    <div className="space-y-1">
                                        <h2 className="namdhinggo-bold text-[24px]  ">Supporting Knowledge Exchange</h2>
                                        <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#C4292C]' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify ">We create opportunities for the free flow of ideas, research findings, and best practices to inspire technological progress.</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="  max-w-[565px] mx-auto lg:block hidden">
                            <img src="/assets/images/homemission.png" alt="Our Mission" className=" rounded-[35px] border-4 border-[#C4292C]  " loading='lazy' />
                        </div>
                    </div>
                </div>
            </section>


           
        </div>
    )
}

export default Home