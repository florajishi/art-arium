import React, { useEffect, useState } from "react";
import Gallery from "./Gallery"

function Home(){
    // const [posts, setPosts] = useState([]);
    
    // useEffect(() => {
    //     fetch("db.json", {
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         }
    //     })
    //       .then((r) => r.json())
    //       .then((json) => console.log("This is the response: " , json))
    //   }, [])
      
    return(
        <Gallery />
    )
}

export default Home