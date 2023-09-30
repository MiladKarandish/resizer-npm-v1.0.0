import Selector from "./selector.mini.js";
const container = document.getElementById("container");

const colors = {
  resizersStroke: "#fff",
  resizersFill: "#fff",
  rect: "#fff",
};

// Selector
const selector = new Selector({
  container,
  colors,
  lineWidth: 1,
  resizersSize: 10,
});

const callback = (data) => {
  console.log(data);
};

selector.init(callback);
