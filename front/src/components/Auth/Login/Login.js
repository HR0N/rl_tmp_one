import React          from "react";
import "./Login.scss";
import {connect}      from 'react-redux';
import InputClass     from "../../../sublimate/input";
import ValidatorClass from "../../../sublimate/validator";
import ApiClient from "../../../services/api";

const input     = new InputClass();
const validate  = new ValidatorClass();
const apiClient = new ApiClient();


function Login(props) {
    const logEmail = input.init("");
    const logPass  = input.init("");

    const fully_validate = ()=>{
        return(validate.isEmail(logEmail.val)
            && validate.isLength(logPass.val, 4, 33)
            && validate.isAlphanumeric(logPass.val))
    };

    const login = () => {
        if(fully_validate()){
            let data = {
                email: validate.escape(validate.trim(logEmail.val)),
                pass:  validate.escape(validate.trim(logPass.val)),
            };
            apiClient.login(data);
        }
    };

    return(<div className={`Login`}>
        <div className="auth-form login-form">
            <h3>Login form</h3>
            <form className={`form-group`}>
                <label><span className={`validate_error`}>{logEmail.touched ? validate.isEmailMsg(logEmail.val)
                    : false}</span>
                    <input onChange={(e)=>{logEmail.onChange(e)}}
                           value={logEmail.val}
                           onBlur={(e)=>{logEmail.onBlur(e)}}
                           className={`form-control`} type="email" placeholder={`   email`} name={`email`}/>
                </label>
                <label><span className={`validate_error`}>{logPass.touched ? validate.isLengthMsg(logPass.val, 4, 33)
                    : false}</span>
                    <input onChange={(e)=>{logPass.onChange(e)}}
                           value={logPass.val}
                           onBlur={(e)=>{logPass.onBlur(e)}}
                           className={`form-control`} type="password" placeholder={`   password`} name={`pass`}/>
                </label>
            </form>
            <div className="toggle-form">
                <div className="buttons">
                    <div className={`btn auth-form__button auth-form__toggle_form`}
                    onClick={()=>{props.set_login_toggle(false)}}
                    >Register</div>
                    <div className={`btn btn-info auth-form__button auth-form__login`}
                    onClick={()=>{login()}}
                    >Login</div>
                </div>
            </div>
        </div>
    </div>);
}


function mapStateToProps(state){
    return {
        prop: state.app.prop,
    }
}
function mapDispatchProps(dispatch){
    return {
    }
}
export default connect(mapStateToProps, mapDispatchProps)(Login);