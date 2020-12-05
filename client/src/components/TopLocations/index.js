import React from "react";
import "./style.css";

const TopLocations = () => {
    return (
        <>
            <div id="title" style={{marginLeft: "10%", marginTop: "16%", marginRight: "10%"}}>
                <h3>Top Locations</h3>
                <hr />
            </div>
            <div style={{ marginLeft: "10%", marginRight: "10%"}} className="row row-cols-1 row-cols-md-3">
                <div className="col mb-4">
                    <div className="card h-100">
                        <a href="https://travel.usnews.com/Yosemite_CA/" target="_blank" className="img-tag" rel="noreferrer">
                            <img
                                src="https://media.cntraveler.com/photos/5b71a3d92211d70d9158ae1a/4:3/w_3348,h_2511,c_limit/Yosemite_GettyImages-632167865.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="overlay">
                                <div className="text">Click for more info!</div>
                            </div>
                        </a>
                        <div className="card-body">
                            <h5 style={{fontWeight: "600"}} className="card-title">Yosemite</h5>
                            <p style={{fontWeight: "500"}}>#1 in Best U.S. National Parks</p>
                            <p className="card-text">California's most-visited national park stands out for its bevy of impressive waterfalls, such as Vernal Fall and Bridalveil Fall, as well as unique granite rock formations like the Half Dome and El Capitan. Whatever your itinerary may be, make sure to stop by the Tunnel View Outlook, which offers a show-stopping panoramic view of Yosemite Valley. What's more, the picturesque lookout spot is relatively easy to access.</p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card h-100">
                        <a href="https://travel.usnews.com/Yellowstone_National_Park_WY/" target="_blank"  className="img-tag" rel="noreferrer">
                            <img
                                src="https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/01/08ET/top-10-wonders-west-yellowstone-national-park.jpg.rend.hgtvcom.616.462.suffix/1491581132559.jpeg"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="overlay">
                                <div className="text">Click for more info!</div>
                            </div>
                        </a>
                        <div className="card-body">
                            <h5 style={{fontWeight: "600"}} className="card-title">Yellowstone</h5>
                            <p style={{fontWeight: "500"}}>#2 in Best U.S. National Parks</p>
                            <p className="card-text">Even if Yellowstone didn't hold the incredible distinction of being the world's first national park, the 2.2 million-acre park could easily stand on its own for its unique natural attractions and diverse geography. Here, travelers can get lost in the splendor of Yellowstone's many lakes, mountains, buffalo-filled valleys and, of course, its unmatched geysers and hot springs. To avoid the crowds that often plague the park, plan to visit in April, May, September or October.</p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card h-100">
                        <a href="https://travel.usnews.com/Glacier_National_Park_MT/" target="_blank"  className="img-tag" rel="noreferrer">
                            <img
                                src="https://static.rootsrated.com/image/upload/s--G0QLeuLf--/t_rr_large_traditional/kntxugnawdhqcpgkfzu5.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="overlay">
                                <div className="text">Click for more info!</div>
                            </div>
                        </a>
                        <div className="card-body">
                            <h5 style={{fontWeight: "600"}} className="card-title">Glacier National Park</h5>
                            <p style={{fontWeight: "500"}}>#3 in Best U.S. National Parks</p>
                            <p className="card-text">Water and mountains define this national park, which spans two mountain ranges and includes more than 700 lakes across Montana. Take advantage of the park's expansive hiking trails, and be sure to hit traveler favorites like the Trail of the Cedars and Iceberg Lake Trail. Other activities visitors can enjoy include a ride along scenic Going-to-the-Sun Road and a trip to the unique Waterton-Glacier International Peace Park, a UNESCO World Heritage Site.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopLocations;