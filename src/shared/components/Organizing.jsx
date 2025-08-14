import { Award, Calendar, Globe, Lightbulb, Target, Users } from 'lucide-react';
import React from 'react'
import { HiChevronDoubleRight } from 'react-icons/hi';
import { TbPointFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';


function Organizing() {
    const roles = [
        {
            title: "Conference Chair",
            icon: <Award className="w-8 h-8" />,
            duties: [
                "Provide overall leadership and strategic direction for the conference",
                "Coordinate with all committee members and stakeholders",
                "Make final decisions on conference policies and procedures",
                "Represent the conference in official communications"
            ]
        },
        {
            title: "Program Committee",
            icon: <Calendar className="w-8 h-8" />,
            duties: [
                "Design and structure the conference program schedule",
                "Select and coordinate keynote speakers and sessions",
                "Ensure quality and relevance of all program content",
                "Manage session timing and logistics"
            ]
        },
        {
            title: "Review Committee",
            icon: <Target className="w-8 h-8" />,
            duties: [
                "Establish and maintain review criteria and standards",
                "Coordinate peer review process for submissions",
                "Ensure fair and thorough evaluation of all papers",
                "Provide constructive feedback to authors"
            ]
        },
        {
            title: "Technical Committee",
            icon: <Lightbulb className="w-8 h-8" />,
            duties: [
                "Oversee technical infrastructure and platform requirements",
                "Manage audio-visual and presentation systems",
                "Coordinate virtual and hybrid session technologies",
                "Provide technical support during the conference"
            ]
        },
        {
            title: "Outreach Committee",
            icon: <Globe className="w-8 h-8" />,
            duties: [
                "Develop and execute marketing and promotion strategies",
                "Manage social media presence and communications",
                "Coordinate with media partners and sponsors",
                "Facilitate international participation and collaboration"
            ]
        },
        {
            title: "Logistics Committee",
            icon: <Users className="w-8 h-8" />,
            duties: [
                "Manage venue selection and event logistics",
                "Coordinate registration and attendee services",
                "Oversee catering, accommodation, and transportation",
                "Handle on-site operations and emergency procedures"
            ]
        }
    ];
    return (
        <div>
            <div className="lg:h-90 h-70  relative bg-cover bg-center " style={{ backgroundImage: "url('/assets/images/allhero.jpg')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[28px] md:text-[36px] lg:text-[40px] namdhinggo-bold text-white mt-10">Organizing Committee</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className=" text-[18px] sm:text-[22px] namdhinggo-bold text-white hover:text-[#C4292C] duration-300 ">Home</h2>
                        </Link>
                        <div className="flex justify-center items-center gap-1">  <span className="text-white  text-xl"><HiChevronDoubleRight /> </span><h2 className=" text-[18px] sm:text-[22px] namdhinggo-bold  text-[#C4292C] ">Organizing Committee</h2></div>

                    </div>
                </div>
            </div>

            <section className="max-w-[1400px] mx-auto px-4 lg:py-15 py-10 ">
                    <div className="">
                        <h2 className="namdhinggo-bold lg:text-[34px] text-[28px] text-[#C4292C]  text-center mb-4 ">
                            Dedicated to Excellence
                        </h2>
                        <div className="space-y-3 text-base inter-regular leading-[30px] opacity-85 text-justify">
                            <p>
                                The Organizing Committee of the International Conference on Computer Science and Digital Ecosystems Summit brings together distinguished academicians, industry experts, and research professionals from computer science and digital technology fields worldwide.
                            </p>
                            <p>
                                Our collaborative approach ensures a high-quality program that reflects the conference's focus on cutting-edge computer science research and digital innovation, fostering meaningful knowledge exchange and creating opportunities for global networking in the tech industry.
                            </p>
                            <p>
                                With combined expertise and unwavering commitment, we strive to deliver a world-class conference experience that inspires digital innovation, promotes technological collaboration, and contributes significantly to advancements in computer science and digital ecosystems.
                            </p>
                        </div>

                    
                </div>
            </section>

            <section className="max-w-[1400px] mx-auto px-4 lg:pb-15 pb-10">
                <div className="text-center mb-10">
                    <h2 className="namdhinggo-bold lg:text-[34px] text-[34px] text-[#C4292C]  text-center mb-4">
                        Roles & Responsibilities
                    </h2>
                    <p className="text-lg inter-regular leading-[30px] opacity-85 lg:text-center text-justify max-w-[800px] mx-auto">
                        Each committee member plays a crucial role in ensuring the success of our international computer science conference
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {roles.map((role, index) => (
                        <div
                            key={role.title}
                            className="group relative bg-white rounded-3xl shadow-[0_0_10px_rgba(0,0,0,0.15)] hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                            style={{
                                animationDelay: `${index * 100}ms`
                            }}
                        >
                            <div className="absolute inset-0 bg-[#fce7e7] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative p-8">
                                <div className="flex items-center mb-6">
                                    <div className="flex-shrink-0 w-16 h-16 bg-[#C4292C] rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                                        {role.icon}
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-xl inter-bold text-gray-800 group-hover:text-[#C4292C] transition-colors duration-300">
                                            {role.title}
                                        </h3>
                                    </div>
                                </div>

                                
                                <ul className="space-y-2">
                                    {role.duties.map((duty, dutyIndex) => (
                                        <li key={dutyIndex} className="flex items-start group/item">
                                            <div className="flex-shrink-0 w-2 h-2 bg-[#C4292C] rounded-full mt-3 mr-4 group-hover/item:scale-125 transition-transform duration-200"></div>
                                            <span className="text-base inter-regular leading-[30px] opacity-85 text-justify">
                                                {duty}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>
                    ))}
                </div>
            </section>


        </div>
    )
}

export default Organizing