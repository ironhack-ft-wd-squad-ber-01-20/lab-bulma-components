import React from 'react';
import ReactDOM from 'react-dom';

const FormField = (props) => {
    return (
        <>
        <div className="field">
            <label className="label">{props.label}</label>
            <div className="control">
                <input className="input" type={props.type} placeholder="e.g Alex Smith" />
            </div>
        </div>
        </>
    )
}

export default FormField;