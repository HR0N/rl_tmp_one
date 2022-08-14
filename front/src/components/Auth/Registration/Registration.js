import React from "react";
import "./Registration.scss";
import {connect} from 'react-redux';


function Registration(props) {
    return(<div className={`Registration`}>
        <div className="auth-form registration-form">
            <h3>Registration form</h3>
            <form className={`form-group`}>
                <input className={`form-control`} type="text" placeholder={`   username`}/>
                <input className={`form-control`} type="email" placeholder={`   email`}/>
                <input className={`form-control`} type="password" placeholder={`   password`}/>
                <input className={`form-control`} type="text" placeholder={`   confirm password`}/>
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