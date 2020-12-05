import React from "react";
import CamperBadge from "../../img/camper_badge.png";
import ExpertBadge from "../../img/expert.gif";
import ExplorerBadge from "../../img/explorer.gif";
import RookieBadge from "../../img/rookie.gif";
import classNames from 'classnames';
import "./style.css";

const UserMilestones = (props) => {
console.log(props.trips.length)
    const badgeStyle = {
        width: "105%",
        float: "left",
        height: "50%",
        borderRadius: "20px",
        boxShadow: "0px 0px 5px rgba(0, 0, 0, .4)"
    }

    return <>
        <div className='displayFlex'>
            <div className={classNames( 'userMilestone')}>
                <div className={classNames(props.length === 1 || props.trips.length > 1 ? 'displayBlock' : 'displayNone', 'badgeCardStyle')} >
                    <div className={classNames('card', 'badgeCardStyleInner')}>
                        <img src={RookieBadge} alt=" " style={badgeStyle}></img>
                    </div>
                </div>
                <div className={classNames(props.trips.length === 3 || props.trips.length > 3 ? 'displayBlock' : 'displayNone', 'badgeCardStyle')}>
                    <div className={classNames('card', 'badgeCardStyleInner')}>
                        <img src={ExplorerBadge} alt=" " style={badgeStyle} ></img>
                    </div>
                </div>
            </div>
            <div className={classNames('userMilestone')}>
                <div className={classNames(props.trips.length === 5 || props.trips.length > 5 ? 'displayBlock' : 'displayNone', 'badgeCardStyle')}>
                    <div className={classNames('card', 'badgeCardStyleInner')}>
                        <img src={CamperBadge} alt=" " style={badgeStyle}></img>
                    </div>
                </div>

                <div className={classNames(props.trips.length === 10 || props.trips.length > 10 ? 'displayBlock' : 'displayNone', 'badgeCardStyle')}>
                    <div className={classNames('card', 'badgeCardStyleInner', 'newline')}>
                        <img src={ExpertBadge} alt=" " style={badgeStyle}></img>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default UserMilestones;