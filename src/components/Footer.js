import React from "react";
import twitter from "../svg/twitter.svg"
import facebook from "../svg/facebook.svg"
import instagram from "../svg/instagram.svg"
import linkedin from "../svg/linkedin.svg"
import github from "../svg/github.svg"

export default function Footer() {
    return (
        <div className="footer">
            <img src={twitter}/>
            <img src={facebook}/>
            <img src={instagram}/>
            <img src={linkedin}/>
            <img src={github}/>
        </div>
    )
}