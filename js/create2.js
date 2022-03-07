"use strict";

const h1El = document.createElement("h1");
h1El.textContent = "Yes it is dynamic";
h1El.className = "main-title";

document.body.prepend(h1El);

//____________________________________//

// const sectionEl = document.createElement("section");
// const h2El = document.createElement("h2");
// const pEl = document.createElement("p");
// h2El.textContent = "Section title";
// pEl.textContent = "Hello i am section text";
// pEl.className = "text";
// sectionEl.insertAdjacentElement("afterbegin", h2El);
// sectionEl.insertAdjacentElement("beforeend", pEl);
// document.body.append(sectionEl);
//_____________________________________//

function makeEl(tag, text, className) {
  //sukuriam
  const newEl = document.createElement(tag);
  //pridedam klase
  newEl.className = className;
  //pridedam text
  newEl.textContent = text;
  return newEl;
}
const pEl1 = makeEl("p", "Hello I am section text", "text");

//__________article about________________//

const articleEl = document.createElement("article");
articleEl.className = "about";

const ulEl = document.createElement("ul");
const li1 = document.createElement("li");

for (let i = 0; i < miestai.length; i++) {
  const element = miestai[i];
  li1.className = "a__towns";
  li1.textContent = element;
  ulEl.append(li1);
}

// li1.className = "a__towns";
// li1.textContent = "Kaunas";
// ulEl.append(li1);
// li2.className = "a__towns";
// li2.textContent = "Vilnius";
// ulEl.append(li2);
// li3.className = "a__towns";
// li3.textContent = "Klaipeda";
// ulEl.append(li3);

console.log();

//button//

const btnEl = makeEl("button", "learn more", "");
btnEl.id = "more-btn";

articleEl.append(ulEl.btnEl);
sectionEl.after(articleEl);

// const h3El = document.createElement("h3");
// h3El.textContent = "About me";
// h3El.className = "a__title";
// articleEl.append(h3El);
// document.body.append(articleEl);
