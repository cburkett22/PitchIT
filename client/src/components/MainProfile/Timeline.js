import React, { useEffect, useState } from "react";
import "./style.css";
import RookieBadge from "../../img/rookie.gif";
import ExplorerBadge from "../../img/explorer.gif";
import CamperBadge from "../../img/camper_badge.png";
import ExpertBadge from "../../img/expert.gif";
import YosemiteBadge from "../../img/yosemite_np.png";
import YellowstoneBadge from "../../img/yellowstone_np.png";
import SequoniaBadge from "../../img/sequoia_np.png";
import classNames from 'classnames';

const Milestones_Timeline = (props) => {
    let tripArray = [];
    let counter = 0;

    const [trips, setTrips] = useState([]);

    useEffect(() => {
        console.log("works");
        fetch("/api/all")
            .then(data => data.json())
            .then(data => setTrips(data))
    }, [])

    const badgeStyle = {
        width: "45%",
        height: "50%",
        borderRadius: "20px",
        boxShadow: "0px 0px 5px rgba(0, 0, 0, .4)"
    }

    if (trips !== 0) {
        for (let i = 0; i < trips.length; i++) {

            if (i === 0) {
                counter += 1;
                tripArray.push(

                    <li>
                        <div className={classNames(counter % 2 === 0 ? 'direction-r' : 'direction-l')}>
                            <div className="flag-wrapper">
                                <span className="flag">{trips[i].title}</span>
                            </div>
                            <span className={classNames('time-wrapper', 'desc')} style={{ width: "100%", textAlign: "center" }}><p className="time">{trips[i].date}</p></span>
                            <div className="desc" >Location - {trips[i].location}</div>
                            <div className="desc" >Milestone earned -   <img src={RookieBadge} alt=" " style={badgeStyle}></img></div>
                        </div>
                    </li>);
            }
            if (trips[i].location.includes("Yosemite National Park")) {
                counter += 1;
                tripArray.push(
                    <li>
                        <div className={classNames(counter % 2 === 0 ? 'direction-r' : 'direction-l')}>
                            <div className="flag-wrapper">
                                <span className="flag">{trips[i].title}</span>
                            </div>
                            <span className={classNames('time-wrapper', 'desc')} style={{ width: "100%", textAlign: "center" }}><p className="time">{trips[i].date}</p></span>
                            <div className="desc" >Location - {trips[i].location}</div>
                            <div className="desc" >Milestone earned -   <img src={YosemiteBadge} alt=" " style={badgeStyle}></img></div>
                        </div>
                    </li>
                );
            }
            if (trips[i].location.includes("Yellow Stone National Park")) {
                counter += 1;
                tripArray.push(
                    <li>
                        <div className={classNames(counter % 2 === 0 ? 'direction-r' : 'direction-l')}>
                            <div className="flag-wrapper">
                                <span className="flag">{trips[i].title}</span>
                            </div>
                            <span className={classNames('time-wrapper', 'desc')} style={{ width: "100%", textAlign: "center" }}><p className="time">{trips[i].date}</p></span>
                            <div className="desc" >Location - {trips[i].location}</div>
                            <div className="desc" >Milestone earned -   <img src={YellowstoneBadge} alt=" " style={badgeStyle}></img></div>
                        </div>
                    </li>
                );
            }
            if (trips[i].location.includes("Sequoia National Park")) {
                counter += 1;
                tripArray.push(
                    <li>
                        <div className={classNames(counter % 2 === 0 ? 'direction-r' : 'direction-l')}>
                            <div className="flag-wrapper">
                                <span className="flag">{trips[i].title}</span>
                            </div>
                            <span className={classNames('time-wrapper', 'desc')} style={{ width: "100%", textAlign: "center" }}><p className="time">{trips[i].date}</p></span>
                            <div className="desc" >Location - {trips[i].location}</div>
                            <div className="desc" >Milestone earned -   <img src={SequoniaBadge} alt=" " style={badgeStyle}></img></div>
                        </div>
                    </li>
                );
            }
            if (i === 3) {
                counter += 1;
                tripArray.push(
                    <li>
                        <div className={classNames(counter % 2 === 0 ? 'direction-r' : 'direction-l')}>
                            <div className="flag-wrapper">
                                <span className="flag">{trips[i].title}</span>
                            </div>
                            <span className={classNames('time-wrapper', 'desc')} style={{ width: "100%", textAlign: "center" }}><p className="time">{trips[i].date}</p></span>
                            <div className="desc" >Location - {trips[i].location}</div>
                            <div className="desc">Milestone earned -   <img src={ExplorerBadge} alt=" " style={badgeStyle} ></img></div>
                        </div>
                    </li>);
            }
            if (i === 5) {
                counter += 1;
                tripArray.push(
                    <li>
                        <div className={classNames(counter % 2 === 0 ? 'direction-r' : 'direction-l')}>
                            <div className="flag-wrapper">
                                <span className="flag">{trips[i].title}</span>
                            </div>
                            <span className={classNames('time-wrapper', 'desc')} style={{ width: "100%", textAlign: "center" }}><p className="time">{trips[i].date}</p></span>
                            <div className="desc">Location - {trips[i].location}</div>
                            <div className="desc">Milestone earned -   <img src={CamperBadge} alt=" " style={badgeStyle}></img></div>
                        </div>
                    </li>);
            }
            if (i === 10) {
                counter += 1;
                tripArray.push(
                    <li>
                        <div className={classNames(counter % 2 === 0 ? 'direction-r' : 'direction-l')}>
                            <div className="flag-wrapper">
                                <span className="flag">{trips[i].title}</span>
                            </div>
                            <span className={classNames('time-wrapper', 'desc')} ><p className="time" style={{ width: "100%", textAlign: "center" }}>{trips[i].date}</p></span>
                            <div className="desc">Location - {trips[i].location}</div>
                            <div className="desc">Milestone earned -   <img src={ExpertBadge} alt=" " style={badgeStyle}></img></div>
                        </div>
                    </li>);
            }

        }
    }

    console.log(trips)
    return <>
        <div className="container" style={{ clear: "both" }}>
            <ul className="timeline">
                {tripArray}
            </ul>
        </div>

    </>;
}

export default Milestones_Timeline;