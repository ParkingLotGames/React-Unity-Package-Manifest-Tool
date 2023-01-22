import React from 'react'

export const Navbar = () => {
  return (
    <h1 className="absolute top-0 py-4 bg-[#111118] w-full px-4 lg:px-[15vw] flex flex-1">
      <div className='text-lg text-white font-bold mx-auto lg:mr-auto text-center'>Unity Package Manifest Tool - Web Version</div>
      <div className='text-white text-sm font-bold ml-auto hidden lg:block'>
        <a className='mx-4' href='https://github.com/ParkingLotGames/React-Unity-Package-Manifest-Tool' rel='noopener noreferrer' target="_blank">
          Github
        </a>
        <a className='mx-4' href='https://github.com/ParkingLotGames/Unity-Package-Manifest-Tool' rel='noopener noreferrer' target="_blank">
          UnityEditor Version
        </a>
        <a className='mx-4' href='https://github.com/ParkingLotGames/cpp-wx-Unity-Package-Manifest-Tool' rel='noopener noreferrer' target="_blank">
          C++ wxWidgets Version
        </a>
        <a className='mx-4' href='https://github.com/ParkingLotGames/cpp-qt-Unity-Package-Manifest-Tool' rel='noopener noreferrer' target="_blank">
          C++ Qt Version
        </a>
        <a className='mx-4' href='https://github.com/ParkingLotGames/NET-Forms-Unity-Package-Manifest-Tool' rel='noopener noreferrer' target="_blank">
          C# Forms Version
        </a>
        <a className='mx-4' href='https://github.com/ParkingLotGames/NET-WPF-Unity-Package-Manifest-Tool' rel='noopener noreferrer' target="_blank">
          C# WPF Version
        </a>
      </div>
    </h1>
  )
}
