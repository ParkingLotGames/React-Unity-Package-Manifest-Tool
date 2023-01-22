import React from 'react'

export const PathField = () => {
    return (
    <div className='border-[1px] border-gray-700 rounded-sm h-12 w-48 md:h-5 bg-gray-[#181823] md:w-96 text-gray-500 text-center text-sm'>
        <div>Load a package.json file or modify the example below!</div>
    </div>
    )
}

export const TextField = ({title,placeholder}) => {
    return (
        <div className='md:flex md:flex-row text-white py-1'>
            <div className='mx-auto text-center md:text-left md:mr-auto w-[9.5rem]'>{title}</div>
            <input type="text" className='mx-auto text-center md:text-left md:ml-auto w-64 bg-[#141421] rounded-sm border-[1px] border-[#252533]' value={placeholder}></input>        
        </div>
    )
}

export const DependencyField = () => {
    return (
        <div className='flex'>
            <div>Title</div>
            <div>DependencyField</div>
            <div>Version Field</div>
        </div>
    )
}
