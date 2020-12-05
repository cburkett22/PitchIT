import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import Navbar from "../components/Navbar";
import SideBar from "../components/MainProfile/Sidebar";
import "../components/MainProfile/style.css"
import MainProfile from "../components/MainProfile/MainProfile";
import Banner from "../components/MainProfile/Banner";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.handleSideBarOptionChange = this.handleSideBarOptionChange.bind(this);
    this.state = { option: '' };
  }

  handleSideBarOptionChange(userSelection) {
    this.setState({ option: userSelection });
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const userSelection = this.state.option;

    const { user } = this.props.auth;
    return (
      <>
        <Navbar visibility={true}/>
        <Banner user={user} />
        <SideBar className="sideBar" user={user} userSelection={userSelection} onSelectionChange={this.handleSideBarOptionChange} />
        <MainProfile user={user} userSelection={userSelection} onSelectionChange={this.handleSideBarOptionChange} />
      </>
    );
  }
}

Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Profile);



//Contains login signout buttons login 

/* <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged into your{" "}
                <span style={{ fontFamily: "monospace" }}>PROFILE</span> 👏
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                marginRight: "10px"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
            <DashboardBtn />
          </div>
            </div>*/
