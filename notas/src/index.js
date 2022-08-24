import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./app.js";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <div>
    <App />
  </div>
);
