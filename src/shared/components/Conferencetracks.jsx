import { ArrowRight, BarChart3, Brain, Cloud, Lock, Shield, Sparkles, Users, Wifi, Zap } from 'lucide-react';
import React from 'react'
import { HiChevronDoubleRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';



function Conferencetracks() {

    const roles = [
        {
            title: 'Artificial Intelligence',
            duties: [
                'Developing smart systems capable of learning and decision-making independently.'
            ],
            icon: <Brain className="w-8 h-8" />,

        },
        {
            title: 'Machine Learning',
            duties: [
                'Creating models that improve automatically through data-driven experiences.'
            ],
            icon: <Zap className="w-8 h-8" />,

        },
        {
            title: 'Blockchain Technology',
            duties: [
                'Ensuring secure, transparent transactions using decentralized digital ledger systems.'
            ],
            icon: <Shield className="w-8 h-8" />,

        },
        {
            title: 'Cybersecurity Solutions',
            duties: [
                'Protecting networks, systems, and data from malicious digital threats.'
            ],
            icon: <Lock className="w-8 h-8" />,

        },
        {
            title: 'Cloud Computing',
            duties: [
                'Delivering scalable computing services via internet-based virtualized infrastructure.'
            ],
            icon: <Cloud className="w-8 h-8" />,

        },
        {
            title: 'Data Analytics',
            duties: [
                'Extracting meaningful insights from structured and unstructured data efficiently.'
            ],
            icon: <BarChart3 className="w-8 h-8" />,

        },
        {
            title: 'Internet of Things',
            duties: [
                'Connecting physical devices for communication and automated real-time operations.'
            ],
            icon: <Wifi className="w-8 h-8" />,

        },
        {
            title: 'Human Computer Interaction',
            duties: [
                'Designing interfaces that enhance user experiences across digital platforms.'
            ],
            icon: <Users className="w-8 h-8" />,

        },
        {
            title: 'Digital Transformation',
            duties: [
                'Integrating technologies to reshape business models and operational efficiency.'
            ],
            icon: <Sparkles className="w-8 h-8" />,

        }
    ];
    return (
        <div>

            <div className="lg:h-90 h-70  relative bg-cover bg-center " style={{ backgroundImage: "url('/assets/images/allhero.jpg')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[28px] md:text-[36px] lg:text-[40px] namdhinggo-bold text-white mt-10">Conference Tracks</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className=" text-[18px] sm:text-[22px] namdhinggo-bold text-white hover:text-[#C4292C] duration-300 ">Home</h2>
                        </Link>
                        <div className="flex justify-center items-center gap-1">  <span className="text-white  text-xl"><HiChevronDoubleRight /> </span><h2 className=" text-[18px] sm:text-[22px] namdhinggo-bold  text-[#C4292C] ">Conference Tracks</h2></div>

                    </div>
                </div>
            </div>


            <section className="max-w-[1400px] mx-auto 2xl:px-0 px-4 lg:py-15 py-10">
                <h2 className="namdhinggo-bold lg:text-[34px] text-[28px] text-[#C4292C]  text-center mb-4 ">
                    Key Tracks at the Conference
                </h2>
                <div className="space-y-3">
                    <p className="text-base inter-regular leading-[30px] opacity-85 text-justify">The International Conference on Computer Science and Digital Ecosystems Summit features diverse conference tracks designed to cover cutting-edge developments, emerging trends, and practical applications in computer science and digital ecosystems. These tracks encompass artificial intelligence, machine learning, blockchain, cybersecurity, cloud computing, data science, IoT, human-computer interaction, and smart technologies. Each track provides a focused platform for researchers, industry professionals, and academicians to share innovative ideas, present original research, and discuss solutions to real-world challenges, fostering collaboration and driving advancements in the digital future.</p>
                </div>
            </section>
            <section className="max-w-[1300px] mx-auto px-4 lg:pb-15 pb-10">
                <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {roles.map((track, index) => (
                        <div
                            key={track.title}
                            className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
                            style={{
                                animationDelay: `${index * 100}ms`
                            }}
                        >
                            <div className={`absolute inset-0 bg-[#fce7e7]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            <div className={`h-2 bg-[#C4292C]`}></div>

                            <div className="relative p-8">
                                <div className="flex items-center mb-6">
                                    <div className={`flex-shrink-0 w-16 h-16 bg-[#C4292C] rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        {track.icon}
                                    </div>
                                    <div className="ml-4 flex-1">
                                        <h3 className="text-xl poppins-bold text-gray-800   group-hover:text-[#C4292C] transition-all duration-300">
                                            {track.title}
                                        </h3>
                                    </div>
                                </div>

                                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#f06365] to-transparent mb-6"></div>


                                <div className="mb-6">
                                    {track.duties.map((duty, dutyIndex) => (
                                        <div key={dutyIndex} className="flex items-start group/item">
                                            <div className={`flex-shrink-0 w-2 h-2 bg-[#C4292C] rounded-full mt-3 mr-4 group-hover/item:scale-125 transition-transform duration-200`}></div>
                                            <p className=" leading-relaxed group-hover:text-gray-800 transition-colors duration-200 text-justify inter-medium text-base opacity-75">
                                                {duty}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={`absolute inset-x-0 bottom-0 h-1 bg-[#C4292C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Conferencetracks