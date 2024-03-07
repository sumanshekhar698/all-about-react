import React from "react";
import ReactDOM from "react-dom/client";
import "./css/style.css";
import Heading from "./components/Heading";
import PlacesList from "./components/PlacesList";
// import PlacesList from "./components/Counter";
import Counter from "./components/Counter";

// const Heading = () =>{

// }

const App = () => {
  return (
    <div className="app">
      <Heading />
      <PlacesList/>
      <Counter />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")); //createRoot is used to create a root for react and React will work inside this div only
// JSX => Transpiling => React.createElement() => React Element JS Object => ReactDom.render() => HTML Element in the Browser
// React Element => React.createElement() =>

root.render(<App />); // functional Component are rendered in this syntax
