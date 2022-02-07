import React from "react";
import image from '../image/unsplash.png'
import '../css/LoginPage.css';
const LoginPage = () => {

    return(
        <div className="form-group" alt="someimage Max-width=100%">
        
            <form className="col inputfield" alt="someimage Max-width=100%">
                <label className="form-label"><h1>Login</h1></label>
                <div class="mb-3">
                    <label for="formGroupExampleInput" id="formGroupExampleInput" className="form-label">Phone Number</label>
                    <input
                        id="formGroupExampleInput"
                        class="form-control"
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                             event.preventDefault();
                            }
                        }}
                        placeholder="Enter your number"
                    />
                </div>
                <div class="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Password</label>
                <input 
                    type="password" 
                    class="form-control" 
                    id="formGroupExampleInput2" 
                    placeholder="Enter your password"
                />
                </div>
                <div>
                <div className="mb-3 d-none justify-content-between">
                <label>
                <input type="checkbox" />
                Remember me</label>
                <a >Forget Password?</a>
                </div>
                <div className="">
                <button className="btn submit-btn btn-lg btn-block mb-3">Submit</button>
                <p className="d-grid justify-content-center">Don't have an account yet?</p>
                <button className="btn create-btn">Create Account</button>
                
                </div>
                </div>
            </form>
            <img className="col sideimage d-none d-md-block" src={image} alt="someimage Max-width=100%" />
        </div>
    )
};
export default LoginPage;