import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const Heading = () => (
  <h1 className="head" tabIndex="5">
    hello this is h1
  </h1>
);

// using currly brases return is imp
const Component1 = () => {
  return <p className="para"> Hello I am a Paragraph</p>;
};
//  in case of on line code
const Component2 = () => (
  <p className="para"> hello i am an another Paragraph</p>
);

// these 3 are basically same
const Types = () => (
  <div className="parent">
    <Component1 />
    <Component1></Component1>
    {Component1()}
  </div>
);
// functional component - ( component composition)
const HeadingComponent = () => (
  <div className="container">
    <Heading />
    <h1 className="title">Hello, I am a title</h1>
    <Component1 />
    <Component2 />
    <Types/>
  </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
