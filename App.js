{
  /* <div id="parent_div">
  <div id="child1">
    <h1>I'm H1 tag </h1>
    <h2>I'm H2 tag</h2>
  </div>
  <div id="child2">
    <h1>I'm H1 tag child 2 </h1>
    <h2>I'm H2 tag child 2</h2>
  </div>
</div>; */
}

const parentDiv = React.createElement("div", { id: "parent_div" }, [
  React.createElement("div", { id: "child_div1" }, [
    React.createElement("h1", { id: "heading", xyz: "abc" }, "I'm H1 tag!!"),
    React.createElement("h2", { id: "heading", xyz: "abc" }, "I'm H2 tag!!"),
  ]),
  React.createElement("div", { id: "child_div2" }, [
    React.createElement(
      "h1",
      { id: "heading", xyz: "abc" },
      "I'm H1 tag child 2!!"
    ),
    React.createElement(
      "h2",
      { id: "heading", xyz: "abc" },
      "I'm H2 tag child 2!!"
    ),
  ]),
]);
console.log(parentDiv);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentDiv);
