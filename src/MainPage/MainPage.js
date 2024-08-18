import React from "react";
import Homepage from "../Pages/Homepage";
import { TopStories } from "../FrontNews/TopStories";
import { Advert } from "../FrontNews/Advertisement";


function MainPage() {

    return(
        <>
        <Homepage />
        <br/>
        <TopStories />
        <Advert />
        </>
    )
}

export default MainPage;