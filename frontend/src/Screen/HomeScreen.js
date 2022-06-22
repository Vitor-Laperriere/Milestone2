import {Link} from "react-router-dom";
import React from "react";

import ToolBar from "../components/Components-HomeScreen/ToolBar";
import BannerHome from "../components/Components-HomeScreen/BannerHome";
import Colecoes from "../components/Components-HomeScreen/Colecoes";

function HomeScreen(){
    return(
        <>
            <ToolBar />
            <BannerHome />
            <Colecoes />
        </>
    );
}
export default HomeScreen;