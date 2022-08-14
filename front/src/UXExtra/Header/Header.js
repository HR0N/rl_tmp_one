import React from "react";
import "./Header.scss";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {connect} from 'react-redux';


function Header() {
    return(        <header className={`Header `}>
        <nav className={`nav`}>
            <div className="nav-auth"><NavLink to={"/home"}  exact="true">Home</NavLink></div>
            <div className="nav-auth"><NavLink to={"/auth"}  exact="true">Auth</NavLink></div>
        </nav>
    </header>);
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
export default connect(mapStateToProps, mapDispatchProps)(Header);