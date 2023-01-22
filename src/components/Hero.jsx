import React from 'react'
import { FilePicker, Properties } from '../containers'
import { About } from './'

export const Hero = () => {
    return (
        <div className='min-h-screen'>
            <About />
            <div className='bg-[#111118] px-2 py-8 xs:px-4 sm:p-8 rounded-xl'>
                <FilePicker />
                <Properties />
            </div>
        </div>
    )
}