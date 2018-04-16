import React from 'react';

const inputWithLabel = ({label, type, id, defaultVal, onChangeValue}) => {
	return (
		<div>
    		<label htmlFor={id}> {label} : &nbsp;</label>
    		<input
    			ref={input => defaultVal = input} 
    			id={id}
    			onChange={event => onChangeValue(event, id)}
    			type={type}			    			
    			defaultValue={defaultVal}/>
    	</div>
	)
}

export default inputWithLabel;