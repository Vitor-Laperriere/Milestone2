import {Link} from "react-router-dom";
import React from "react";

import ToolBar from "../components/Components-HomeScreen/ToolBar";
import Ajuda from "../components/Ajuda";


function Help(){
    return(
        <>
            <ToolBar />
            <Ajuda />
        </>
    );
}
export default Help;