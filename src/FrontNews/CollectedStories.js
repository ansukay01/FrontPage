import React from "react";
import { Link } from "react-router-dom";


 export const CollectedStories=({id, Image, Header})=>{

    return(
        <>
        <Link to={`/storage/${id}`} className="product-link">
        <div className="newsCategories">
        <img className="imageGroup" src={Image} alt={Header} />
        <h4 className="headerFont">{Header}</h4>
        </div>
        </Link>
        </>
    );
}

export default CollectedStories;