import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import NWRapper from "./wrapper/NWRapper.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NWRapper />
    </BrowserRouter>
  </React.StrictMode>
);
