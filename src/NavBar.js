import React from "react";
import { NavLink } from "react-router-dom"

function NavBar({ handleLinkClick }){
    
    return(
        <div>
            <NavLink
                to="/"
                exact
                className='logo'
                >
                    ArtArium
            </NavLink>
            <NavLink
                to="/submit-art"
            >
                Submit An Artwork
            </NavLink>
        </div>
    )
}

export default NavBar