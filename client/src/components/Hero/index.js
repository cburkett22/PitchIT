import React from "react";
import "./style.css"

const HeroImg = {
    background: "url(https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)center / cover no-repeat, rgba(0,0,0,.5)"
}

const Hero = () => {
    return (
        <>
            <div className="hero" style={ HeroImg }>
                <div className="landing">
                    <h1 id="main-title" className="title">PitchIt</h1>
                    <h1 className="title">Find Yourself Outside.</h1>
                    <br />
                    <p className="subtitle">Plan a unique trip with your friends that you will remember for a lifetime.</p>
                    <div className="boxes">
                        <div className="box">
                            <img src="img/camper.png" alt="" width='50' />
                            <h3 style={{fontWeight: "700"}}>Invite Friends</h3>
                            <p>Plan an adventure to your favorite spot or discover a new one that's right for you.</p>
                        </div>

                        <div className="box">
                            <img src="https://www.flaticon.com/svg/static/icons/svg/3300/3300090.svg" alt="" width='50' />
                            <h3 style={{fontWeight: "700"}}>Plan Your Adventure</h3>
                            <p>Plan your adventure by choosing a location, inviting friends, and even packing your backpack.</p>
                        </div>

                        <div className="box">
                            <img src="img/star.png" alt="" width='50' />
                            <h3 style={{fontWeight: "700"}}>Review Your Adventures</h3>
                            <p>Review your adventure to let others know how you enjoyed the park and give recommendations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;