import { Award, GraduationCap, MapPin } from 'lucide-react';
import React from 'react'
import { FaCircleUser } from 'react-icons/fa6';
import { HiChevronDoubleRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function Editorial() {


    const organizing = [

        {
            name: "Dr. Wu Xiaojun",
            university: "  Third Military Medical University",
            expertise: " Department of Information Technology",
            country: "China"
        },
        {
            name: "Dr. Qiushi Yang",
            university: "City University of Hong Kong",
            expertise: " Department of Electronic Engineering",
            country: "China"
        },
        {
            name: "Dr. Sirajuddin Qureshi",
            university: "  Beijing University of Technology",
            expertise: " Department of Information Technology",
            country: "China"
        },
        {
            name: "Dr. Ammar Amjad",
            university: "National Yang ming chiao tung university",
            expertise: " Department of Computer Science and Engineering",
            country: "China"
        },
        {
            name: "Dr.  Sunjieyu Wang",
            university: "The Third Research Institute of Ministry of Public Security",
            expertise: " Department of Computer Science",
            country: "China"
        },
    ]

const technical = [
    {
        name: "Dr. Qian Liu",
        university: " Krirk University",
        expertise: "Department of Information Technology",
        country: "Thailand"
    },
    {
        name: "Dr. Ali Rizwan",
        university: "King Abdulaziz University",
        expertise: " Department of Industrial Engineering",
        country: " Saudi Arabia"
    },
    {
        name: "Dr. Wasan Alamro",
        university: "Auckland University of Technology",
        expertise: "Department of Electrical and Electronics Engineering department ",
        country: " New Zealand"
    },
    {
        name: "Dr. Theopilus Bayu Sasongko",
        university: " Universitas Amikom Yogyakarta",
        expertise: " Department of Informatics",
        country: "Indonesia"
    },
    {
        name: "Dr. Ammar Amjad",
        university: " National Yang ming chiao tung university",
        expertise: "Department of Computer Science and Engineering ",
        country: "Taiwan"
    },
    {
        name: "Dr. Comfort O. Folorunso",
        university: " University of Lagos",
        expertise: "Department of Systems Engineering",
        country: " Nigeria"
    },
    {
        name: "Dr. Yogi Pratama",
        university: " Al Insyirah Institute of Health and Technology",
        expertise: " Department of Medical Informatics",
        country: "Indonesia"
    },
    {
        name: "Dr. Omar Bin Samin",
        university: " Institute of Management Sciences",
        expertise: " Department of Information and Technology",
        country: "Pakistan"
    },
    {
        name: "Dr. Syed Asim Ali Shah",
        university: "Bahria University",
        expertise: " Department of Software Engineering",
        country: "Pakistan"
    },
    {
        name: "Dr. Argha Chandra Dhar",
        university: "Khulna University of Engineering & Technology",
        expertise: "Department of Computer Science and Engineering",
        country: "Bangladesh"
    },
    {
        name: "Dr. Rahman Shafique",
        university: " Yeungnam University",
        expertise: " Department of Information and Communication Engineering",
        country: " South Korea"
    },
    {
        name: "Dr. Mohammad Siraj",
        university: "  King Saud University",
        expertise: " Department of Electronics and Communication Engineering",
        country: "Saudi Arabia"
    },
    {
        name: "Dr. Marcelo M S Souza",
        university: " Universidade Federal do Ceará",
        expertise: "Department of Computer Science and Engineering ",
        country: "Brazil"
    },
    {
        name: "Dr. Kabelo Given Chuma",
        university: " University of South Africa",
        expertise: " Department of Information Science",
        country: "South Africa"
    },
    {
        name: "Dr. Hung Nguyen",
        university: "Nha Trang university",
        expertise: " Department of Information Technology",
        country: "Vietnam"
    },
    {
        name: "Dr.  Sakthivel Velusamy",
        university: " Konkuk University",
        expertise: " Department of Aerospace Information Engineering",
        country: " South Korea"
    },
    {
        name: "Dr. Puneet Sharma",
        university: "  UiT The Arctic University of Norway",
        expertise: " Department of Automation and Process Engineering",
        country: " Norway"
    },
    {
        name: "Dr. Egoigwe Sochima Vincent",
        university: "University of Nigeria",
        expertise: " Department of Computer Science",
        country: " Nigeria "
    },
    {
        name: "Dr. Alven Ritonga",
        university: " Universitas Wijaya Putra",
        expertise: "Department of Electronics and Communication Engineering",
        country: "Indonesia"
    },
    {
        name: "Dr. Twana A. Hamad",
        university: " Harran University",
        expertise: "Department of Electronics and Communication Engineering",
        country: "Turkiye"
    }
];




    const editorial = [
    {
        name: "Dr. Oladapo Ibitoye",
        university: "Afe Babalola University",
        expertise: "Department of Electrical, Electronics and Computer Engineering",
        country: " Nigeria"
    },
    {
        name: "Dr. Shriram Pandey",
        university: "Metharath University",
        expertise: " Department of Library and Information Science",
        country: " United Kingdom"
    },
    {
        name: "Dr. Sowmipriya Rajendiran",
        university: "International School of Information Processing Sciences",
        expertise: "Department of Computer Science and Engineering ",
        country: "France"
    },
    {
        name: "Dr. Abolfazl Gandomi",
        university: "Islamic Azad University",
        expertise: " Department of Computer Engineering",
        country: " Iran"
    },
    {
        name: "Dr. Nguyen Van Thieu",
        university: "Phenikaa University",
        expertise: " Department of Computer Science",
        country: "Vietnam"
    },
    {
        name: "Dr. Alma Bangayan Manera",
        university: "Cagayan State University",
        expertise: "Department of Electronics and Communication Engineering",
        country: " Philippines"
    },
    {
        name: "Dr. Asma Sbeih",
        university: "Palestine Ahliya University",
        expertise: "Department of Information Technology ",
        country: "Palestine"
    },
    {
        name: "Dr. Ernesto Carrillo Arellano",
        university: "Metropolitan Autonomous University",
        expertise: "Department of Electronics Engineering",
        country: "Mexico"
    },
    {
        name: "Dr. Meenakshi Gupta",
        university: " National University of Singapore",
        expertise: " Department of Electronics and Communication Engineering",
        country: "Singapore"
    },
    {
        name: "Dr. Ameer Hamza",
        university: "HITEC University",
        expertise: "Department of Computer Engineering",
        country: "Pakistan"
    },
    {
        name: "Dr. Rama Prasath",
        university: "Hindustan University",
        expertise: "Department of Computing Sciences",
        country: " India"
    },
    {
        name: "Dr. Muhammad Asif Khan",
        university: " Qatar University",
        expertise: " Research Scientist at Qatar Mobility Innovations Center",
        country: " Qatar"
    },
    {
        name: "Dr. Leo John Baptist",
        university: "Botho University",
        expertise: "Department of Information Technology",
        country: " Botswana"
    },
    {
        name: "Dr. Thendral Puyalnithi",
        university: "Kalasalingam Academy of Research and Education",
        expertise: "Department of Computer Science and Engineering",
        country: " India"
    },
    {
        name: "Dr. Citra Fathia Palembang",
        university: "  Pattimura University",
        expertise: " Department of Computer Science",
        country: "Indonesia"
    },
    {
        name: "Dr. Nor Musliza Mustafa",
        university: " Selangor Islamic University",
        expertise: "Department of Creative Multimedia and Computing",
        country: "Malaysia"
    },
    {
        name: "Dr. Bawar Mohammed Faraj",
        university: "  University of Halabja",
        expertise: " Department of Computer Science",
        country: " Iraq"
    },
    {
        name: "Dr. Nour Moustafa",
        university: "American University of the Middle East",
        expertise: "Department of Electronics and Communication Engineering",
        country: " Kuwait"
    },
    {
        name: "Dr.A. Gabriel ",
        university: "Sharda University",
        expertise: "Department of Information Technology ",
        country: " Uzbekistan "
    },
    {
        name: "Dr. Stephen Obono Ekwe",
        university: "  University of Cape Town",
        expertise: " Department of Electrical Engineering",
        country: " South Africa"
    },
    {
        name: "Dr. Chinwe Peace Igiri",
        university: "Cavendish University",
        expertise: " Department of Computer Science and Engineering",
        country: " Uganda"
    },
     {
        name: "Dr. Balakrishnan Baranitharan",
        university: "Kalasalingam Academy of Research and Education",
        expertise: "Department of Civil Engineering",
        country: " India"
    },
    {
        name: "Dr. Leandro N. Balico",
        university: "  Federal University of Roraima",
        expertise: " Department of Computer Science and Engineering ",
        country: "Brazil"
    },
    {
        name: "Dr. Aram Sabr Tahr",
        university: "Cyprus International University",
        expertise: "Department of Computer Science and Engineering ",
        country: "Cyprus"
    },
    {
        name: "Dr. Saminda Premaratne",
        university: " University of Moratuwa",
        expertise: "   Department of Information Technology",
        country: "Sri Lanka"
    },
    {
        name: "Dr. S Ravikumar",
        university: "Vel Tech Rangarajan Dr.Sagunthala R&D Institute of Science and Technology",
        expertise: "Department of Computer Science and Engineering",
        country: " India"
    },
   
    {
        name: "Dr. Zouhour El-Abiad",
        university: "ESA Business School",
        expertise: " Department of Computer Science and Engineering",
        country: " Lebanon"
    }
];



    // const committeeData = [

    //     {
    //         members: 'Rama Prasath',
    //         university: 'Hindustan University',
    //         location: 'India'
    //     },
    //     {
    //         members: 'Ahmed Alkhayyat',
    //         university: 'The Islamic university',
    //         location: 'Iraq'
    //     },
    //     {
    //         members: 'Ashok Kumar',
    //         university: ' Skyline university',
    //         location: 'Nigeria'
    //     },
    //     {
    //         members: 'Tejas Dhote',
    //         university: 'Michigan Technological University',
    //         location: 'USA'
    //     },
    //     {
    //         members: 'Hua Qu',
    //         university: 'Tianjin Medical University',
    //         location: 'China'
    //     },
    //     {
    //         members: 'Suvarna Pawar',
    //         university: 'MIT Art, Design & Technology University',
    //         location: 'India'
    //     },
    //     {
    //         members: 'Awder Omar Abdulqadir',
    //         university: 'University of Halabja',
    //         location: 'Iraq'
    //     },
    //     {
    //         members: 'Omar Bin Samin',
    //         university: 'Institute of Management Sciences',
    //         location: 'Pakistan'
    //     },

    //     {
    //         members: 'Kushal Kanwar',
    //         university: 'Shoolini University',
    //         location: 'India'
    //     },
    //     {
    //         members: 'Nor Musliza Mustafa',
    //         university: 'Universiti Islam Selangor',
    //         location: 'Malaysia'
    //     },
    //     {
    //         members: 'Aliyu Rabiu Shuaibu',
    //         university: 'Nile University of Nigeria',
    //         location: 'Nigeria'
    //     },
    //     {
    //         members: 'Masoud Asghari',
    //         university: 'University of Maragheh',
    //         location: 'Iran'
    //     },
    //     {
    //         members: 'Sakshi Gupta',
    //         university: 'Amity University Noida',
    //         location: 'India'
    //     },
    //     {
    //         members: 'Muhammd Umer Farooq',
    //         university: 'NED University of Engineering and Technology',
    //         location: 'Pakistan'
    //     },
    //     {
    //         members: 'Theopilus Bayu Sasongko',
    //         university: 'Universitas Amikom Yogyakarta',
    //         location: 'Indonesia'
    //     },
    //     {
    //         members: 'Theresa Omodunbi',
    //         university: 'Obafemi Awolowo University',
    //         location: 'Nigeria'
    //     },
    //     {
    //         members: 'Mohammed Rashad Baker',
    //         university: 'University of Kirkuk',
    //         location: 'Iraq'
    //     },
    //     {
    //         members: 'Shabir Hussain',
    //         university: 'Tsinghua University',
    //         location: 'China'
    //     },
    //     {
    //         members: 'Mahdiyeh Khazaneha',
    //         university: 'Kerman University of Medical Sciences',
    //         location: 'Iran'
    //     },
    //     {
    //         members: 'Haruna Abdu',
    //         university: 'Federal University Lokoja',
    //         location: 'Nigeria'
    //     },
    //     {
    //         members: 'Siddharth Dabhade',
    //         university: 'National Forensic Sciences University',
    //         location: 'India'
    //     },


    // ]


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
                {/* <div className="text-center mb-10">

                    <h2 className="namdhinggo-bold lg:text-[34px] text-[28px] text-[#C4292C]  text-center mb-4 ">
                        Meet Our Editorial Board
                    </h2>
                    <p className="text-lg inter-regular leading-[30px] opacity-85 lg:text-center text-justify max-w-[800px] mx-auto">
                        Renowned experts in computer science and digital ecosystems leading our academic excellence
                    </p>
                </div> */}

                {/* <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
                </div> */}
                <div className="">
                    <h2 className="namdhinggo-bold lg:text-[34px] text-[28px] text-[#C4292C]  text-center mb-4 scroll-mt-32"  id="organizing-committee">
                        Organizing Committee
                    </h2>
                    <div className='pb-10'>
                        <div className="max-w-[1250px] mx-auto mt-5 px-2">
                            <div className="space-y-2">
                                {organizing.map((item, index) => (
                                    <div key={index} className="flex gap-2 items-center">
                                        <FaCircleUser className='text-[18px] flex shrink-0 text-[#C4292C]' />
                                        <p className="leading-relaxed "><span className=" text-[#C4292C] text-[16px] inter-semibold  text-center ">{item.name} - </span><span className="text-[16px] inter-medium   text-center opacity-80">{item.expertise}, </span><span className="text-[16px] inter-medium text-center opacity-80">{item.university}, </span><span className="text-[16px] inter-medium text-center opacity-80">{item.country}.</span></p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h2 className="namdhinggo-bold lg:text-[34px] text-[28px] text-[#C4292C]  text-center mb-4 scroll-mt-30" id="technical-committee">
                        Technical Program Committee
                    </h2>
                    <div className='pb-10'>
                        <div className="max-w-[1250px] mx-auto mt-5 px-2">
                            <div className="space-y-2">
                                {technical.map((item, index) => (
                                    <div key={index} className="flex gap-2 items-center">
                                        <FaCircleUser className='text-[18px] flex shrink-0 text-[#C4292C]' />
                                        <p className="leading-relaxed "><span className=" text-[#C4292C] text-[16px] inter-semibold  text-center ">{item.name} - </span><span className="text-[16px] inter-medium   text-center opacity-80">{item.expertise}, </span><span className="text-[16px] inter-medium text-center opacity-80">{item.university}, </span><span className="text-[16px] inter-medium text-center opacity-80">{item.country}.</span></p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h2 className="namdhinggo-bold lg:text-[34px] text-[28px] text-[#C4292C]  text-center mb-4 scroll-mt-30" id="advisory-committee">
                        International Advisory Board Committee Members
                    </h2>
                    <div className='pb-10'>
                        <div className="max-w-[1250px] mx-auto mt-5 px-2">
                            <div className="space-y-2">
                                {editorial.map((item, index) => (
                                    <div key={index} className="flex gap-2 items-center">
                                        <FaCircleUser className='text-[18px] flex shrink-0 text-[#C4292C]' />
                                        <p className="leading-relaxed "><span className=" text-[#C4292C] text-[16px] inter-semibold  text-center ">{item.name} - </span><span className="text-[16px] inter-medium   text-center opacity-80">{item.expertise}, </span><span className="text-[16px] inter-medium text-center opacity-80">{item.university}, </span><span className="text-[16px] inter-medium text-center opacity-80">{item.country}.</span></p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Editorial