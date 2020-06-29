function randomNumberGenerator(largest) {

    var randomNumber = Math.random() * (largest - 1) + 1;
    return randomNumber;
}

var randomNum1 = Math.floor(randomNumberGenerator(6));
document.querySelectorAll("img")[0].setAttribute("src", "./images/dice" + String(randomNum1) + ".png");


var randomNum2 = Math.floor(randomNumberGenerator(6));
document.querySelectorAll("img")[1].setAttribute("src", "./images/dice" + String(randomNum2) + ".png");

// console.log(randomNum1, randomNum2);

if (randomNum1 > randomNum2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
}
else if (randomNum1 < randomNum2) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}
else {
    document.querySelector("h1").textContent = "It's a tie!";
}