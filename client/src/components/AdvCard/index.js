import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./style.css"; 

const AdvCard = (props) => {

    const [ trips, setTrips] = useState([]);

    useEffect(()=>{
        fetch("/api",{
          headers: { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }    
        })
        .then(data => data.json())
        .then(data => {
            setTrips(data)
            console.log(data.text)
        })
    },[]);

    const saveReview = (event) => {
        var id = event.target.value;

        event.preventDefault();

        var review = event.target.parentElement.previousSibling.firstElementChild.querySelector("#exampleFormControlTextarea1").value;

        var stars = event.target.parentElement.previousSibling.firstElementChild.querySelector("#starReview").value;

        var info = {
            id: id,
            review: review,
            stars: stars
        }

        event.target.parentElement.previousSibling.firstElementChild.querySelector("#exampleFormControlTextarea1").value = "";

        axios({
            url: `/api/update/${id}`,
            method: 'PUT',
            data: info
        })
        .then(() => {
            console.log('Data has been sent to the server!');
            this.resetUserInputs();
        })
        .catch((err) => {
            console.log('Internal server error :(', err);
        });

        window.location.reload();
    };

    const saveReview2 = (event) => {
        var id = event.target.value;

        event.preventDefault();

        var info = {
            id: id,
            review: ""
        }

        axios({
            url: `/api/update/${id}`,
            method: 'PUT',
            data: info
        })
        .then(() => {
            console.log('Data has been sent to the server!');
            this.resetUserInputs();
        })
        .catch((err) => {
            console.log('Internal server error :(', err);
        });

        window.location.reload();
    };

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
    };

    const updateTrip = (event) => {
        event.preventDefault();

        const payload = {
            title: event.target.parentElement.parentElement.querySelector("#title").innerHTML,
            location: event.target.parentElement.parentElement.querySelector("#location").innerHTML,
            date: event.target.parentElement.parentElement.querySelector("#date").innerHTML,
            campers: event.target.parentElement.parentElement.querySelector("#campers").innerHTML,
            items: event.target.parentElement.parentElement.querySelector("#items").innerHTML
        };

        document.getElementById("title3").value = payload.title;
        document.getElementById("dates3").value = payload.date;
        document.getElementById("location3").value = payload.location;
        document.getElementById("campers3").value = payload.campers;
        document.getElementById("backpack3").value = payload.items;
        document.getElementById("updatebtn").value = event.target.id;
    };

    const saveUpdate = (event) => {
        event.preventDefault();

        var id = event.target.value;

        const info = {
            title: event.target.parentElement.parentElement.querySelector("#title3").value,
            location: event.target.parentElement.parentElement.querySelector("#location3").value,
            date: event.target.parentElement.parentElement.querySelector("#dates3").value,
            campers: event.target.parentElement.parentElement.querySelector("#campers3").value,
            items: event.target.parentElement.parentElement.querySelector("#backpack3").value
        }

        axios({
            url: `/api/updatecard/${id}`,
            method: 'PUT',
            data: info
        })
        .then(() => {
            console.log('Data has been sent to the server!');
            this.resetUserInputs();
        })
        .catch((err) => {
            console.log('Internal server error :(', err);
        });

        window.location.reload();
    };

    return (
        <>
            {trips.map((each, index)=>{
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
                                <p style={{ textAlign: "left", marginLeft: "5%" }} className="card-text"><span style={{fontWeight: "700"}}>Dates: </span><span id="date">{each.date}</span></p>
                                <p style={{ textAlign: "left", marginLeft: "5%" }} className="card-text"><span style={{fontWeight: "700"}}>Location: </span><span id="location">{each.location}</span></p>
                                <p style={{ textAlign: "left", marginLeft: "5%" }} className="card-text"><span style={{fontWeight: "700"}}>Campers: </span><span id="campers">{each.campers}</span></p>
                                <p style={{ textAlign: "left", marginLeft: "5%" }} className="card-text"><span style={{fontWeight: "700"}}>Backpack: </span><span id="items">{each.items}</span></p>
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button id={each._id} type="button" class="view-trip-btn btn btn-warning" data-id="id" data-toggle="modal" data-target="#viewTripid2" onClick={updateTrip}>
                                    Update
                                    </button>
                                    <button id={each._id} type="button" className="complete-trip-btn btn btn-success" data-toggle="modal" data-target="#exampleModalid">
                                        Complete Trip
                                    </button>
                                    <button id={each._id} type="button" class="btn btn-danger" onClick={deleteCard}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*//Prompt for review*/}
                    <div className="modal fade" id="exampleModalid" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div id="modal-content" className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Review Trip?</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    Would you like to write a review for your trip?
                                </div>
                                <div className="modal-footer">
                                    <button id="nobtn" type="button" className="btn btn-secondary no-btn" data-id="id" data-dismiss="modal" onClick={saveReview2}>No</button>
                                    <button id="yesbtn" type="button" className="btn btn-primary writeTxtBtn" data-id="id" data-toggle="modal" data-target="#exampleModalCenterid" data-dismiss="modal">
                                        Yes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*//Prompt for review*/}


                    {/*<!-- Review Modal -->*/}
                    <div className="modal fade" id="exampleModalCenterid" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div id="modal-content" className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Review</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label for="starReview">Star Rating: </label>
                                        <select id="starReview" name="starReview">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                        <br />
                                        <label for="exampleFormControlTextarea1">Write your review:</label>
                                        <textarea className="form-control review-textid" id="exampleFormControlTextarea1" rows="3" maxlength="250"></textarea>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button id="savebtn" type="button" className="btn btn-primary save-review" data-dismiss="modal" data-id="id" onClick={saveReview}>Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<!-- Review Modal -->*/}


                    {/* <!--Update Trip--> */}
                    <div className="modal fade" id="viewTripid2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div id="modal-content" className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title"><input id="title3"></input></h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="row modal-body">
                                <div className="col-md-6 form-group">
                                    <p className="trip-ptags">Dates: </p><input id="dates3"></input>
                                    <p className="trip-ptags">Location: </p><input id="location3"></input>
                                    <p className="trip-ptags">Campers: </p><input id="campers3"></input>
                                    <p className="trip-ptags">Backpack:</p><input id="backpack3"></input>
                                </div>
                                <div className="col-md-6 view-image">
                                    <img src="https://www.iconfinder.com/data/icons/scenarium-vol-3-1/128/036_backpack_bag_camping_travel_school_rucksack-512.png" alt=""></img>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button id="updatebtn" type="button" className="btn btn-outline-success" data-dismiss="modal" onClick={saveUpdate}>Update</button>
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

export default AdvCard;