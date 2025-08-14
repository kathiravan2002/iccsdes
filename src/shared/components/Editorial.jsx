import { Award, GraduationCap, MapPin } from 'lucide-react';
import React from 'react'
import { HiChevronDoubleRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function Editorial() {


    const committeeData = [

        {
            members: 'Rama Prasath',
            university: 'Hindustan University',
            location: 'India'
        },
        {
            members: 'Ahmed Alkhayyat',
            university: 'The Islamic university',
            location: 'Iraq'
        },
        {
            members: 'Ashok Kumar',
            university: ' Skyline university',
            location: 'Nigeria'
        },
        {
            members: 'Tejas Dhote',
            university: 'Michigan Technological University',
            location: 'USA'
        },
        {
            members: 'Hua Qu',
            university: 'Tianjin Medical University',
            location: 'China'
        },
        {
            members: 'Suvarna Pawar',
            university: 'MIT Art, Design & Technology University',
            location: 'India'
        },
        {
            members: 'Awder Omar Abdulqadir',
            university: 'University of Halabja',
            location: 'Iraq'
        },
        {
            members: 'Omar Bin Samin',
            university: 'Institute of Management Sciences',
            location: 'Pakistan'
        },

        {
            members: 'Kushal Kanwar',
            university: 'Shoolini University',
            location: 'India'
        },
        {
            members: 'Nor Musliza Mustafa',
            university: 'Universiti Islam Selangor',
            location: 'Malaysia'
        },
        {
            members: 'Aliyu Rabiu Shuaibu',
            university: 'Nile University of Nigeria',
            location: 'Nigeria'
        },
        {
            members: 'Masoud Asghari',
            university: 'University of Maragheh',
            location: 'Iran'
        },
        {
            members: 'Sakshi Gupta',
            university: 'Amity University Noida',
            location: 'India'
        },
        {
            members: 'Muhammd Umer Farooq',
            university: 'NED University of Engineering and Technology',
            location: 'Pakistan'
        },
        {
            members: 'Theopilus Bayu Sasongko',
            university: 'Universitas Amikom Yogyakarta',
            location: 'Indonesia'
        },
        {
            members: 'Theresa Omodunbi',
            university: 'Obafemi Awolowo University',
            location: 'Nigeria'
        },
        {
            members: 'Mohammed Rashad Baker',
            university: 'University of Kirkuk',
            location: 'Iraq'
        },
        {
            members: 'Shabir Hussain',
            university: 'Tsinghua University',
            location: 'China'
        },
        {
            members: 'Mahdiyeh Khazaneha',
            university: 'Kerman University of Medical Sciences',
            location: 'Iran'
        },
        {
            members: 'Haruna Abdu',
            university: 'Federal University Lokoja',
            location: 'Nigeria'
        },
        {
            members: 'Siddharth Dabhade',
            university: 'National Forensic Sciences University',
            location: 'India'
        },


    ]


    return (
        <div>
            <div className="lg:h-90 h-70  relative bg-cover bg-center " style={{ backgroundImage: "url('/assets/images/allhero.jpg')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[28px] md:text-[36px] lg:text-[40px] namdhinggo-bold text-white mt-10">Editorial Board</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className=" text-[18px] sm:text-[22px] namdhinggo-bold text-white hover:text-[#C4292C] duration-300 ">Home</h2>
                        </Link>
                        <div className="flex justify-center items-center gap-1">  <span className="text-white  text-xl"><HiChevronDoubleRight /> </span><h2 className=" text-[18px] sm:text-[22px] namdhinggo-bold  text-[#C4292C] ">Editorial Board</h2></div>

                    </div>
                </div>
            </div>

            <section className="max-w-[1300px] mx-auto px-4 lg:py-15 py-10">
                <div className="text-center mb-10">

                    <h2 className="namdhinggo-bold lg:text-[34px] text-[28px] text-[#C4292C]  text-center mb-4 ">
                        Meet Our Editorial Board
                    </h2>
                    <p className="text-lg inter-regular leading-[30px] opacity-85 lg:text-center text-justify max-w-[800px] mx-auto">
                        Renowned experts in computer science and digital ecosystems leading our academic excellence
                    </p>
                </div>

                <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {committeeData.map((member, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden flex flex-col "
                            style={{
                                animationDelay: `${index * 100}ms`
                            }}
                        >
                            <div className="absolute inset-0 bg-[#fce7e7]/30  opacity-0 group-hover:opacity-100 transition-opacity duration-500 "></div>

                            <div className="h-2 bg-[#C4292C]  "></div>

                            <div className="relative p-6 ">
                                <div className="text-center mb-6">
                                    <div className="w-18 h-18 mx-auto mb-4 bg-[#C4292C] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        {member.members.slice(0, 1)}
                                    </div>

                                    <h3 className="text-[24px] poppins-semibold text-gray-800 group-hover:text-[#C4292C] transition-colors duration-300 mb-2">
                                        Dr. {member.members}
                                    </h3>
                                </div>

                                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#f06365] to-transparent mb-6"></div>

                                <div className="space-y-4">
                                    <div className="flex items-start group/item">
                                        <div className="flex-shrink-0 w-10 h-10 bg-[#C4292C] rounded-lg flex items-center justify-center mr-4 ">
                                            <GraduationCap className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-700 poppins-medium text-base leading-relaxed group-hover:text-gray-800 transition-colors duration-200">
                                                {member.university}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start group/item">
                                        <div className="flex-shrink-0 w-10 h-10 bg-[#C4292C] rounded-lg flex items-center justify-center mr-4 ">
                                            <MapPin className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-700 poppins-medium text-base leading-relaxed group-hover:text-gray-800 transition-colors duration-200">
                                                {member.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-[#C4292C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </div>
                    ))}
                </div>

            </section>

        </div>
    )
}

export default Editorial