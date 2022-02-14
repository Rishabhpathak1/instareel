import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { AuthContext, AuthProvider } from "./context/AuthProvider";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
    {/* <IntersectionDemo></IntersectionDemo> */}
    {/* <Buttons></Buttons> */}
    {/* <Grids></Grids> */}
  </React.StrictMode>,
  document.getElementById("root")
);
