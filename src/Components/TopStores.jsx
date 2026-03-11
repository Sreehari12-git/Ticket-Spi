import React from "react";
import StoreCard from "./StoreCard";

const TopStores = () => {
    return (
        <div className="section-container">
            <h2 className="section-title">Top Stores</h2>
            <StoreCard image= "	https://stores.ticketspi.com/_next/image?url=%2Fassets%2Fstore_img.jpg&w=828&q=75" name="SL Traders" address="3209 97st NW, Edmonton, T6N 1B7, (Back Door), Edmonton" category="Grocery"/>
        </div>
    )
}
export default TopStores;