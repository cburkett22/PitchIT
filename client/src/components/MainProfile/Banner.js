import React from "react";
import "./style.css";

const Banner = (props) => {
  let userName = props.user.name;
  return <>
    <div className="bannerStyle">
      <div>
        <br></br><br></br>
        <p className="welcome">Welcome {userName}</p>
        <p className="quote">"The mountains are calling, and I must go" -John Muir</p>
      </div>
    </div>
  </>;
}

export default Banner;