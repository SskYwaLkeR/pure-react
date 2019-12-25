import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me"),
    React.createElement(Pet, {
      name: "Luna",
      breed: "havanese",
      animal: "Dog"
    }),
    React.createElement(Pet, {
      name: "Pepper",
      breed: "Cocktail",
      animal: "Bird"
    }),
    React.createElement(Pet, {
      name: "Doink",
      breed: "MIxed",
      animal: "Cat"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
