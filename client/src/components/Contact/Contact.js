import React from "react";
import { Modal, Button } from "react-bootstrap";
import Navbar from "../Navbar";
import PropTypes from "prop-types";
import emailjs from "emailjs-com";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

class Contact extends React.Component {
  state = {
    isOpen: false
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };
  closeModal = () => {
    this.setState({ isOpen: false });
    window.location.href='/dashboard';
  };
  
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  // state = {
  //   fields: {}
  // };

  // onSubmit = (fields) => {
  //   this.setState({ fields });
  // };

  sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_avavf8q', e.target, 'user_KXcU5QWtZR5y9g58QIMyU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
    this.openModal();
  };

  render() {
    // const { user } = this.props.auth;
    return (
      <>
        <Navbar visibility={true} />
        <div>
          {/* Contact form region  */}
          <section className="contactFormContainer">
            <main id="content">
              <div className="text-black" style={{ position: "absolute", top: "15%", left: "50%", right: "50%", borderRadius: "20px", transform: "translate(-50%, 0%)", width: "50%", height: "100%",maxWidth:"650px",maxHeight:"750px", boxShadow: "0px 0px 5px rgba(0, 0, 0, .6)" }}>
                <div className="container py-8">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <br></br>
                      <h1 className="display-4 mb-4">Contact</h1>
                      <hr></hr>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="bg-white">
                    <div className="container contactContainer row justify-content-center">
                      <div className="col-md-10 col-lg-8">
                        <p>Fields marked with an <span className="text-primary">*</span> are required.</p>
                        <form className="py-4" onSubmit={this.sendEmail}>
                          <div className="form-group">
                            <label htmlFor="inputName">Name <span className="text-primary">*</span></label>
                            <input type="text" className="form-control" id="inputName" placeholder="Enter your name" name="name" required>
                            </input>
                          </div>

                          <div className="form-group">
                            <label htmlFor="inputEmail">Email <span className="text-primary">*</span></label>
                            <input type="email" className="form-control" id="inputEmail" placeholder="Enter your email address" name="email" required></input>
                          </div>

                          <div className="form-group">
                            <label htmlFor="messageTetxarea">Message <span className="text-primary">*</span></label>
                            <textarea className="form-control" id="messageTetxarea" rows="9" placeholder="Enter your message" name="message" required></textarea>
                          </div>

                          <button variant="primary" type="submit" className="btn btn-pill" style={{ backgroundColor: "black", fontWeight: "bold", color: "#f4511e" }}>
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container">
                  <div className="row py-5">
                    <div className="col-lg-15"></div>
                  </div>
                </div>

                <div className="container">
                  <div className="row py-5">
                    <div className="col-lg-15"></div>
                  </div>
                </div>
              </div>
            </main>
          </section>

          {/* End region  */}
        </div>
        <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Thanks for your support!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Your message has been sent to the PitchIt developers. Someone will reach out soon!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Go Home
            </Button>
          </Modal.Footer>
        </Modal>
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