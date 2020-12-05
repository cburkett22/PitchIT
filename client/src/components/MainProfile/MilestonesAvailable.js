import React from "react";
import CamperBadge from "../../img/camper_badge.png";
import ExpertBadge from "../../img/expert.gif";
import ExplorerBadge from "../../img/explorer.gif";
import RookieBadge from "../../img/rookie.gif";
import SequoniaBadge from "../../img/sequoia_np.png";
import YellowstoneBadge from "../../img/yellowstone_np.png";
import YosemiteBadge from "../../img/yosemite_np.png";
import classNames from 'classnames';
import "./style.css";

const Milestones_Available = (props) => {

    return <>
        <br></br>

        <hr style={{ marginLeft: "3%", marginRight: "3%" }}></hr>
        <p className="availableBadge">Available Milestone Badges</p>
        <hr style={{ marginLeft: "3%", marginRight: "3%" }}></hr>

        <div className='displayAvailableFlex'>
        <div className={classNames('container', 'availableContainer')} >

            <div className={classNames('flip-card', 'flipCard')} >
                <div className={classNames('flip-card-inner', 'flipCardInner')}>
                    <div className={classNames('flip-card-front', 'flipCardFront')}>
                        <img className='badgeStyle'mg src={RookieBadge} alt="Avatar"></img>
                    </div>
                    <div className="flip-card-back">
                        <p className='cardText'>Earn this badge upon completing your first trip</p>
                    </div>
                </div>
            </div>
            <div className={classNames('flip-card', 'flipCard')}>
                <div className={classNames('flip-card-inner', 'flipCardInner')}>
                    <div className={classNames('flip-card-front', 'flipCardFront')}>
                        <img className='badgeStyle' src={SequoniaBadge} alt="Avatar"></img>
                    </div>
                    <div className="flip-card-back">

                        <p className='cardText'>Earn this badge upon camping at the Sequoia National Park</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={classNames('container', 'availableContainer')}>
            <div className={classNames('flip-card', 'flipCard')}>
                <div className={classNames('flip-card-inner', 'flipCardInner')}>
                    <div className={classNames('flip-card-front', 'flipCardFront')}>
                        <img className='badgeStyle' src={YellowstoneBadge} alt="Avatar"></img>
                    </div>
                    <div className="flip-card-back">

                        <p className='cardText'>Earn this badge upon camping at the Yellow Stone National Park</p>
                    </div>
                </div>
            </div>



            <div className={classNames('flip-card', 'flipCard')}>
                <div className={classNames('flip-card-inner', 'flipCardInner')}>
                    <div className={classNames('flip-card-front', 'flipCardFront')}>
                        <img className='badgeStyle'mg src={CamperBadge} alt="Avatar"></img>
                    </div>
                    <div className="flip-card-back">

                        <p className='cardText'>Earn this badge upon completing 2 camping trips in a month</p>
                    </div>
                </div>
            </div>
        </div>

        <div className={classNames('container', 'availableContainer')}>
            <div className={classNames('flip-card', 'flipCard')}>
                <div className={classNames('flip-card-inner', 'flipCardInner')}>
                    <div className={classNames('flip-card-front', 'flipCardFront')}>
                        <img className='badgeStyle'mg src={ExpertBadge} alt="Avatar"></img>
                    </div>
                    <div className="flip-card-back">

                        <p className='cardText'>Earn this badge upon completing 10 trips</p>
                    </div>
                </div>
            </div>

            <div className={classNames('flip-card', 'flipCard')}>
                <div className={classNames('flip-card-inner', 'flipCardInner')}>
                    <div className={classNames('flip-card-front', 'flipCardFront')}>
                        <img className='badgeStyle' src={YosemiteBadge} alt="Avatar"></img>
                    </div>
                    <div className="flip-card-back">

                        <p className='cardText'>Earn this badge upon camping at the Yosemite National Park</p>
                    </div>
                </div>
            </div>
        </div>

        <div className={classNames('container', 'availableContainer')}>
            <div className={classNames('flip-card', 'flipCard')}>
                <div className={classNames('flip-card-inner', 'flipCardInner')}>
                    <div className={classNames('flip-card-front', 'flipCardFront')}>
                        <img className='badgeStyle' src={ExplorerBadge} alt="Avatar"></img>
                    </div>
                    <div className="flip-card-back">

                        <p className='cardText'>Earn this badge upon completing 5 trips</p>
                    </div>
                </div>
            </div>
            <div className={classNames('flip-card', 'flipCard')}>
                <div className={classNames('flip-card-inner', 'flipCardInner')}>
                    <div className={classNames('flip-card-front', 'flipCardFront')} style={{backgroundColor: "white", margin:"25%"}}>
                        <p className="comingSoonText"> Coming soon..</p>
                    </div>
                    <div className="flip-card-back">
                    </div>
                </div>
            </div>
        </div>
        </div>

    </>;
}

export default Milestones_Available;