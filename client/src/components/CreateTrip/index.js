import React from "react";
import axios from 'axios';
import CalendarComponent from "../Calendar/CalendarComponent";
import classNames from 'classnames';

class CreateTrip extends React.Component {
    constructor(props) {
        super(props);
        this.handleCalendarStartDateSelected = this.handleCalendarStartDateSelected.bind(this);
        this.handleCalendarEndDateSelected = this.handleCalendarEndDateSelected.bind(this);
        this.state = {
            title: '',
            location: '',
            startDate: '',
            endDate: '',
            campers: '',
            items: '',
            displayStartCalendar: false,
            displayEndCalendar: false
        };
    };

    // Handling name/value as targets
    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
        this.setState({displayStartCalendar: false});
    };

    openCalendarStart = () => {
        this.setState({displayStartCalendar: true})
    };

    openCalendarEnd = () => {
        this.setState({displayEndCalendar: true})
    };

    handleCalendarStartDateSelected(userSelection) {
        this.setState({ startDate: userSelection });
        this.setState({displayStartCalendar: false});
    };

    handleCalendarEndDateSelected(userSelection) {
        this.setState({ endDate: userSelection });
        this.setState({displayEndCalendar: false});
    };

    // POSTing trip data with axios
    submit = (event) => {
        event.preventDefault();

        const payload = {
            title: this.state.title,
            location: this.state.location,
            date: this.state.startDate + " - " + this.state.endDate,
            campers: this.state.campers,
            items: this.state.items
        };

        let parkCode = document.querySelector("#starReview").value;
        let apiKey = 'Cz73kVYJzbhAkHWqVSxeyXyeRx5q01oBXc9Pdhtz';
        let campURL = `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=${apiKey}`;
        
        axios({
            url: campURL,
            method: "GET"
        }).then(function (response) {

            const parkInfo = {
                title: payload.title,
                location: response.data.data[0].fullName,
                date: payload.date,
                campers: payload.campers,
                items: payload.items,
                image: response.data.data[0].images[1].url,
                url: response.data.data[0].url
            };

            axios({
                url: '/api/create',
                method: 'POST',
                data: parkInfo
            })
            .then(() => {
                console.log('Data has been sent to the server!');
                // this.resetUserInputs();
            })
            .catch((err) => {
                console.log('Internal server error in axios POST route => ', err);
            });

            // axios.get(`http://api.amp.active.com/camping/campgrounds?pstate=CA&amenity=4004&api_key=8ek9pa2yr6hsasqubhajmzx3`)
            // .then(res => {
            //   console.log(res.data)
            // })

            window.location.href='/dashboard';
        });
    };

    // Reset inputs
    resetUserInputs = () => {
        this.setState({
            title: '',
            location: '',
            startDate: '',
            endDate: '',
            campers: '',
            items: '',
            isCalendarOpen: false
        });
    };

    render(){
        console.log('State: ', this.state);
        return(
            <>
            <div className={classNames('container', 'blurBackground')} >
                <div style={{paddingTop: "6%", paddingLeft: "6%", paddingRight: "6%", paddingBottom: "6%"}}>
                    <form id="create-adventure" onSubmit={this.submit}>
                        <br></br>
                        <br></br>
                        <div>
                            <label htmlFor="title">Adventure Name:</label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                value={this.state.title}
                                onChange={this.handleChange}
                            ></input>
                        </div>
                        <br></br>
                        <div>
                        <label for="starReview">Location: </label>
                            <select id="starReview" name="starReview">
                              <option value="arch">Arches National Park</option>
                              <option value="badl">Badlands National Park</option>
                              <option value="blca">Black Canyon Of The Gunnison National Park</option>
                              <option value="bisc">Biscayne National Park</option>
                              <option value="brca">Bryce Canyon National Park</option>
                              <option value="care">Capitol Reef National Park</option>
                              <option value="cave">Carlsbad Caverns National Park</option>
                              <option value="cany">Canyonlands National Park</option>
                              <option value="cari">Cane River Creole National Historical Park</option>
                              <option value="chis">Channel Islands National Park</option>
                              <option value="crla">Crater Lake National Park</option>
                              <option value="cuva">Cuyahoga Valley National Park</option>
                              <option value="dena">Denali National Park & Preserve</option>
                              <option value="drto">Dry Tortugas National Park</option>
                              <option value="ever">Everglades National Park</option>
                              <option value="fowa">Fort Washington Park</option>
                              <option value="gaar">Gates Of The Arctic National Park & Preserve</option>
                              <option value="glac">Glacier National Park</option>
                              <option value="grca">Grand Canyon National Park</option>
                              <option value="grte">Grand Teton National Park</option>
                              <option value="glba">Glacier Bay National Park & Preserve</option>
                              <option value="grsm">Great Smoky Mountains National Park</option>
                              <option value="grsa">Great Sand Dunes National Park & Preserve</option>
                              <option value="gumo">Guadalupe Mountains National Park</option>
                              <option value="hale">Haleakal&#257; National Park</option>
                              <option value="havo">Hawai'i Volcanoes National Park</option>
                              <option value="isro">Isle Royale National Park</option>
                              <option value="jotr">Joshua Tree National Park</option>
                              <option value="katm">Katmai National Park & Preserve</option>
                              <option value="kefj">Kenai Fjords National Park</option>
                              <option value="lake">Lake Mead National Recreation Area</option>
                              <option value="maca">Mammoth Cave National Park</option>
                              <option value="meve">Mesa Verde National Park</option>
                              <option value="moja">Mojave National Preserve</option>
                              <option value="noca">North Cascades National Park</option>
                              <option value="pefo">Petrified Forest National Park</option>
                              <option value="redw">Redwood National and State Parks</option>
                              <option value="sagu">Saguaro National Park</option>
                              <option value="seki">Sequoia & Kings Canyon National Parks</option>
                              <option value="thro">Theodore Roosevelt National Park</option>
                              <option value="whsa">White Sands National Park</option>
                              <option value="yell">Yellowstone National Park</option>
                              <option value="yose">Yosemite National Park</option>
                              <option value="zion">Zion National Park</option>
                            </select>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="startDate">Start Date:</label>
                            <input
                                type="text"
                                name="startDate"
                                id="startDate"
                                placeholder="Start Date..."
                                value={this.state.startDate}
                                onChange={this.handleChange}
                                onClick={this.openCalendarStart}
                            ></input>
                            <CalendarComponent show={this.state.displayStartCalendar} onSelectionChange={this.handleCalendarStartDateSelected}/>
                        </div>
                        <div>
                            <label htmlFor="endDate">End Date:</label>
                            <input
                                type="text"
                                name="endDate"
                                id="endDate"
                                placeholder="End Date..."
                                value={this.state.endDate}
                                onChange={this.handleChange}
                                onClick={this.openCalendarEnd}
                            ></input>
                            <CalendarComponent show={this.state.displayEndCalendar} onSelectionChange={this.handleCalendarEndDateSelected}/>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="campers">Additional Camper's:</label>
                            <input
                                list="campers-list"
                                type="text"
                                name="campers"
                                id="campers"
                                value={this.state.campers}
                                onChange={this.handleChange}
                            ></input>
                            {/* <datalist id="campers-list">

                            </datalist>
                            <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect add-btn">
                                <i className="material-icons">add</i>
                            </button>
                            <ul className="added-campers">
                            </ul> */}
                        </div>
                        <br></br>
                        <div className="form-group supply-list">
                            <label htmlFor="exampleFormControlTextarea1">Backpack:</label>
                            <textarea
                                className="form-control"
                                name="items"
                                id="items"
                                rows="3"
                                value={this.state.items}
                                onChange={this.handleChange}
                            ></textarea>
                        </div>
                    <button type="submit" style={{marginRight: "3%"}} className="btn btn-outline-success">Submit</button>
                    <a className="cancel" href="/dashboard"><button type="button" className="btn btn-outline-danger">Cancel</button></a>
                    </form>
                </div>
            </div>
            </>
        );
    }
}

export default CreateTrip;