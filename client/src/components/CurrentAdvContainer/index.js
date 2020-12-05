import React from "react";
import AdvCard from "../AdvCard";

const CurrentAdvContainer = () => {
    return (
        <>
            <div id="title" style={{marginLeft: "10%", marginTop: "5%", marginRight: "10%"}}>
                <h3>Current Adventures</h3>
                <hr />
            </div>
            <div style={{ marginLeft: "10%", marginRight: "10%"}} className="row row-cols-1 row-cols-md-3">
                <AdvCard />
            </div>
        </>
    )
}

export default CurrentAdvContainer;