let randNumber1 = Math.floor((Math.random() * 6) + 1);

let randNumberImg = document.querySelectorAll("img");

randNumberImg.setAttribute("src", "images/dice" + randNumber1 + ".png");






console.log(randNumber1);
console.log(randNumberImg);