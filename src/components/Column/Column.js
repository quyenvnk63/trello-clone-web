import React from "react";
import "./Column.scss";

import Task from "components/Task/Task";

function Column(){
    return(
        <div className ="column">
        <header> board header</header>
         <ul className="task-list">
           <Task />
           {/* {/* <li className="task-item">Add what you like to workr on below</li>
           <li className="task-item">Add what you like to workr on below</li>
           <li className="task-item">Add what you like to workr on below</li>
           <li className="task-item">Add what you like to workr on below</li> */}
           <li className="task-item">Add what you like to workr on below</li>
           <li className="task-item">Add what you like to workr on below</li>
           <li className="task-item">Add what you like to workr on below</li>
           <li className="task-item">Add what you like to workr on below</li>
           <li className="task-item">Add what you like to workr on below</li>
           <li className="task-item">Add what you like to workr on below</li>
           <li className="task-item">Add what you like to workr on below</li>
           <li className="task-item">Add what you like to workr on below</li> 
         </ul>
         
         <footer> Add another card</footer>
         
        </div>
        )
}

export default Column;