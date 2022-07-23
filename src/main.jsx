import React from "react";
import ReactDOM from "react-dom/client";
import Box from "./Box";
import ResizableComponent from "./ResizableComponent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ResizableComponent Component={Box} />
  </React.StrictMode>
);
