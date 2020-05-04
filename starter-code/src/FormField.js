import React, { Fragment } from 'react'

const FormField = (props) => {
    console.log(props)
    return (
        <Fragment>
         <div className="field">
  <label>{props.label}</label>
  <div className="control">
    <input className="input" type={props.type} placeholder={props.placeholder} />
  </div>
</div>
        </Fragment>
    )
}

export default FormField;