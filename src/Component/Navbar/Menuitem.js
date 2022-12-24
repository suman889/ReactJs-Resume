import React from 'react';
import { AiOutlineClose } from 'react-icons/ai'


const Menuitem = ({ showMenu, active }) => {
    return (
        <div>
            <ul className={active ? "md:hidden  inset-1 left-1/3 fixed uppercase bg-black/40 backdrop-blur-lg " : "hidden"}>
                <button onClick={showMenu} className='scale-105 ml-4 mt-5'>
                    <AiOutlineClose className='scale-150 fill-white' />
                </button>
                <div className='ml-4 flex-col  py-10 space-y-10 text-white font-roboto text-xl'>
                    <li> Candidates </li>
                    <li> Companies </li>
                    <li> Jobs </li>
                    <li> Notifications  </li>
                    <li> User Name </li>
                </div>
            </ul>
        </div>
    )
}

export default Menuitem