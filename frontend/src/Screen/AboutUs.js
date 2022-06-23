import {Link} from "react-router-dom";
import React from "react";

import ToolBar from "../components/Components-HomeScreen/ToolBar";
import Membros from "../components/Membros";


function AboutUs(){
    return(
        <>
            <ToolBar />
            <Membros />
        </>
    );
}
export default AboutUs;