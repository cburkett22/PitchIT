import React from "react";
import "./style.css";
import campfire from "../../img/campfire.gif";
// import { render } from "@testing-library/react";
import reviewsIcon from "../../img/star.png";
import milestoneIcon from "../../img/milestone_icon.jpg";
import TimelineIcon from "../../img/timeline-icon3.PNG"
import Reviews from "./Reviews";
import Trips from "./Trips";
import Milestones from "./MilestonesComponent";
import Timeline from "./Timeline";
// import { PromiseProvider } from "mongoose";


const MainProfile = (props) => {
    // let userName = props.user.name;
    let userSelectedOption = props.userSelection;

    let icon;
    let content;
    switch (userSelectedOption) {
        case "Trips":
            icon = <img src={campfire} className="contentTitleIcon" alt="profile" />
            content = <Trips />
            break;
        case "Reviews":
            icon = <img src={reviewsIcon} className="contentTitleIcon" alt="stars" />
            content = <Reviews user={ props.user }/>
            break;
        case "Milestones":
            icon = <img src={milestoneIcon} className="contentTitleIcon" alt="mountain badge" />
            content = <Milestones />
            break;
        case "Timeline":
            icon = <img src={TimelineIcon} className="contentTitleIcon" alt="timeline" />
            content = <Timeline />
            break;
        default: <></>
            break;
    }
    return <>
        <div className="contentAreaStyle" style={{marginBottom:"20%"}}>
            <br></br>
            <p className="profileContentTitle">{icon}<span className="spacing">{userSelectedOption}</span></p>
            <hr style={{marginLeft:"3%", marginRight:"3%"}}/>
            {content}
        </div>
        <div>
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        </div>
    </>;
}

export default MainProfile;