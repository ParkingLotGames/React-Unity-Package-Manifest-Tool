import React from 'react'

import { AddDependencyButton, AddKeywordButton, SaveFileButton, TextField } from '../components'

export const Properties = () => {
    return (
        <div className='py-8'>
            <TextField title={"Name:"} placeholder={"com.[company-name].[package-name]"} />
            <TextField title={"Version:"} placeholder={"1.2.3"} />
            <TextField title={"Display Name:"} placeholder={"Package Example"} />
            <TextField title={"Decription:"} placeholder={"This is an example package"} />
            <TextField title={"Unity Version:"} placeholder={"2019.1"} />
            <TextField title={"Unity Release:"} placeholder={"0b5"} />
            <TextField title={"Documentation URL:"} placeholder={"https://example.com/"} />
            <TextField title={"Changelog URL:"} placeholder={"https://example.com/changelog.html"} />
            <TextField title={"License URL:"} placeholder={"https://example.com/licensing.html"} />
            <AddDependencyButton />
            <AddKeywordButton/>
            <TextField title={"Name:"} placeholder={"Unity"} />
            <TextField title={"E-mail:"} placeholder={"unity@example.com"} />
            <TextField title={"Website:"} placeholder={"https://www.unity3d.com"} />
            <SaveFileButton/>
        </div>
    )
}
