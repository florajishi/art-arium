import React from "react";
import { NavLink } from "react-router-dom"

function NavBar({ handleLinkClick }){
    
    return(
        <div>
            <NavLink
                to="/"
                exact
                >
                    ArtArium
                </NavLink>
            <button onClick={handleLinkClick} href="/submit-art">Submit An Artwork</button>
        </div>
    )
}

export default NavBar