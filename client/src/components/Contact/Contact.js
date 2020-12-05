import React from "react";
import Navbar from "../Navbar";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Form from "../Forms/ContactForm.js";

class Contact extends React.Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  state = {
    fields:{}
  };

  onSubmit = (fields) => {
    this.setState({ fields });
  };


render() {
    // const { user } = this.props.auth;
return (
    <>
        <Navbar visibility={true}/>
        <div className="row">
          <Form onSubmit={fields => this.onSubmit(fields)} />
        </div>
    </>
    );
  }
}

Contact.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Contact);