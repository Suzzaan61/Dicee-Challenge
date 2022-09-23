let randNumber1 = Math.floor((Math.random() * 6) + 1);
let randNumber2 = Math.floor((Math.random() * 6) + 1);

let randNumberImg1 = document.getElementById("img1");
let randNumberImg2 = document.getElementById("img2");

let randTextImg1 = document.getElementById("topic");

randNumberImg1.setAttribute("src", "images/dice" + randNumber1 + ".png");
randNumberImg2.setAttribute("src", "images/dice" + randNumber2 + ".png");


if (randNumber1 > randNumber2) {
    randTextImg1.innerHTML = "👏🏻Player1 Wins";
} else {
    if (randNumber2 > randNumber1) {
        randTextImg1.innerHTML = "Player2 Wins👏🏻";
    } else {
        if (randNumber2 = randNumber1) {
            randTextImg1.innerHTML = "🙌🏻Draw!🙌🏻";
        } else {

        }
    }
}



