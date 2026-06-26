import React from "react";
import {MapPin} from "lucide-react"
import "./store.css"

const StoreCard = ({image, name, address, category}) => {
    return(
        <div className="store-card">
            <img src={image} alt={name} className="store-banner"/>
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