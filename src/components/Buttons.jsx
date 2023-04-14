import React, { useState, useRef } from 'react'
import { AiFillFolderOpen } from 'react-icons/ai'
import json from 'json-bigint';


export const OpenFileButton = () => {
    

const [jsonObject, setJsonObject] = useState({});

const inputRef = useRef(null);

const handleOpenFile = () => {
    inputRef.current.click();
}

const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file.type === "application/json") {
        const reader = new FileReader();
        reader.onload = (e) => {
            const jsonString = e.target.result;
            setJsonObject(json.parse(jsonString));
        }
        reader.readAsText(file);
    } else {
        alert("Invalid file type, please select a JSON file.");
    }
}

return (
    <div>
        <button onClick={handleOpenFile}className='border-[1px] border-gray-400 rounded-sm hover:bg-gray-600 active:bg-gray-700 bg-gray-500 h-12 w-12 md:w-5 md:h-5 text-center text-white align-middle grid place-items-center'>
            <div className='hidden md:flex'>
                <span className='w-[2px] h-[2px] mx-[1px] bg-white' />
                <span className='w-[2px] h-[2px] mx-[1px] bg-white' />
                <span className='w-[2px] h-[2px] mx-[1px] bg-white' />
            </div>
            <div className='md:hidden'>
                <AiFillFolderOpen size={32}/>
            </div>
        </button>
        <input type="file" ref={inputRef} onChange={handleFileChange} style={{ display: "none" }} />
    </div>
    )
}

export const SaveFileButton = (props) => {

  const handleSave = () => {
    // convert fileData to json string
    const jsonString = JSON.stringify(props.fileData);
    
    // create a blob object with the json string
    const blob = new Blob([jsonString], { type: 'application/json' });

    // create a link element and trigger a click event to open the save file dialog
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "file.json";
    link.click();
  }

  return (
    <button onClick={handleSave}>Save File</button>
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
