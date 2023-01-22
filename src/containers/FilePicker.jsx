import React from 'react'
import { OpenFileButton, PathField } from '../components'

export const FilePicker = () => {
    return (
        <div className='flex'>
            <PathField />
            <OpenFileButton />
        </div>
    )
}
