import React, { useState } from 'react'

import { toast } from 'react-toastify';
import { ArrowRight, Upload } from 'lucide-react';
import { TbPointFilled } from 'react-icons/tb';
import { HiChevronDoubleRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function Papersubmission() {

    const [fileName, setFileName] = useState('Choose Your File');



    const [formData, setFormData] = useState({
        Paper_Title: '',
        Author_FUll_Name: '',
        Email_Address: '',
        Institution_Name: '',
        Paper_Track: '',
        Paper_File: null,
    });
    const [status, setStatus] = useState('');


    const handleFileInputChange = (e) => {
        const { name, type, files, value } = e.target;

        if (files && files.length > 0) {
            setFileName(files[0].name); // update UI
            setFormData((prev) => ({
                ...prev,
                [name]: files[0], // update actual form data
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        const journalName = 'iccsdes';
        // Generate unique ID: journalName + YYYYMMDD + HHMMSS
        const now = new Date();
        const dateStr = now.toISOString().slice(0, 10).replace(/-/g, ''); // YYYYMMDD
        const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, ''); // HHMMSS
        const uniqueId = `${journalName}_${dateStr}_${timeStr}`;

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('Submission_ID', uniqueId);
            formDataToSend.append('Paper_Title', formData.Paper_Title);
            formDataToSend.append('Author_FUll_Name', formData.Author_FUll_Name);
            formDataToSend.append('Email_Address', formData.Email_Address);
            formDataToSend.append('Institution_Name', formData.Institution_Name);
            formDataToSend.append('Paper_Track', formData.Paper_Track);

            if (formData.Paper_File) {
                formDataToSend.append('Paper_File', formData.Paper_File);
            }

            const googleSheetsParams = new URLSearchParams();
            googleSheetsParams.append('Submission_ID', uniqueId);
            googleSheetsParams.append('journal_name', journalName);
            googleSheetsParams.append('Paper_Title', formData.Paper_Title);
            googleSheetsParams.append('Author_FUll_Name', formData.Author_FUll_Name);
            googleSheetsParams.append('Email_Address', formData.Email_Address);
            googleSheetsParams.append('Institution_Name', formData.Institution_Name);
            googleSheetsParams.append('Paper_Track', formData.Paper_Track);

            const mailPromise = fetch('https://iccsdes.com/api/mail.php', {
                method: 'POST',
                body: formDataToSend,
            });

            const sheetsPromise = fetch('https://script.google.com/macros/s/AKfycbwZ_TtKUqAfcue9TNCKy57hTrCKDUP5dTQnWbpSxBDzlRMllEuOoaxzRDl0kQPah5pZ/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: googleSheetsParams.toString(),
            });

            const [mailResponse, sheetsResponse] = await Promise.allSettled([mailPromise, sheetsPromise]);

            const mailSuccess = mailResponse.status === 'fulfilled' && mailResponse.value.ok;
            const sheetsSuccess = sheetsResponse.status === 'fulfilled';

            if (sheetsResponse.status === 'rejected') {
                console.error('Sheets request failed:', sheetsResponse.reason);
            }

            if (mailSuccess && sheetsSuccess) {
                setStatus(`Submission successful! Data sent to both email and Google Sheets (${journalName}). Submission ID: ${uniqueId}`);
                setFormData({
                    Paper_Title: '',
                    Author_FUll_Name: '',
                    Email_Address: '',
                    Institution_Name: '',
                    Paper_Track: '',
                    Paper_File: null,
                });
                setFileName('');
                const fileInput = document.getElementById('Paper_File');
                if (fileInput) {
                    fileInput.value = '';
                } else {
                    console.error('Element with ID "Paper_File" not found.');
                }
                toast.success(`Paper submitted successfully!`);

            } else if (mailSuccess && !sheetsSuccess) {
                setStatus('Email sent successfully, but there might be an issue with Google Sheets.');
                toast.warning('Email sent successfully. Please check if data was saved to Google Sheets.');

            } else if (!mailSuccess && sheetsSuccess) {
                setStatus('Data likely saved to Google Sheets, but failed to send email.');
                toast.warning('Data might be saved to Google Sheets, but failed to send email.');

            } else {
                setStatus('There might be issues with the submission. Please check manually.');
                toast.error('Submission completed, but please verify the results manually.');
            }

        } catch (error) {
            console.error('Error:', error);
            setStatus('An error occurred during submission. Please try again.');
            toast.error('An error occurred. Please try again.');
        }
    }


    return (
        <div>
            <div className="lg:h-90 h-70  relative bg-cover bg-center " style={{ backgroundImage: "url('/assets/images/allhero.jpg')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[28px] md:text-[36px] lg:text-[40px] namdhinggo-bold text-white mt-10">Paper Submission</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className=" text-[18px] sm:text-[22px] namdhinggo-bold text-white hover:text-[#C4292C] duration-300 ">Home</h2>
                        </Link>
                        <div className="flex justify-center items-center gap-1">  <span className="text-white  text-xl"><HiChevronDoubleRight /> </span><h2 className=" text-[18px] sm:text-[22px] namdhinggo-bold  text-[#C4292C] ">Paper Submission</h2></div>

                    </div>
                </div>
            </div>
            <section className='bg-[#C4292C] max-w-[1400px] mx-auto lg:my-15 my-10 rounded-[20px]'>
                <div className="flex flex-col lg:flex-row gap-10 max-w-[1300px] mx-auto 2xl:px-0 px-4 lg:py-15 py-10 ">
                    <div className="  flex flex-col  gap-10  ">

                        <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-lg p-6 flex flex-col w-full h-full">

                            <h2 className="poppins-bold text-xl text-[#C4292C] ">Submission Guidelines</h2>
                            <div className="h-1 w-full bg-[#C4292C] my-3"></div>
                            <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#C4292C] ' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify ">Papers must be written in clear, concise English.</p></div>
                            <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#C4292C] ' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify ">Maximum length: 10 pages, including figures, tables, and references.</p></div>
                            <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#C4292C] ' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify ">Follow the IEEE conference paper template.</p></div>
                            <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#C4292C] ' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify ">Submit in PDF or DOCX format only.</p></div>
                            <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#C4292C] ' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify ">Include an abstract of up to 300 words.</p></div>
                            <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#C4292C] ' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify ">Remove all author-identifying information for double-blind review.</p></div>
                        </div>

                        <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-lg p-6 flex flex-col w-full  h-full">

                            <h2 className="poppins-bold text-xl text-[#C4292C] ">Important Notes</h2>
                            <div className="h-1 w-full bg-[#C4292C] my-3"></div>

                            <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#C4292C] ' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify ">All papers undergo a double-blind peer review process</p></div>
                            <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#C4292C] ' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify ">At least one author must register for the conference</p></div>
                            <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#C4292C] ' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify ">Plagiarism checks will be performed</p></div>
                            <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#C4292C] ' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify ">Multiple submissions are not allowed</p></div>
                            <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#C4292C] ' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify ">Authors must present accepted papers at the conference</p></div>
                            <div className="flex gap-2  items-center"><TbPointFilled className='flex text-[18px] shrink-0 text-[#C4292C] ' /> <p className="text-base inter-regular leading-[30px] opacity-85 text-justify ">Papers will be published in the conference proceedings</p></div>

                        </div>
                    </div>
                    <div className=" max-w-[750px] w-full bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.15)] flex items-center justify-center ">
                        <section className=" p-8 w-full flex flex-col h-full">
                            <h3 className="text-2xl poppins-semibold text-center mb-6 text-[#C4292C]">Paper Submission</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block poppins-medium mb-1">Paper Title <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        name="Paper_Title"
                                        value={formData.Paper_Title}
                                        onChange={handleFileInputChange}
                                        required
                                        className="w-full border border-gray-300 outline-[#C4292C] rounded-md p-2 shadow-sm text-base poppins-medium"
                                    />
                                </div>

                                <div>
                                    <label className="block poppins-medium mb-1">Author Full Name <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        name="Author_FUll_Name"
                                        value={formData.Author_FUll_Name}
                                        onChange={handleFileInputChange}
                                        required
                                        className="w-full border border-gray-300 outline-[#C4292C] rounded-md p-2 shadow-sm text-base poppins-medium"
                                    />
                                </div>



                                <div>
                                    <label className="block poppins-medium mb-1">Author Email Address <span className="text-red-500">*</span></label>
                                    <input
                                        type="email"
                                        name="Email_Address"
                                        value={formData.Email_Address}
                                        onChange={handleFileInputChange}
                                        required
                                        className="w-full border border-gray-300 outline-[#C4292C] rounded-md p-2 shadow-sm text-base poppins-medium"
                                    />
                                </div>

                                <div>
                                    <label className="block poppins-medium mb-1">Author Institution Name <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        name="Institution_Name"
                                        value={formData.Institution_Name}
                                        onChange={handleFileInputChange}
                                        required
                                        className="w-full border border-gray-300 outline-[#C4292C] rounded-md p-2 shadow-sm text-base poppins-medium"
                                    />
                                </div>

                                <div>
                                    <label className="block poppins-medium mb-1">Author Category <span className="text-red-500">*</span></label>
                                    <select
                                        type="text"
                                        name="Paper_Track"
                                        value={formData.Paper_Track}
                                        onChange={handleFileInputChange}
                                        required
                                        className="w-full border poppins-medium outline-[#C4292C] border-gray-300 rounded-md p-2 shadow-sm text-base"
                                    >
                                        <option value="">-- Select Category --</option>
                                        <option value="Artificial Intelligence">Artificial Intelligence</option>
                                        <option value="Machine Learning">Machine Learning</option>
                                        <option value="Blockchain Technology">Blockchain Technology</option>
                                        <option value="Cybersecurity Solutions">Cybersecurity Solutions</option>
                                        <option value="Cloud Computing">Cloud Computing</option>
                                        <option value="Data Analytics">Data Analytics</option>
                                        <option value="Internet of Things">Internet of Things</option>
                                        <option value="Human Computer Interaction">Human Computer Interaction</option>
                                        <option value="Digital Transformation">Digital Transformation</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block poppins-medium mb-1">Upload Paper <span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <div className="w-full border poppins-medium outline-[#C4292C] border-gray-300 rounded-md p-4  shadow-sm text-base text-center">
                                            <input
                                                id='Paper_File'
                                                name="Paper_File"
                                                accept=".pdf,.doc,.docx"
                                                type="file"
                                                onChange={handleFileInputChange}
                                                className="absolute inset-0 opacity-0 cursor-pointer"
                                            />
                                            <div className="space-y-4">
                                                <div className=" flex items-center justify-center ">
                                                    <Upload className="w-8 h-8 text-gray-500" />
                                                </div>
                                                <div>
                                                    <p className="text-lg poppins-semibold text-gray-700 mb-2">
                                                        {fileName || "Click to Upload Paper"}
                                                    </p>
                                                    <p className="text-sm poppins-medium  text-gray-500">
                                                        PDF, DOC, or DOCX files only (Max 5MB)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center w-fit  rounded-md mx-auto">
                                    <button type='submit' className="group relative overflow-hidden hover:text-[#C4292C] bg-[#C4292C]  text-white poppins-medium  cursor-pointer py-3 px-6 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center gap-2">
                                        <span className="relative z-10">
                                            {status === 'Sending...' ? 'Submitting...' : 'Submit Your Paper'}
                                        </span>
                                        <div className="absolute -left-1/4 inset-0 h-full w-0 group-hover:w-[150%] duration-500 bg-white rounded-tr-full"></div>
                                    </button>

                                </div>
                            </form>
                        </section>

                    </div>
                </div>
            </section>



        </div>
    )
}

export default Papersubmission