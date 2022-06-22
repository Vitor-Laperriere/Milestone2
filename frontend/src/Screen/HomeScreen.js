import {Link} from "react-router-dom";
import React from "react";

import ToolBar from "../components/Components-HomeScreen/ToolBar";
import BannerHome from "../components/Components-HomeScreen/BannerHome";
import Colecoes from "../components/Components-HomeScreen/Colecoes";
import FootBar from "../components/Components-HomeScreen/FootBar";

function HomeScreen(){
    return(
        <>
            <ToolBar />
            <BannerHome />
            <div id="titulo">
                <h3>COLLECTION LIST</h3>
            </div>
            <Colecoes />
            <FootBar/>
        </>
    );
}
export default HomeScreen;