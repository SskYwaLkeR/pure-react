const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

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
ReactDOM.render(React.createElement(App), document.getElementById("root"));
