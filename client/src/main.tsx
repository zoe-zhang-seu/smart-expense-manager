import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";


const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
//why we have main.tsx?   it is the entry point to the app
//why use BrowserRouter ? will <Routes> / useNavigate() inside
// why StrictMode? it will throw error when code error.