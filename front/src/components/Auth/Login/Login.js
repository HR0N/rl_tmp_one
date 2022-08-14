import React from "react";
import "./Login.scss";
import {connect} from 'react-redux';


function Login(props) {
    return(<div className={`Login`}>
        <div className="auth-form login-form">
            <h3>Login form</h3>
            <form className={`form-group`}>
                <input className={`form-control`} type="text" placeholder={`   username`} name={`username`}/>
                <input className={`form-control`} type="password" placeholder={`   password`} name={`pass`}/>
            </form>
            <div className="toggle-form">
                <div className="buttons">
                    <div className={`btn auth-form__button auth-form__toggle_form`}
                    onClick={()=>{props.set_login_toggle(false)}}
                    >Register</div>
                    <div className={`btn btn-info auth-form__button auth-form__login`}>Login</div>
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