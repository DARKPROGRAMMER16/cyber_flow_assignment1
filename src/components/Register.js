import React, { Fragment } from 'react'
import RegisterForm from './RegisterForm'
import logo from '../images/logo.png';

const Register = () => {
    return (
        <Fragment>
            <div className="register">
                <div className="row">
                    <div className="col-md-5">
                        <section className="left-side">
                            <div className="left-side-icon">
                                <img src={logo} alt="" />
                            </div>
                            <div className="left-side-text">
                                <h1 >Video platform we <br /> hope you'll love.</h1>
                                <p>Enjoy video withputs ads. Engage with your favourite <br /> creators. Support awesome work</p>
                                <button className="btn btn-style">Go Home</button>
                            </div>
                        </section>
                    </div>
                    <div className="col-md-7">
                        <section className="right-side">
                            <div className="container text-end mt-4">
                                <h3>Already have an account ? <a href="/">Log in</a> </h3>
                            </div>
                            <RegisterForm/>
                        </section>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Register
