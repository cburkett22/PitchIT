import React from "react";
import CreateTrip from "../components/CreateTrip";
import Navbar from "../components/Navbar";

function TripForm() {
    return(
        <div>
            <Navbar visibility={true}/>
            <CreateTrip />
        </div>
    );
}

export default TripForm;