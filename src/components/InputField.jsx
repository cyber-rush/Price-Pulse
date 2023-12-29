import React from 'react';

const InputField = ({ labelName, placeholderName, value, onChange }) => {
    return (
        <div className="flex flex-col">
            <label className="mb-2 mt-2" htmlFor="inputField">{labelName}</label>
            <input
                className="border border-gray-300 focus:outline-blue-500 rounded-md px-3 py-2"
                type="text"
                placeholder={placeholderName}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default InputField;
