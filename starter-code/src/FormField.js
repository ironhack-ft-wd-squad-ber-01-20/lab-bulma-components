import React, { Component, Fragment } from "react";

class FormField extends Component {
    render(props) {
        return (
            <Fragment>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Iva" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="email" placeholder="iva@me.dev" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className="input" type="password" placeholder="secret" />
                    </div>
                </div>
            </Fragment>
        )
    }
} 

export default FormField;