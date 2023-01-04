import React, { useEffect, useState } from "react";
import Latest from "./Latest";
import MostPopular from "./MostPopular";
import Post from "./Post";


function Gallery({ handleLinkClick }){

    return (
        <div>
            <a onClick={handleLinkClick} href="/latest"><h2>Latest Artwork</h2></a>
            <a onClick={handleLinkClick} href="/most-popular"><h2>Most Popular</h2></a>
        </div>
    );
}

export default Gallery;