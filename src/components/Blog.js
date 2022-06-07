import React from "react"
import locationIcon from "../images/location-icon.png"
import "../index.css"

function Blog(props) {
    return (
        <div>
            <div className="blog--frame">
                <img className="blog--image" src={props.imageUrl}/>
                <div>
                    <div className="location--frame">
                        <img className="location--icon" src={locationIcon}/>
                        <p className="location--name">{props.location.toUpperCase()}</p>
                        <a className="location--map" href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1 className="title">Mount Fuji</h1>
                    <p className="startDate--endDate">{props.startDate} - {props.endDate}</p>
                    <p className="description">{props.description}</p>
                </div>
            </div>
            <div className="seperator"></div>
        </div>
    )
}

export default Blog;

/*
title: "Mount Fuji",
location: "Japan",
googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
startDate: "12 Jan, 2021",
endDate: "24 Jan, 2021",
description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
*/