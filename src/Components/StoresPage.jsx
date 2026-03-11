import React from 'react'
import {useState} from "react"
import {
  ShoppingCart,
  Smartphone , Shirt , Home
} from "lucide-react";
import TopStores from './TopStores';

function StoresPage() {
    const [activeCategory, setActiveCategory] = useState("All");
  return (
    <div className='storage-page'>
        <div className='category-buttons'>
            <button
          className={activeCategory === "All" ? "active" : ""}
          onClick={() => setActiveCategory("All")}
        ><ShoppingCart size={18} />
          All Categories
        </button>
           <button
          className={activeCategory === "Electronics" ? "active" : ""}
          onClick={() => setActiveCategory("Electronics")}
        > <Smartphone size={18} />
          Electronics
        </button>
           <button
          className={activeCategory === "Fashion" ? "active" : ""}
          onClick={() => setActiveCategory("Fashion")}
        > <Shirt size={18} />
          Fashion
        </button>

        <button
          className={activeCategory === "Grocery" ? "active" : ""}
          onClick={() => setActiveCategory("Grocery")}
        ><Home size={20} />
          Grocery
        </button>
            
        </div>
        {(activeCategory === "All" || activeCategory === "Grocery") && (
  <TopStores activeCategory={activeCategory} />
)}
    </div>
  )
}

export default StoresPage
