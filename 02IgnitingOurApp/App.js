// You can only use import on a moudule script and not on a normal script
import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";


//the first argument is the element type, the second argument is the element properties/attributes, the third argument is the element content/children nodes
const heading2 = React.createElement("h1", { id: "heading2", key: "heading_2" }, "Hey React 🚀"); //React.createElement is used to create a react element
console.log(heading2); //this will print the react element of the heading2 which is an javascript object that has type, props and children
//props is an object that contains the properties of the element

// heading 2 is the react element that we created using React.createElement and its not yet rendered to the DOM so its not a html element yet
const root2 = ReactDOM.createRoot(document.getElementById("react-root")); //createRoot is used to create a root for react and React will work inside this div only
// root2.render(heading2);

const parent = React.createElement(
  //this is how we create nested elements in react
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [// siblings can be created using Array  
    React.createElement(
      "h1",
      { id: "heading3", key: "heading_3" },
      "2nd level nesting div heading"
    ),
    heading2,
  ])
);

console.log(parent);
root2.render(parent); // we can only create one root in a react app and can use render only once in a react app
