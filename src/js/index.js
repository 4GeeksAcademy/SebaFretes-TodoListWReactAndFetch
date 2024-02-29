//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import ToDoApi from "./component/ToDoApi.jsx";

//render your react application
ReactDOM.render(<ToDoApi />, document.querySelector("#app"));
