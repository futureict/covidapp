import React, {useState, useEffect, Component} from "react";
import ReactDOM from "react-dom";
import Covid from "./components/covid";

const QuizJey = ()=>  {
  

return(
    <div className="container">
    <div className="title"><h3><Covid/></h3> </div>
    </div>
) 
}



ReactDOM.render(<QuizJey />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
