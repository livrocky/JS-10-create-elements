//NAMEE//
const h1El = document.createElement("h1");
h1El.textContent = "Rokas";
h1El.style.color = "red";

document.body.append(h1El);

//Unordered list of cars//

const ulEl = document.createElement("ul");
document.body.append(ulEl);
const liEl1 = document.createElement("li");
liEl1.textContent = "Audi";
const liEl2 = document.createElement("li");
liEl2.textContent = "VW";
const liEl3 = document.createElement("li");
liEl3.textContent = "Volvo";

ulEl.append(liEl1, liEl2, liEl3);
