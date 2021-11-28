const arr = new Array(212);
arr.fill("coming soon");

const word = document.getElementsByClassName("repeat")[0];
word.innerHTML = arr.join(" ");
word.style.color = "#D3D3D3";
word.style.fontFamily = "Verdana";
word.style.fontSize = "30px";
