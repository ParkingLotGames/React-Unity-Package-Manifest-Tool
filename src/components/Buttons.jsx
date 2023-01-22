import React from 'react'
import { AiFillFolderOpen } from 'react-icons/ai'

export const OpenFileButton = () => {
    return (
        <button className='border-[1px] border-gray-400 rounded-sm hover:bg-gray-600 active:bg-gray-700 bg-gray-500 h-12 w-12 md:w-5 md:h-5 text-center text-white align-middle grid place-items-center'>
            <div className='hidden md:flex'>
                <span className='w-[2px] h-[2px] mx-[1px] bg-white' />
                <span className='w-[2px] h-[2px] mx-[1px] bg-white' />
                <span className='w-[2px] h-[2px] mx-[1px] bg-white' />
            </div>
            <div className='md:hidden'>
                <AiFillFolderOpen size={32}/>
            </div>
        </button>
    )
}

export const SaveFileButton = () => {
    return (
        <button className='border-[1px] border-gray-400 rounded-sm hover:bg-gray-600 active:bg-gray-700 bg-gray-500 h-6 text-center text-white align-middle grid place-items-center my-1 px-2 ml-auto'>
            Save package.json
        </button>
    )
}

export const AddDependencyButton = () => {
    return (
        <button className='border-[1px] border-gray-400 rounded-sm hover:bg-gray-600 active:bg-gray-700 bg-gray-500 h-6 text-center text-white align-middle grid place-items-center my-1 px-2 ml-auto'>
            Add Dependency
        </button>
    )
}

export const RemoveDependencyButton = () => {
    return (
        <button className='border-[1px] border-gray-400 rounded-sm hover:bg-gray-600 active:bg-gray-700 bg-gray-500 h-6 text-center text-white align-middle grid place-items-center my-1 px-2 ml-auto'>
            Remove
        </button>
    )
}

export const AddKeywordButton = () => {
    return (
        <button className='border-[1px] border-gray-400 rounded-sm hover:bg-gray-600 active:bg-gray-700 bg-gray-500 h-6 text-center text-white align-middle grid place-items-center my-1 px-2 ml-auto'>
            Add Keyword
        </button>
    )
}

export const RemoveKeywordButton = () => {
    return (
        <button className='border-[1px] border-gray-400 rounded-sm hover:bg-gray-600 active:bg-gray-700 bg-gray-500 h-6 text-center text-white align-middle grid place-items-center my-1'>
            Remove
        </button>
    )
}
