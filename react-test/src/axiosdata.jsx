import React from "react";
import { Routes, Route } from "react-router-dom";


import { Productdisplay } from "./productdisplay";
import { Fromvalidation } from "./fromvalidation";

export const Displaydata = () => {
  return (
    <Routes>
      <Route>
        <Route path="/display" element={<Productdisplay></Productdisplay>} />
        <Route path="/" element={<Fromvalidation> </Fromvalidation>} />
      </Route>
    </Routes>
  );
};
