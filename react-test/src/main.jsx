import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Fromvalidation } from "./fromvalidation.jsx";
import { Displaydata } from "./axiosdata.jsx";
import { BrowserRouter } from "react-router-dom";
// import  Fromvalidation  from './fromvalidation.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Displaydata />
    </BrowserRouter>
  </React.StrictMode>
);