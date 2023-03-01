"use strict";

const getRandomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);

function createElement(width, height, parentElement = document.body) {
  const newElement = document.createElement("div");

  newElement.style.width = width;
  newElement.style.height = height;
  newElement.style.backgroundColor = getRandomColor();

  if (parentElement === document.body) {
    newElement.style.border = "1px solid black";
  } else {
    newElement.style.borderRight = "1px solid black";
    newElement.style.borderBottom = "1px solid black";
  }

  newElement.style.display = "flex";
  newElement.style.justifyContent = "center";
  newElement.style.alignItems = "center";

  parentElement.appendChild(newElement);

  return newElement;
}

function incrementCounter() {
  const { id } = this;

  counters[id]++;
  elements[id].innerText = counters[id];
  elements[id].style.backgroundColor = getRandomColor();
}

const counters = [0, 0, 0, 0, 0, 0];
const elements = [];

document.body.style.display = "flex";
elements.push(createElement("200px", "180px"));

const container = createElement("fit-content", "180px");

container.style.flexDirection = "column";

const secondContainer = createElement("fit-content", "fit-content", container);

elements.push(createElement("150px", "15px", secondContainer));
elements.push(createElement("150px", "15px", secondContainer));
elements.push(createElement("100%", "150px", container));

const thirdContainer = createElement("fit-content", "fit-content", container);

elements.push(createElement("150px", "15px", thirdContainer));
elements.push(createElement("150px", "15px", thirdContainer));

elements.forEach((element, i) => {
  element.id = i;
  element.innerText = counters[i];
  element.addEventListener("click", incrementCounter);
});
