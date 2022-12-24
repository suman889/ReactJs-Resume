import React,{useState} from 'react'

import { BsDribbble, BsEnvelope } from 'react-icons/bs'
import { CgBriefcase } from "react-icons/cg";
import { FiUser,  } from "react-icons/fi";
import {FaSnowflake} from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import Menuitem from './Menuitem.js';


const index = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active);

    }
    return (
        <div className=' bg-white-300 shadow top-0 w-full flex justify-between items-center py-2'>
            <div className='flex items-center'>
                <img src={require('../../Assets/Images/Blue 4 (1).png')} alt='' className='w-13 h-13 ml-2' />
                <img src={require('../../Assets/Images/Archslate.png')} alt='name' className='w-full h-6 pl-4' />
            </div>

            {/** all icon menue */}
            <div className='hidden md:flex  space-x-7 mr-6 self-end order-last'> 


                <button className='  '>
                    <FaSnowflake className=' mx-8'size={17}/>
                    <span className='text-xs font-roboto font-semibold'>Candidates</span>
                </button>

                <button className='  '>
                    <BsDribbble className=' mx-8' />
                    <span className='text-xs font-roboto font-semibold'>Companies</span>
                </button>

                <button className=''>
                    <CgBriefcase className=' mx-2' />
                    <span className='text-xs font-roboto font-semibold'>Jobs</span>
                </button>

                <button className=''>
                    <BsEnvelope className=' mx-9' />
                    <span className='text-xs font-roboto font-semibold'>Notifications</span>
                </button>

                <button className=''>
                    <FiUser className=' mx-5' size={17} />
                    <span className='text-xs font-roboto font-semibold'>User Name</span>
                </button>
            </div>

            <nav>
                <button onClick={showMenu} className='md:hidden mr-8'>
                    <AiOutlineMenu className='scale-150' />
                </button>
          

                <Menuitem showMenu={showMenu} active={active} />
            </nav>

        </div>
    )
}

export default index