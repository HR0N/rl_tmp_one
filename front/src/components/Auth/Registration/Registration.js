import React from "react";
import "./Registration.scss";
import {connect} from 'react-redux';


function Registration(props) {
    return(<div className={`Registration`}>
        <div className="auth-form registration-form">
            <h3>Registration form</h3>
            <form className={`form-group`}>
                <input className={`form-control`} type="email" placeholder={`   email`} name={`email`}/>
                <input className={`form-control`} type="text" placeholder={`   username`} name={`username`}/>
                <input className={`form-control`} type="password" placeholder={`   password`} name={`pass`}/>
                <input className={`form-control`} type="text" placeholder={`   confirm password`} name={`pass2`}/>
            </form>
            <div className="toggle-form">
                <div className="buttons">
                    <div className={`btn auth-form__button auth-form__toggle_form`}
                         onClick={()=>{props.set_login_toggle(true)}}
                    >Sign in</div>
                    <div className={`btn btn-info auth-form__button auth-form__registration`}>Register</div>
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