import React from "react";
import "./style.css";
import 'bootstrap-css-only/css/bootstrap.min.css';

const navBackgroundStyle = {
    background: "rgba(53, 53, 53, 0.609)",
    position: "fixed",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px"
};

const navTitleBtnStyle = {
    fontSize: "20px",
    color: "rgb(221, 130, 10)"
};

const navTabBtns = {
    fontSize: "18px",
    color: "rgb(76, 192, 61)",
    paddingTop: "0%",
    paddingBottom: "0%"
};

const Navbar = (props) => {
    let navbarVisibility = props.visibility;
    let navContent;
    if (navbarVisibility === true) {
        navContent = <>
            <nav style={navBackgroundStyle} className="navbar navbar-expand-lg navbar-light">
                <li className="brand nav-link">
                    <img src="img/campfire.png" alt="logo" className="logo" width="50px" />
                </li>
                <a style={navTitleBtnStyle} className="navbar-brand" href="/dashboard">PitchIt</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a style={navTabBtns} className="nav-link" href="/dashboard">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a style={navTabBtns} className="nav-link" href="/profile">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a style={navTabBtns} className="nav-link" href="/createtrip">Create Trip</a>
                        </li>
                        <li className="nav-item">
                            <a style={navTabBtns} className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                    <li className="navbar-nav nav-item sign-out-btn">
                        <a style={navTabBtns} className="nav-link" href="/">Sign Out</a>
                    </li>
                    {/* <form className="form-inline my-2 my-lg-0">
                    <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Sign Out</button>
                </form> */}
                </div>
            </nav>
        </>
    } else {
        navContent = <></>
    }
    return <>{ navContent}</>
}

export default Navbar;