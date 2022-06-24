import React from "react";

import ToolBar from "../components/Components-HomeScreen/ToolBar";
import BannerHome from "../components/Components-HomeScreen/BannerHome";
import Colecoes from "../components/Components-HomeScreen/Colecoes";

function HomeScreen(){
    return(
        <>
            <BannerHome />
            <div id="titulo">
                <h3>COLLECTION LIST</h3>
            </div>
            <Colecoes />
        </>
    );
}
export default HomeScreen;