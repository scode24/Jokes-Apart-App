import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import JokesPage from "./pages/JokesPage";
import MainPage from "./pages/MainPage";
import MenuPage from "./pages/MenuPage";
import SelectPage from "./pages/SelectPage";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="main" element={<MainPage />}>
          <Route path="menu" element={<MenuPage />} />
          <Route path="select" element={<SelectPage />} />
          <Route path="jokes" element={<JokesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
