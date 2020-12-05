import React from "react";
import Navbar from "../Navbar";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

class Contact extends React.Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  state = {
    fields: {}
  };

  onSubmit = (fields) => {
    this.setState({ fields });
  };


  render() {
    // const { user } = this.props.auth;
    return (
      <>
        <Navbar visibility={true} />
        <div>

          {/* Contact form region  */}
          <section class="contactFormContainer">
            <main id="content">

              <div class="text-black" style={{ position: "absolute", top: "15%", left: "50%", right: "50%", borderRadius: "20px", transform: "translate(-50%, 0%)", width: "50%", height: "100%",maxWidth:"650px",maxHeight:"750px", boxShadow: "0px 0px 5px rgba(0, 0, 0, .6)" }}>

                <div class="container py-8">
                  <div class="row justify-content-center">
                    <div class="col-lg-8">
                      <br></br>
                      <h1 class="display-4 mb-4">Contact</h1>
                      <hr></hr>
                    </div>
                  </div>
                </div>
                <div class="container">
                  <div class="bg-white">
                    <div class="container contactContainer row justify-content-center">
                      <div class="col-md-10 col-lg-8">
                        <p>Fields marked with an <span class="text-primary">*</span> are required.</p>
                        <form class="py-4">
                          <div class="form-group">
                            <label for="inputName">Name <span class="text-primary">*</span></label>
                            <input type="text" class="form-control" id="inputName"
                              placeholder="Enter your name" required></input>
                          </div>
                          <div class="form-group">
                            <label for="inputEmail">Email <span class="text-primary">*</span></label>
                            <input type="email" class="form-control" id="inputEmail"
                              placeholder="Enter your email address" required></input>
                          </div>
                          <div class="form-group">
                            <label for="messageTetxarea">Message <span class="text-primary">*</span></label>
                            <textarea class="form-control" id="messageTetxarea" rows="9"
                              placeholder="Enter your message" required></textarea>
                          </div>
                          <button type="submit" class="btn btn-pill"
                            style={{ backgroundColor: "black", fontWeight: "bold", color: "#f4511e" }}>Submit</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="container">
                  <div class="row py-5">
                    <div class="col-lg-15"></div>
                  </div>
                </div>
                <div class="container">
                  <div class="row py-5">
                    <div class="col-lg-15"></div>
                  </div>
                </div>
              </div>

            </main>
          </section>

          {/* End region  */}
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