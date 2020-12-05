import React, { useEffect, useState } from "react";

const reviewStyle = {
  backgroundColor: "transparent"
}

const bubbleStyle = {
  backgroundColor: "whitesmoke",
  width: "90%",
  textAlign: "left",
  marginTop: "1%",
  marginBottom: "1%",
  marginLeft: "5%",
  padding: "1%",
  borderRadius: "5px 30px 5px 30px",
  boxShadow: "0px 0px 5px rgba(0, 0, 0, .6)",
  fontSize: "16px",
  fontWeight: "400"
}

const Reviews = (props) => {

  const [reviews, setTrips] = useState([]);

  useEffect(() => {

    fetch("/api/completed")
      .then(data => data.json())
      .then(data => setTrips(data))

  }, [])


  return <>

    {reviews.map((each, index) => {
      
      let stars = parseInt(each.stars);

      return(
        <div style={reviewStyle}>
          <div style={bubbleStyle}>
            <h3 className="reviewTitle">{each.location}</h3>
            <span id="star1" className="fa fa-star checked visible"></span>
            <span id="star2" className={ stars > 1 ? "fa fa-star checked visible" : "fa fa-star checked hidden" }></span>
            <span id="star3" className={ stars > 2 ? "fa fa-star checked visible" : "fa fa-star checked hidden" }></span>
            <span id="star4" className={ stars > 3 ? "fa fa-star checked visible" : "fa fa-star checked hidden" }></span>
            <span id="star5" className={ stars > 4 ? "fa fa-star checked visible" : "fa fa-star checked hidden" }></span>
            <p className="reviewText">{each.review}</p>
          </div>
        </div>
      )
    })}
    
  </>;
}

export default Reviews;