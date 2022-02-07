import React from "react";
import image from '../image/unsplash.png'
import '../css/LoginPage.css';
const LoginPage = () => {

    return(
        
    <div class="row d-grid-block mx-0">
        
        <div class="col user_details">
            <div class="d-flex pb-2 justify-content-start">
                <h1>Login</h1>
            </div>
            <div className="details">
            <div class="input-group d-flex flex-column mb-3">
                <label for="formGroupExampleInput" id="formGroupExampleInput" className="form-label">Phone Number</label>
                <div>
                <input id="formGroupExampleInput"
                class="form-control"
                maxLength="10"
                onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                    }
                }}
                placeholder="Enter your number"/>
                </div>
            </div>
            <div class="input-group d-flex flex-column pb-2">
                <label for="formGroupExampleInput2" className="form-label">Password</label>
                <div>
                    <input 
                    type="password" 
                    class="form-control" 
                    id="formGroupExampleInput2" 
                    placeholder="Enter your password"
                    />
                </div>
            </div>
        <div class="form-group d-flex justify-content-between">
            <div class="custom-control pr-sm-2 custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customControlInline"/>
                <label class="custom-control-label" for="customControlInline">Remember me</label>
            </div>
            <div>
                <a href="#">Forgot password?</a>
            </div>
        </div>
        <div class="form-group d-flex justify-content-center pt-3">
            <button className="btn submit-btn btn-lg btn-block mb-3">Submit</button>
        </div>
        <div className="form-group">
            <label class="d-flex justify-content-center">Don't have an account?</label>
            <div class="d-flex pt-2 justify-content-center links">
                <button className="btn create-btn btn-xl btn-block">Create Account</button>
            </div> 
        </div>  
            </div>
        </div>
        <div class="login_image col-6 h-100 px-0 my-0 d-none d-md-block">
        <img src={image}/>
        </div>
    </div>
    )
};
export default LoginPage;