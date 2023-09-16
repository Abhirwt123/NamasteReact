
import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "hello i am h1"),
        React.createElement("h2", {}, "hello i am h1"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "hello i am h1"),
        React.createElement("h2", {}, "hello i am h1"),
    ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
