import React from 'react'

export const LayoutDesign = () => {
    return (

        // <div className='grid sm:grid-cols-2 gap-4 grid-cols-2'>
        //     <div className='min-h-[100px] rounded-lg shadow bg-red-300'></div>
        //     <div className='min-h-[100px] rounded-lg shadow bg-green-300'></div>
        // </div>

        // <div className='grid sm:grid-cols-4 gap-4 m-4'>
        //     <div className='min-h-[100px] rounded-lg shadow bg-red-300'></div>
        //     <div className='min-h-[100px] rounded-lg shadow bg-green-300'></div>
        //     <div className='min-h-[100px] rounded-lg shadow bg-blue-300'></div>
        //     <div className='min-h-[100px] rounded-lg shadow bg-purple-300'></div>
        // </div>

        <div className='grid sm:grid-cols-12 gap-4 m-4'>
            <div className='min-h-[100px] rounded-lg shadow bg-red-300 sm:col-span-2'></div>
            <div className='min-h-[100px] rounded-lg shadow bg-green-300 sm:col-span-10'></div>
        </div>
    )
}
