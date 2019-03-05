import React from 'react';
import PropTypes from 'prop-types';

// The proptypes are: handleChange, title and value

const TextInput = ({handleChange, title, value}) => (
    <div>
            <br/>
            {title}
            <input type="text" value={value} onChange={(event) => handleChange(event.target.value)}/>
            <br/>
    </div>

);

TextInput.propTypes = {
        handleChange:PropTypes.func,
        title: PropTypes.string,
        value: PropTypes.string
    };

TextInput.defaultProps = {
    handleChange: (event) => console.info(`New value: ${event.target.value}`),
    title:null,
    value:null,
};

export default TextInput;
