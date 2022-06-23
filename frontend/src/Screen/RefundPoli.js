import {Link} from "react-router-dom";
import React from "react";

import ToolBar from "../components/Components-HomeScreen/ToolBar";
import RefundPolicy from "../components/RefundPolicy";


function RefundPoli(){
    return(
        <>
            <ToolBar />
            <RefundPolicy />
        </>
    );
}
export default RefundPoli;