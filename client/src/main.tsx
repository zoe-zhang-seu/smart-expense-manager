import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const container = document.getElementById("root");//html element
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}
//why we have main.tsx?   it is the entry point to the app
//why use BrowserRouter ? will <Routes> / useNavigate() inside
// why StrictMode? it will throw error when code error.