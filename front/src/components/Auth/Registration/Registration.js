import React          from "react";
import "./Registration.scss";
import {connect}      from 'react-redux';
import InputClass     from "../../../sublimate/input";
import ValidatorClass from "../../../sublimate/validator";

const input    = new InputClass();
const validate = new ValidatorClass();


function Registration(props) {
    const regEmail    = input.init("");
    const regUsername = input.init("");
    const regPass     = input.init("");
    const regPass2    = input.init("");

    const fully_validate = ()=>{
        if(validate.isEmail(regEmail.val)
            && validate.isLength(regUsername.val, 2, 20)
            && validate.isLength(regPass.val, 4, 33)
            && validate.isAlphanumeric(regPass.val)
            && validate.isPasEquals(regPass.val, regPass2.val)){
            console.log('all true');
        }
    };

    return(<div className={`Registration`}>
        <div className="auth-form registration-form">
            <h3>Registration form</h3>
            <form className={`form-group`}>
                <label>{/*  ..:: label 1 ::..*/}
                    <span className={`validate_error`}>{regEmail.touched ? validate.isEmailMsg(regEmail.val)
                    : false}</span>
                    <input
                           onChange={(e)=>{regEmail.onChange(e)}}
                           value={regEmail.val}
                           onBlur={(e)=>{regEmail.onBlur(e)}}
                           className={`form-control`} type="email" placeholder={`   email`} name={`email`}/>
                </label>
                <label>{/*  ..:: label 2 ::..*/}
                    <span className={`validate_error`}>{regUsername.touched ? validate.isLengthMsg(regUsername.val, 2, 20)
                    : false}</span>
                    <input
                           onChange={(e)=>{regUsername.onChange(e)}}
                           value={regUsername.val}
                           onBlur={(e)=>{regUsername.onBlur(e)}}
                           className={`form-control`} type="text" placeholder={`   username`} name={`username`}/>
                </label>
                <label>{/*  ..:: label 3 ::..*/}
                    <span className={`validate_error`}>{regPass.touched ? validate.isLengthMsg(regPass.val, 4, 33)
                    : false}</span>
                    <span className={`validate_error`}>{(regPass.touched && validate.isLength(regPass.val, 4, 33))
                        ? validate.isAlphanumericMsg(regPass.val, 4, 33) : false}</span>
                    <input
                           onChange={(e)=>{regPass.onChange(e)}}
                           value={regPass.val}
                           onBlur={(e)=>{regPass.onBlur(e)}}
                           className={`form-control`} type="password" placeholder={`   password`} name={`pass`}/>
                </label>
                <label>{/*  ..:: label 4 ::..*/}
                    <span className={`validate_error`}>{regPass2.touched ? validate.isPasEqualsMsg(regPass.val, regPass2.val)
                    : false}</span>
                    <input
                           onChange={(e)=>{regPass2.onChange(e)}}
                           value={regPass2.val}
                           onBlur={(e)=>{regPass2.onBlur(e)}}
                           className={`form-control`} type="password" placeholder={`   confirm password`} name={`pass2`}/>
                </label>
            </form>
            <div className="toggle-form">
                <div className="buttons">
                    <div className={`btn auth-form__button auth-form__toggle_form`}
                         onClick={()=>{props.set_login_toggle(true)}}
                    >Sign in</div>
                    <div className={`btn btn-info auth-form__button auth-form__registration`}
                    onClick={()=>{fully_validate()}}
                    >Register</div>
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
export default connect(mapStateToProps, mapDispatchProps)(Registration);