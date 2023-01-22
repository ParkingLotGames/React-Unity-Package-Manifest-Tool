import React from 'react'

export const Navbar = () => {
  return (
    <h1 className="absolute top-0 py-4 bg-[#111111] w-full px-4 lg:px-[25vw] flex flex-1">
      <div className='text-lg text-white font-bold mx-auto lg:mr-auto text-center'>Unity Package Manifest Tool - Web Version</div>
      <div className='text-white font-bold ml-auto hidden lg:block'>
        <a className='mx-4' href='#'>
          Github
        </a>
        <a className='mx-4' href='#'>
          UnityEditor Version
        </a>
        <a className='mx-4' href='#'>
          C++ wxWidgets Version
        </a>
        <a className='mx-4' href='#'>
          C# Forms Version
        </a>
      </div>
    </h1>
  )
}
