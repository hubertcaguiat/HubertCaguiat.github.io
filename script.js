let text = document.getElementById("text");
let jungle1 = document.getElementById("jungle1");
let jungle2 = document.getElementById("jungle2");
let jungle3 = document.getElementById("jungle3");
let jungle4 = document.getElementById("jungle4");
let jungle5 = document.getElementById("jungle5");

let background = document.getElementById("background");
let mountains = document.getElementById("mountains");
let man_on_mountain = document.getElementById("man_on_mountain");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  text.style.marginTop = value * 2.5 + "px";
  man_on_mountain.style.left = value * -2.5 + "px";
  jungle5.style.left = value * 0.3 + "px";
  jungle4.style.left = value * -0.3 + "px";
  jungle3.style.left = value * 1 + "px";
  jungle2.style.left = value * -1 + "px";
  jungle1.style.left = value * -4 + "px";
});

