import React from "react";
import image from '../image/unsplash.png'
import '../css/LoginPage.css';
const LoginPage = () => {

    return(
        <div class="loginform d-flex align-items-stretch justify-content-center">
			<div class="d-flexbox justify-content-center user_card col-6">
                <form>
                        <div class="d-flex pb-2 justify-content-start">
                            <h1>Login</h1>
                        </div>
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
							<div class="d-flex justify-content-center pt-3 login_container">
                                <button className="btn submit-btn btn-lg btn-block mb-3">Submit</button>
                            </div>
                            <div>
                                <label class="d-flex justify-content-center login_container">Don't have an account?</label>
                                <div class="d-flex pt-2 justify-content-center links">
                                    <button className="btn create-btn btn-xl btn-block">Create Account</button>
                                </div>
                                
                            </div>  
					</form>
            </div>
                <div class="col-6 d-none d-md-block d-lg-block">
                    <div class="image">
                        <img className="sideimage" src={image} />
                    </div>
                </div>
	</div>
    )
};
export default LoginPage;