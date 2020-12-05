import React, { useEffect, useState } from "react";
import "./style.css";
import MilestonesUser from "./MilestonesUser";
import MilestonesAvailable from "./MilestonesAvailable";

const Milestones = (props) => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    console.log("works");
    fetch("/api/all")
      .then(data => data.json())
      .then(data => setTrips(data))
  }, [])


  return (<>
    <div className="milestoneStyle">
      <MilestonesUser trips={trips} />
      <br></br>
      <MilestonesAvailable />
    </div>
  </>);
}

export default Milestones;