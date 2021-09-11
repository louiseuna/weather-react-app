import "./App.css";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Form />
        <p class="github">
          <a
            href="https://github.com/louiseuna/weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            Open Source
          </a>{" "}
          code by Louise Dickss
        </p>
      </div>
    </div>
  );
}

export default App;
