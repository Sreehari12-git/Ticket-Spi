import React from "react";
import {MapPin} from "lucide-react"
import "./store.css"

//destructing props-image,name,address,category
const StoreCard = ({image, name, address, category}) => {
    return(
        <div className="store-card">
            {/* uses the image passed as prop, shows store name if image fails */}
            <img src={image} alt={name} className="store-banner"/>
            {/* Wraps all the text content below the image */}
            <div className="store-content">
                <h3 className="store-name">{name}</h3>
                <div className="store-location">
                    <div className="location-left">
                        <span className="icon"><MapPin size={18} /></span>
                        <span>{address}</span>
                    </div>
                    <span className="send-icon"></span>
                </div>
                <span className="badge">{category}</span>
            </div>
        </div>
    )
}

export default StoreCard;