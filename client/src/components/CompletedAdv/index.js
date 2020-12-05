import React from "react";
import CompleCard from "../CompleCard"

const CompletedAdvContainer = () => {
    return (
        <>
            <div id="title" style={{marginLeft: "10%", marginTop: "5%", marginRight: "10%"}}>
                <h3>Completed Adventures</h3>
                <hr />
            </div>
            <div style={{ marginLeft: "10%", marginRight: "10%"}} className="row row-cols-1 row-cols-md-3">
                <CompleCard />
            </div>
        </>
    )
}

export default CompletedAdvContainer;