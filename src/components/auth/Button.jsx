import React from 'react';

export default ({type, title, onButtonClick}) => {
    return (
        <button type={type} onClick={onButtonClick}>{title}</button>
    )
}