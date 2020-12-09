import React from "react";
import tripIcon from "../../img/trips-icon.png";
import reviewIcon from "../../img/review-icon.png";
import badgeIcon from "../../img/badge-icon.png";
import timelineIcon from "../../img/tmeline_icon2.png";
// import placeHolder from "../../img/placeholder.heic";
import arrowIcon from "../../img/arrowIcon.png";
import "./style.css";
import classNames from 'classnames';
import ProfilePicture from './ProfilePicture';

// document.querySelector('.upload-profile-btn').addEventListener('click', function(event) {
//     event.preventDefault();
//     let profilePic = document.getElementById('add-image-input').value;
//     console.log(profilePic);
// })


//let profileSrc;

const SideBar = (props) => {

    function displayTrips() {
        props.onSelectionChange("Trips")
    }

    function displayReviews() {
        props.onSelectionChange("Reviews")
    }

    function displayMilestones() {
        props.onSelectionChange("Milestones")
    }

    function displayTimeline() {
        props.onSelectionChange("Timeline")
    }
    // if(props.user.img) {
    //     profileSrc = props.user.img;
    // } else {
    //     profileSrc = placeHolder;  #0C3940
    // }

    return <>
        <section>
            <div className="sideBarStyle">
                {/* <div className="img-upload">
                <label className="add-image-label">
                <input id="add-image-input" type="file" onChange={this.fileSelectedHandler} className="add-image" />
                <img src={placeHolder} className="profilePicStyle" alt="profile" />
                </label>
                <button type="submit" className="upload-profile-btn">+</button>
                </div> */}
                <ProfilePicture user={props.user} />

                <ul>
                    <li className={classNames('sideBarMenuItem', props.userSelection === "Trips" ? 'tripActive' : 'tripsStyle')} onClick={displayTrips.bind(this)}>
                         <img src={arrowIcon} className="arrowIconStyle" alt="profile" />
                        <h5 className="optionsTextAlign" style={{ display: "flex" }}>
                            <img src={tripIcon} className="iconStyle" alt="cannot display" />
                            <p className="sidebarText">Trips</p>
                        </h5>
                    </li>
                    <li className={classNames('sideBarMenuItem', props.userSelection === "Reviews" ? 'revewActive' : 'reviewStyle')} onClick={displayReviews.bind(this)}>
                         <img src={arrowIcon} className="arrowIconStyle" alt="profile" />
                        <h5 className="optionsTextAlign" style={{ display: "flex" }}>
                            <img src={reviewIcon} className="iconStyle" alt="cannot display" />
                            <p className="sidebarText">Reviews</p>
                        </h5>
                    </li>
                    <li className={classNames('sideBarMenuItem', props.userSelection === "Milestones" ? 'milestoneActive' : 'mileStoneStyle')} onClick={displayMilestones.bind(this)}>
                         <img src={arrowIcon} className="arrowIconStyle" alt="profile" />
                        <h5 className="optionsTextAlign" style={{ display: "flex" }}>
                            <img src={badgeIcon} className="iconStyle" alt="cannot display" />
                            <p className="sidebarText">Milestones</p>
                        </h5>
                    </li>
                    <li className={classNames('sideBarMenuItem', props.userSelection === "Milestone Timeline" ? 'timelineActive' : 'timelineStyle')} onClick={displayTimeline.bind(this)}>
                         <img src={arrowIcon} className="arrowIconStyle" alt="profile" />
                        <h5 className="optionsTextAlign" style={{ display: "flex" }}>
                            <img src={timelineIcon} className="iconStyle" alt="cannot display" />
                            <p className="sidebarText">Timeline</p>
                        </h5>
                    </li>
                </ul>
            </div>
        </section>
    </>;
}

export default SideBar;