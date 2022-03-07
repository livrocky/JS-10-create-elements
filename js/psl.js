const bodyEl = document.querySelector("body");
bodyEl.style.backgroundColor = "cyan";

//main block//

const mainEl = document.createElement("main");
mainEl.style.backgroundColor = "white";
mainEl.style.width = "70%";
mainEl.style.margin = "8rem auto";
mainEl.style.padding = "2rem";
mainEl.style.borderRadius = "1rem";
mainEl.style.textAlign = "center";

document.body.append(mainEl);

//IMAGE//

const img = document.createElement("img");
img.src = "https://avatarfiles.alphacoders.com/238/238252.jpg";
img.style.width = "10rem";
img.style.borderRadius = "7rem";
img.style.border = "1px solid grey";
img.style.padding = "0.2rem";
img.style.marginTop = "-7rem";
img.style.backgroundColor = "white";

mainEl.append(img);

//TEXT//

const h1El = document.createElement("h1");
h1El.textContent = "Mažas Cucikas";
const h2El = document.createElement("h2");
h2El.textContent = "Labai mielas ir gauruotas";
h2El.style.color = "grey";
h2El.style.fontWeight = "normal";
const h2El2 = document.createElement("h2");
h2El2.textContent = "Kaunas, Lietuva";
h2El2.style.color = "grey";
h2El2.style.fontWeight = "normal";

mainEl.append(h1El, h2El, h2El2);
