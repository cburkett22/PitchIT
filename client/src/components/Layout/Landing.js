import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const backgroundImg = {
  backgroundImage: "url(https://lovelytab.com/wp-content/uploads/2019/05/88544.jpg)",
  backgroundPosition: "center fixed",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100vh"
};

class Landing extends Component {
  render() {
    return (
      <div style={backgroundImg}>
        <div style={{ height: "75vh" }} className="container valign-wrapper">
          <div style={{ margin: "auto" }} className="row opacity">
            <div className="col s12 center-align">
              <h4>
                <b>Welcome</b> to{" "}
                <span style={{ fontFamily: "monospace" }}>PitchIt</span>
              </h4>
              <br />
              <div className="col s6">
                <Link
                  to="/register"
                  className="btn btn-warning waves-effect waves-light hoverable accent-3"
                >
                  Register
                </Link>
              </div>
              <div className="col s6">
                <Link
                  to="/login"
                  className="btn btn-warning waves-effect waves-light hoverable accent-3"
                >
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;