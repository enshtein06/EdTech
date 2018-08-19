import React from 'react';

export default ({id, title, type, onInputChange, value, isRequired, touched}) => {
    console.log("re-render")
    return (
        <div>
            <input 
                type={type} 
                id={id} 
                onChange={onInputChange} 
                value={value} 
                required={isRequired} 
                autoComplete="off"
            />
            <label htmlFor={id} className={`${!!value ? 'emailToched' : ""}`}>{title}</label>
        </div>
    )
}