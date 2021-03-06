import "./App.css";
import React from "react";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">What's the Weather today?</h1>
        <Form city="London" />
        <p class="github">
          <a
            href="https://github.com/louiseuna/weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            Open Source
          </a>{" "}
          code by Louise Dicks
        </p>
      </div>
    </div>
  );
}

export default App;
