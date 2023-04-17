import React from "react";
import "./Boardcontent.scss";
import Column from "components/Column/Column";

function Boardcontent(){
    return(
        <div className="board-content">
        <Column />
        <Column />
        <Column />
        <Column />
   
        <Column />
   
        <Column />
   
        <Column />
   
   
        </div>
    )
}

export default Boardcontent;