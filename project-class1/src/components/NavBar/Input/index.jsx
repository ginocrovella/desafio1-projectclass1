import React from 'react';
import './styles.css';

const Input = ({valorPlaceholder, title}) => {
    
    // console.log(props);
    
    return (
        <input 
        className='app-input' 
        placeholder={valorPlaceholder + title}
    />
    );
}

export default Input