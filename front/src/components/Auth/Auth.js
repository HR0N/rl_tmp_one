import React from "react";
import "./Auth.scss";
import {connect} from 'react-redux';


function Auth() {
    return(<div className={`Auth`}>
        <h2>Auth</h2>
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
export default connect(mapStateToProps, mapDispatchProps)(Auth);