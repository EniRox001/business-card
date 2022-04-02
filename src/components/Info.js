import React from "react";
import image from "../images/image.jpg"

export default function Info() {
    return (
        <div className="container">
            <div className="info">
                <img className="info--image" src={image}/>
                <h3 className="info--name">Ehnamuram Enoch</h3>
                <h5 className="info--career">Frontend Developer</h5>
                <h6 className="info--email">enirox001@gmail.com</h6>
                <button className="info--button">Email</button>
            </div>
        </div>
    )
}