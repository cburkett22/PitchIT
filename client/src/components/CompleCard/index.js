import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./style.css";

const CompleCard = (props) => {

    const [ trips, setTrips] = useState([]);

    useEffect(()=>{
      fetch("/api/completed")
      .then(data=> data.json())
      .then(data => setTrips(data))
    },[])

    const deleteCard = (event) => {
        var id = event.target.id;

        event.preventDefault();

        axios({
            url: `/api/delete/${id}`,
            method: 'DELETE',
            data: id
        })
        .then(() => {
            console.log('Data has been deleted!');
            this.resetUserInputs();
        })
        .catch((err) => {
            console.log('Internal server error :(', err);
        });

        window.location.reload();
    }

    const viewCard = (event) => {
        const payload = {
            title: event.target.parentElement.parentElement.querySelector("#title").innerHTML,
            location: event.target.parentElement.parentElement.querySelector("#location").innerHTML,
            date: event.target.parentElement.parentElement.querySelector("#date").innerHTML,
            campers: event.target.parentElement.parentElement.querySelector("#campers").innerHTML,
            items: event.target.parentElement.parentElement.querySelector("#items").innerHTML
        };

        document.getElementById("title2").innerHTML = payload.title;
        document.getElementById("dates").innerHTML = payload.date;
        document.getElementById("location2").innerHTML = payload.location;
        document.getElementById("campers2").innerHTML = payload.campers;
        document.getElementById("backpack2").innerHTML = payload.items;
    }
    
    return (
        <>
            {trips.map((each, index)=>{

                let stars = parseInt(each.stars);

                return (
                    <>
                    <div className="col mb-4">
                        <div className="card h-100">
                            <img
                                src={each.image}
                                className="card-img-top"
                                alt="..."
                            ></img>
                            <div className="card-body">
                            <h5 id="title" style={{fontWeight: "600", marginBottom: "5%"}} className="card-title">{each.title}</h5>
                                <p style={{ textAlign: "left", marginLeft: "5%" }} className="card-text hiddenText"><span style={{fontWeight: "700"}}>Dates: </span><span id="date">{each.date}</span></p>
                                <p style={{ textAlign: "left", marginLeft: "5%" }} className="card-text"><span style={{fontWeight: "700"}}>Location: </span><span id="location">{each.location}</span></p>
                                <p style={{ textAlign: "left", marginLeft: "5%" }} className="card-text hiddenText"><span style={{fontWeight: "700"}}>Campers: </span><span id="campers">{each.campers}</span></p>
                                <p style={{ textAlign: "left", marginLeft: "5%" }} className="card-text hiddenText"><span style={{fontWeight: "700"}}>Backpack: </span><span id="items">{each.items}</span></p>
                                <p style={{ textAlign: "left", marginLeft: "5%" }} className="card-text">
                                    <span style={{fontWeight: "700", float: "left"}}>Rating: </span>
                                        <span id="star1" className="fa fa-star checked visible"></span>
                                        <span id="star2" className={ stars > 1 ? "fa fa-star checked visible" : "fa fa-star checked hidden" }></span>
                                        <span id="star3" className={ stars > 2 ? "fa fa-star checked visible" : "fa fa-star checked hidden" }></span>
                                        <span id="star4" className={ stars > 3 ? "fa fa-star checked visible" : "fa fa-star checked hidden" }></span>
                                        <span id="star5" className={ stars > 4 ? "fa fa-star checked visible" : "fa fa-star checked hidden" }></span>
                                </p> <br></br>
                                <p style={{ textAlign: "left", marginLeft: "5%" }} className="card-text"><span style={{fontWeight: "700"}}>Review: </span><span id="review">{each.review}</span></p>
                                    

                                <div className="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" className="view-trip-btn btn btn-success" data-id="id" data-toggle="modal" data-target="#viewTripid" onClick={viewCard}>
                                    View
                                    </button>
                                    <button id={each._id} type="button" className="btn btn-danger" onClick={deleteCard}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!--View Trip--> */}
                    <div className="modal fade" id="viewTripid" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div id="modal-content" className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="title2"></h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="row modal-body">
                                <div className="col-md-6 form-group">
                                    <p className="trip-ptags">Dates: </p><p id="dates"></p>
                                    <p className="trip-ptags">Location: </p><p id="location2"></p>
                                    <p className="trip-ptags">Campers: </p><p id="campers2"></p>
                                    <p className="trip-ptags">Backpack:</p><p id="backpack2"></p>
                                </div>
                                <div className="col-md-6 view-image">
                                    <img src="https://www.iconfinder.com/data/icons/scenarium-vol-3-1/128/036_backpack_bag_camping_travel_school_rucksack-512.png" alt=""></img>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-success" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                    </div>
                    </>

                )
            })}
        </>
    )
}

export default CompleCard;