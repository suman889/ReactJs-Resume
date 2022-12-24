import React, { useState } from 'react'
import { CgArrowLeft } from "react-icons/cg";

import { AiOutlineShareAlt } from 'react-icons/ai'
import { BsBookmark, BsGeoAlt, BsLightningCharge, BsStar, BsEnvelope } from "react-icons/bs";


const index = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks

    return (
        <div className='mt-24 mx-40'>
            <div className='flex'>
                <button>
                    <CgArrowLeft className size={30} />
                </button>

                <span className='text-lg font-roboto font-semibold ml-1'>
                    Back to jobs
                </span>
            </div>

            {/** 1ST CONTAINER */}
            <div className='mt-4 bg-white-200 shadow-md rounded-lg p-4 flex  justify-between'>

                {/*** card image and text */}
                <div>
                    <div className='flex'>
                        <img src={require('../../Assets/Images/image 1.png')} alt='' className='h-32 ml-2' />

                        <div className='ml-8'>
                            <h1 className='font-bold text-3xl font-roboto'>Architectural Designer</h1>
                            <h3 className='font-semibold text-lg font-roboto leading-8'>Black Mountain Architecture</h3>
                            <h3 className='font-semibold text-lg font-roboto leading-8'>Posted 07/27/2022</h3>
                        </div>
                    </div>

                    <div className='flex mt-5 gap-3'>

                        <div className='rounded-full bg-black text-white font-bold text-sm py-1 px-6 '>
                            Architecture
                        </div>

                        <div className='rounded-full bg-lime-200 text-black font-bold text-sm py-1 px-5 '>
                            Freelance
                        </div>

                        <div className='rounded-full bg-blue-200 text-black font-bold text-sm py-1 px-5 '>
                            Long-Term
                        </div>
                    </div>

                </div>

                {/***Status application */}
                <div className=''>
                    <div className='flex gap-5 justify-end'>

                        <button>
                            <AiOutlineShareAlt size={26} />
                        </button>

                        <button>
                            <BsBookmark size={20} />
                        </button>
                    </div>

                    <div className='bg-green-300 text-black px-2 py-1 mt-4
                    rounded font-bold text-lg'>Status: Accepting Application</div>

                    <div className='bg-gradient-to-r from-red-500 to-red-300 w-60 
                    text-white px-2 py-2 mt-4
                    rounded-full font-bold text-lg ml-6 text-center'>
                        Apply on Archslate
                    </div>

                </div>

            </div>

            {/** 2nd Container */}

            <div className=' flex mt-5 justify-between'>

                <div className=' md:w-56 h-44  bg-white-200 shadow-md rounded-lg px-3 py-2
                border-gray-600'>
                    <span className='flex font-bold text-black font-roboto gap-4 items-center'>
                        <BsLightningCharge />
                        Software Skills
                    </span>

                    <div className='flex flex-wrap mt-3 gap-4 ml-4'>
                        <div className='flex pl-2 py-1 
                        items-center gap-1 rounded-full
                         bg-black w-20 text-white text-sm'>
                            <BsLightningCharge />
                            Rhono
                        </div>

                        <div className=' pl-3 py-1 
                        items-center gap-1 rounded-full
                         bg-black w-20 text-white text-sm'>

                            Sketchup
                        </div>

                        <div className=' ml-5 pl-6 py-1 
                        items-center gap-1 rounded-full
                         bg-black w-32 text-white text-sm'>

                            Vectorworks
                        </div>
                    </div>
                </div>

                {/** 2*/}
                <div className='md: w-56 h-44 bg-white-200 shadow-md rounded-lg px-3 py-2'>
                    <span className='flex font-bold text-black font-roboto gap-4 items-center'>
                        <BsStar />
                        Experience
                    </span>
                    <div className='font-roboto text-large font-medium ml-8 mt-2'>
                        <h4> Associate</h4>
                        <h4> 3+ years</h4>
                    </div>



                </div>

                {/** 3*/}
                <div className='md:w-56 h-44 bg-white-200 shadow-md rounded-lg px-3 py-2'>
                    <span className='flex font-bold text-black font-roboto gap-4 items-center'>
                        <BsBookmark />
                        Rate
                    </span>
                    <h4 className='font-roboto text-large font-medium ml-8 mt-2'> $55-$65/hour </h4>
                </div>

                {/** 4*/}
                <div className='md:w-56 h-44 bg-white-200 shadow-md rounded-lg  px-3 py-2'>
                    <span className='flex font-bold text-black font-roboto gap-4 items-center'>
                        <BsGeoAlt />
                        Location
                    </span>

                    <div className='font-roboto text-large font-medium ml-8 mt-2 w-28'>
                        Bozeman, MT USA
                    </div>
                    <div className=' pl-3 py-1 
                        items-center gap-1 rounded-full font-bold
                         bg-pink-300 w-20 text-black text-sm
                         mt-4 ml-8'>

                        On-Site
                    </div>
                </div>

            </div>

            {/** 3rd container   */}

            <div className='flex  my-5 gap-3'>

                {/** Left Box */}

                <div className='w-3/4 bg-white-200 shadow-md rounded-lg p-6'>
                    <h2 className='font-bold'> About this role</h2>
                    <p className='font-medium'>
                        Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type.

                    </p>
                    <h2 className='font-bold mt-3'> Responsibilities</h2>

                    <ul className="list-disc ml-8">
                        <li>Self learning</li>
                        <li>Contribute at Open Source</li>
                        <li>Gain Stack overflow respect</li>
                    </ul>

                    <h2 className='font-bold mt-3'> Skills</h2>
                    <ul className="list-disc ml-8">
                        <li>Self learning</li>
                        <li>Contribute at Open Source</li>
                        <li>Gain Stack overflow respect</li>
                        <li>Other</li>
                    </ul>

                    <h2 className='font-bold mt-3'> Qualifications</h2>
                    <h2 className='font-medium mt-3'> Required</h2>
                    <ul className="list-disc ml-8">
                        <li>education</li>
                        <li>licenses and certifications</li>
                        <li>experiance needed</li>

                    </ul>
                    <h2 className='font-bold mt-3'> Rate</h2>
                    <ul className="list-disc ml-8">
                        <li>if available</li>
                    </ul>

                    <h2 className='font-bold mt-3'> Time Estimate</h2>
                    <ul className="list-disc ml-8">
                        <li>if applicable</li>
                    </ul>

                    <h2 className='font-bold mt-3'>Work Autoriation</h2>
                    <ul className="list-disc ml-8">
                        <li>tbd</li>
                    </ul>

                    <h2 className='font-bold mt-3'>About Company</h2>
                    <p className='font-medium mt-3'>
                        Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type.

                    </p>

                    <div className='flex gap-4 my-9'>

                        <button className='bg-gradient-to-r from-red-500 to-red-300 w-60 
                    text-white px-1 py-1 
                    rounded-full font-bold text-sm  text-center'>
                            Apply on Archslate

                        </button>
                        <button className=' flex bg-black text-white
                        items-center rounded-full px-4 py-2'>
                            <BsStar className=' ' size={17} />
                            <span className='text-xs font-roboto text-white 
                            ml-2'>Save</span>
                        </button>

                        <button className=' flex  bg-black text-white
                        items-center rounded-full px-7 py-2'>
                            <AiOutlineShareAlt className='' size={17} />
                            <span className='text-xs font-roboto text-white 
                            ml-2'>Share & Refer</span>
                        </button>
                    </div>
                </div>


                {/** Right Box */}
                <div className='w-1/4 h-44 bg-white-200 shadow-lg rounded-lg  px-3 py-2'>
                    <span className='flex font-bold text-black font-roboto gap-4 items-center mb-3'>

                        Job Poster
                    </span>

                    <div className=' flex '>

                        <img src={require('../../Assets/Images/user.png')} alt='' className='   rounded-full h-30 w-30' />

                        <div>
                            <h3 className='font-roboto text-xl font-medium ml-4 '>
                                John Carlos
                            </h3>

                            <h3 className='font-roboto text-sm font-bold ml-4 '>
                                Project Manager
                            </h3>
                        </div>

                    </div>
                    <div className=' pl-3 py-1 flex
                        items-center gap-2 rounded-full font-bold
                         bg-black w-32 text-white text-sm
                         mt-4 ml-8'>
                        <BsEnvelope size={18} />
                        Message
                    </div>
                </div>
            </div>


        </div>
    )
}

export default index