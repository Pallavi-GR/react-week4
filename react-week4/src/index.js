import React from "react";
import ReactDOM from "react-dom/client";

import "./App.css";

import reportWebVitals from "./reportWebVitals";

import Search from "./Search";
function App() {
  return (
    <div className="App">
      <h1>Weather Search App</h1>
      <div className="Search">
        <p> Please enter below the city to be searched.</p>
        <Search />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
