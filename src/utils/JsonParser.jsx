import React from 'react'

export const toTitleCase = (str) => {
    // Replace any uppercase letter with a space and the letter
    return str.replace(/([A-Z])/g, ' $1')
      // Replace the first letter with its uppercase version
      .replace(/^./, (str) => str.toUpperCase());
  };
  
export const DisplayJSONData = ({ data }) => {
    // Helper function to check if the passed value is an object
    const isObject = (obj) => obj === Object(obj);
  
    return (
      <div className="grid place-items-center">
        {
          // Iterate through all the keys of the data object
          Object.keys(data).map((key) => (
            <div className="w-[95vw] md:w-[512px]" key={key}>
              {
                // Check if the value of the key is a nested object (or array)
                isObject(data[key]) ? (
                  <div>
                    {/* If it's a nested object, display the key in bold */}
                    <div className="text-lg font-bold w-full text-center bg-[#C0C0D0]">{toTitleCase(key)}</div>
                    {/* Recursively call this component to handle nested objects */}
                    <DisplayJSONData data={data[key]} />
                  </div>
                ) : (
                  <div className="text-lg text-gray-600">
                    {/* If it's not an object or array, display the key and value in small gray font */}
                    <div className="px-2 bg-gray-200 text-lg font-medium">{toTitleCase(key)}</div>
                    <div className="px-2 bg-gray-100">{data[key]}</div>
                  </div>
                )}
            </div>
          ))}
      </div>
    );
  };  