//the first argument is the element type, the second argument is the element properties/attributes, the third argument is the element content/children nodes
const heading2 = React.createElement("h1", { id: "heading_1", className: "headings" }, "2nd level nesting div sibling"); //React.createElement is used to create a react element, it will return you a simple JS object which is a react element
console.log(heading2); //this will print the react element of the heading2 which is an javascript object that has type, props and children
//props is an object that contains the properties of the element

// heading 2 is the react element that we created using React.createElement and its not yet rendered to the DOM so its not a html element yet
const root = ReactDOM.createRoot(document.getElementById("root")); //createRoot is used to declare and shield a root for react and React will work inside this div only
// root.render(heading2);

/* <div id = "parent">
      <div id = "child">
          <h1 id = "heading_2">2nd level nesting div sibling 1 heading</h1>
          <h1 id = "heading_1">2nd level nesting div sibling 2 heading</h1>
      </div>
   </div>
*/


//nested elements
const parent = React.createElement("div", { id: "parent" }, [//siblings can be created using Array  
  React.createElement("div", { id: "child_1" }, [
    React.createElement(
      "h1",
      { id: "heading_3", className: "headings" },
      "1st level nesting div child heading"
    ),

    React.createElement(
      "h2",
      { id: "heading_4", className: "headings" },
      "1st level nesting div child heading 2"
    )
  ]),

  React.createElement("div", { id: "child_2" },
    heading2 // we can also use previously created react elements inside other react elements
  )

]);

console.log(parent);
root.render(parent); // we should only create one root in a react app and can use render only once in a react app
// we can create multiple react elements and render them inside the root but we should call render only once per root
// we can create multiple roots in a react app but its not recommended
// we can call render multiple times on the same root but its not recommended as it will replace the previous render output and can lead to performance issues






