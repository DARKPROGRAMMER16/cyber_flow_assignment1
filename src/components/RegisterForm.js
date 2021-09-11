import React, { Fragment } from 'react'

const RegisterForm = () => {
    return (
        <Fragment>
            <div className="container right-side-form">
                <div className="input-form">
                    <form action="">
                        <div className="form-head">    
                            <h1>Register</h1>
                            <p>Welcome! please enter your account details</p>
                        </div>
                        <div className="data-input">
                            <label>Email Address</label>
                            <input type="text" className="form-control"/>
                            <div className="imput-icon">
                                <i class="bi bi-person-lines-fill"></i>
                            </div>
                        </div>
                        <div className="data-input">
                            <label>Password</label>
                            <input type="password" className="form-control"/>
                            <div className="imput-icon">
                                <i class="bi bi-arrow-counterclockwise"></i>
                            </div>
                        </div>
                        <div className="data-input">
                            <label>Retype Password</label>
                            <input type="password" className="form-control"/>
                            <div className="imput-icon">
                                <i class="bi bi-arrow-counterclockwise"></i>
                            </div>
                        </div>
                        
                        <button className="btn btn-primary btn-style">Register</button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default RegisterForm
