import React, {useState, useEffect} from 'react'
import { AddDependencyButton, AddKeywordButton, SaveFileButton, TextField } from '../components'

export const Properties = () => {
    const [fileData, setFileData] = useState({});
    const [name, setName] = useState("com.[company-name].[package-name]");
    const [version, setVersion] = useState("1.2.3");
    const [displayName, setDisplayName] = useState("Package Example");
    const [description, setDescription] = useState("This is an example package");
    const [unityVersion, setUnityVersion] = useState("2019.1");
    const [unityRelease, setUnityRelease] = useState("0b5");
    const [docsURL, setDocsURL] = useState("https://example.com/");
    const [changelogURL, setChangelogURL] = useState("https://example.com/changelog.html");
    const [licenseURL, setLicenseURL] = useState("https://example.com/licensing.html");
    const [keyword, setKeyword] = useState("Unity");
    const [email, setEmail] = useState("unity@example.com");
    const [website, setWebsite] = useState("https://www.unity3d.com");

    useEffect(() => {
        if(fileData) {
            setName(fileData.name)
            setVersion(fileData.version)
            setDisplayName(fileData.displayName)
            setDescription(fileData.description)
            setUnityVersion(fileData.unityVersion)
            setUnityRelease(fileData.unityRelease)
            setDocsURL(fileData.docsURL)
            setChangelogURL(fileData.changelogURL)
            setLicenseURL(fileData.licenseURL)
            setKeyword(fileData.keyword)
            setEmail(fileData.email)
            setWebsite(fileData.website)
        }
    }, [fileData])
    const handleChange = (field, value) => {
        switch (field) {
            case "file":
                setFileData(value)
                break;
            case "name":
                setName(value);
                break;
            case "version":
                setVersion(value);
                break;
            case "displayName":
                setDisplayName(value);
                break;
            case "description":
                setDescription(value);
                break;
            case "unityVersion":
                setUnityVersion(value);
                break;
            case "unityRelease":
                setUnityRelease(value);
                break;
            case "docsURL":
                setDocsURL(value);
                break;
            case "changelogURL":
                setChangelogURL(value);
                break;
            case "licenseURL":
                setLicenseURL(value);
                break;
            case "keyword":
                setKeyword(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "website":
                setWebsite(value);
                break;
            default:
                break;
        }
    }
    return (
        <div className='py-8'>
            <TextField title={"Name:"} value={name} onChange={(e) => handleChange("name", e.target.value)} />
            <TextField title={"Version:"} value={version} onChange={(e) => handleChange("version", e.target.value)} />
            <TextField title={"Display Name:"} value={displayName} onChange={(e) => handleChange("displayName", e.target.value)} />
            <TextField title={"Decription:"} value={description} onChange={(e) => handleChange("description", e.target.value)} />
            <TextField title={"Unity Version:"} value={unityVersion} onChange={(e) => handleChange("unityVersion", e.target.value)} />
            <TextField title={"Unity Release:"} value={unityRelease} onChange={(e) => handleChange("unityRelease", e.target.value)} />
            <TextField title={"Docs URL:"} value={docsURL} onChange={(e) => handleChange("docsURL", e.target.value)} />
            <TextField title={"Changelog URL:"} value={changelogURL} onChange={(e) => handleChange("changelogURL", e.target.value)} />
            <TextField title={"License URL:"} value={licenseURL} onChange={(e) => handleChange("licenseURL", e.target.value)} />
            <br/>
            <AddDependencyButton />
            <br/>
            <AddKeywordButton/>
            <TextField title={"Name:"} value={keyword} onChange={(e) => handleChange("keyword", e.target.value)} />
            <TextField title={"E-mail:"} value={email} onChange={(e) => handleChange("email", e.target.value)} />
            <TextField title={"Website:"} value={website} onChange={(e) => handleChange("website", e.target.value)} />
            <br/>
            <SaveFileButton/>
        </div>
    )
}
