//1. Susikuriame h1 elementą, jame įrašome savo vardą, pastilizuojame, kad elementas būtų raudonas ir pridedame jį prie <body>.

const h1El = document.createElement("h1");
h1El.textContent = "Rokas";
h1El.style.color = "red";
document.body.append(h1El);

//2. Sukuriame <ul> elementą, o jame - tris <li> elementus su mašinų brand'ais. <body> turi atsirasti <ul>, kuriame trys <li>

const ulEl = document.createElement("ul");

const li1 = document.createElement("li");
li1.textContent = "Volvo";
const li2 = document.createElement("li");
li2.textContent = "VW";
const li3 = document.createElement("li");
li3.textContent = "Audi";

ulEl.append(li1, li2, li3);
document.body.append(ulEl);
