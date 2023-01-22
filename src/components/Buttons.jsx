import React from 'react'
import { AiFillFolderOpen } from 'react-icons/ai'

export const OpenFileButton = () => {
    return (
        <div className='border-[1px] border-gray-400 rounded-sm hover:bg-gray-600 active:bg-gray-700 bg-gray-500 h-12 w-12 md:w-5 md:h-5 text-center text-white align-middle grid place-items-center'>
            <div className='hidden md:flex'>
                <span className='w-[2px] h-[2px] mx-[1px] bg-white' />
                <span className='w-[2px] h-[2px] mx-[1px] bg-white' />
                <span className='w-[2px] h-[2px] mx-[1px] bg-white' />
            </div>
            <div className='md:hidden'>
                <AiFillFolderOpen size={32}/>
            </div>
        </div>
    )
}

export const SaveFileButton = () => {
    return (
        <div className='border-[1px] border-gray-400 rounded-sm hover:bg-gray-600 active:bg-gray-700 bg-gray-500 h-6 text-center text-white align-middle grid place-items-center my-1'>
            Save package.json
        </div>
    )
}

export const AddDependencyButton = () => {
    return (
        <div className='border-[1px] border-gray-400 rounded-sm hover:bg-gray-600 active:bg-gray-700 bg-gray-500 h-6 text-center text-white align-middle grid place-items-center my-1'>
            Add Dependency
        </div>
    )
}

export const RemoveDependencyButton = () => {
    return (
        <div className='border-[1px] border-gray-400 rounded-sm hover:bg-gray-600 active:bg-gray-700 bg-gray-500 h-6 text-center text-white align-middle grid place-items-center my-1'>
            Remove
        </div>
    )
}

export const AddKeywordButton = () => {
    return (
        <div className='border-[1px] border-gray-400 rounded-sm hover:bg-gray-600 active:bg-gray-700 bg-gray-500 h-6 text-center text-white align-middle grid place-items-center my-1'>
            Add Keyword
        </div>
    )
}

export const RemoveKeywordButton = () => {
    return (
        <div className='border-[1px] border-gray-400 rounded-sm hover:bg-gray-600 active:bg-gray-700 bg-gray-500 h-6 text-center text-white align-middle grid place-items-center my-1'>
            Remove
        </div>
    )
}
