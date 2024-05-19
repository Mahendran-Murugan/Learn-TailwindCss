import React from 'react'
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs'
import { FaFire, FaPoo } from 'react-icons/fa'
import { Icon } from './Icon'

export const SideBar = () => {
    return (
        <div className='fixed top-0 flex flex-col h-screen w-20 bg-gray-800 text-white shadow-lg m-0'>
            <Icon icon={<FaFire size={28} />} />
            <Icon icon={<BsPlus size={28} />} />
            <Icon icon={<BsFillLightningFill size={28} />} />
            <Icon icon={<FaPoo size={28} />} />
            <Icon icon={<BsGearFill size={28} />} />
        </div>
    )
}
