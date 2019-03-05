import React from 'react';
import PropTypes from 'prop-types';
import "./Contact.css";


const SaveBar = ({
    onDiscardAction,
    open,
    onSaveAction,
}) => (
    open ?
    <div className='SaveBar'>
        <span>Modified, would you like to save your changes?</span>
        <button onClick={onDiscardAction}> Discard Changes </button>
        <button onClick={onSaveAction}> Save </button>
    
    </div>

    :
    null
);

SaveBar.propTypes = {
    onDiscardAction: PropTypes.func,
    open: PropTypes.bool.isRequired,
    onSaveAction: PropTypes.func,
};

export default SaveBar;
