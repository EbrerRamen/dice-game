function randomNumberGenerator() {
    randomNumber = Math.random();
    randomNumber *= 6;
    randomNumber = Math.floor(randomNumber)

    return randomNumber;
}

randomNumber1 = randomNumberGenerator()
randomNumber2 = randomNumberGenerator()

console.log(randomNumber1, randomNumber2)

imgArr = ['./images/dice1.png','./images/dice2.png','./images/dice3.png','./images/dice4.png','./images/dice5.png','./images/dice6.png'];

document.querySelectorAll("img")[0].setAttribute('src', imgArr[randomNumber1]);
document.querySelectorAll("img")[1].setAttribute('src', imgArr[randomNumber2]);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}