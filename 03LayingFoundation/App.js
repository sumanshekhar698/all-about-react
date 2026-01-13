// You can only use import on a moudule script and not on a normal script
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "React Foundation"
);
console.log(heading);

// * React Element


// JSX is HTML Like Syntax, but its not HTML OR HTML Inside JS

// for browser to understand JSX  we need to convert it to a format that browser can understand specially for React
const jsxHeading0 = <h1>React Foundation by JSX</h1>; // single line declaration without small brackets

const jsxHeading1 =(
    <h1 id="heading" className="headings" tabIndex="1">
     React Foundation by JSX
    </h1>
  ); //jsx is a HTML like syntax created by Meta but its not HTML


const jsxHeading2 = (
  <h1 id="heading" className="headings" tabIndex="1">
   React Foundation by JSX
  </h1>
); //use small brackets for multi line declaration

console.log(jsxHeading1); // * it is exactly same as a React element but it is written in a different way
// so JSX is a syntactic sugar for React.createElement() and it is not a HTML
// Transpiling is the process of converting JSX to React.createElement() and it is done by Babel or Webpack controlled by Parcel*



// * React Components

// * 1. ⚡Functional Component is function that returns a JSX code/React Element
// Also if you remove the smal braces it wil become a React Element 🌞

// ! Make sure to store in PascalCase
const HeaderComponent0 = function () {
  return <h1>React Functional Component 0</h1>;
};

const HeaderComponent1 = () => {
  // * Arrow fn are preferred way
  return <h1>React Functional Component 1</h1>;
};
//return keyword removed in arrow fn
const HeaderComponent2 = () => {
  <h1>React Functional Component 2</h1>;
};
//curly braces removed in arrow fn
const HeaderComponent3 = () => (
  <h1 className="heading3">React Functional Component 3</h1>
);

const Title = () => (
  //Title Componet
  <h1 className="head" tabIndex="6">
    React Course
  </h1>
);

const Quote = () => (
  //Quote Componet
  <h4 className="quote" tabIndex="6">
    {/* {subTitle} infinite cycling rendering*/}
    Make it or break it
  </h4>
);

const strongWord = //strongWord ReactElement
  (
    <span>
      <strong>Advance</strong>
    </span>
  );

// const data = maliciousApi.getData();// Cross Site Scripting 💀 localstorage, cookie, session impersonation
// ! JSX can sanitize data and act as a defence mech to prevent XSS

//subTitle ReactElement having Quote Component and strongWord element
const subTitle = //! Cyclic renderring can lead to infinite renderrng and page will be hung
  (
    <div>
      <Quote />
      {Quote()}
      <p className="sun-head" tabIndex="6">
        Foundation and {strongWord}
        {/* {data} XSS santized*/}
      </p>
    </div>
  );

let num = 2999;
const HeaderComponent4 = () => (
  //HeaderComponent4 React Component
  //there must be just a single parent node
  <div id="container">
    <Title />
    {/* Curly braces can use JS code injection and can also be used for commenting*/}
    {subTitle}
    <h3>I love you {++num}</h3>
    {/* Component Composition:  Component inside a Component */}
    <h2 className="heading3">React Functional Component 4 🚀 </h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root")); //createRoot is used to create a root for react and React will work inside this div only
console.log(root);
// JSX => Transpiling => React.createElement() => React Element JS Object=> ReactDom.render() => HTML Element in the Browser
// React Element => React.createElement() =>

// ! Class Based (Legacy)

// root.render(jsxHeading); // we can only create one root in a react app and can use render on a React element only once in a react app
root.render(<HeaderComponent4 />); // functional Component are rendered in this syntax
