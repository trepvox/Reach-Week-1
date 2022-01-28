import React from "react";

export default class LogIn extends React.Component {
    render() {
        return (
            <center>
                <form id="login">
                    <h3 id="loginTitle">Login</h3>
                    <div className="mb-5">
                        <label for="formGroupA" className="formGroup"></label>
                        <input type="text" className="form-control" id="formGroupA" placeholder="Username" />
                    </div>
                    <div className="mb-5">
                        <label for="formGroupA" className="formGroup"></label>
                        <input type="text" className="form-control" id="formGroupA" placeholder="Password" />
                    </div>

                    <button type="submit" className="btn btn-primary">Sign In</button>
                </form>
            </center>
        )
    }
}