import React from 'react';


const CoolButton = (props) => {
    return (
        <>
        <button className="button is-rounded my-className is-danger is-small">{props.name}</button>
        </>
    )
}

export default CoolButton;