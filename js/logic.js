function flipCoin(blah) {
    //create a variable and call it an element
    let bucket = document.getElementById('choice');
    //set the variable
    bucket.innerText = "Hello, world!";

    console.log("Hello, world!");

}
function flipCoin(x) {

    let pick = x;

    let result = document.getElementById('flip');
    let choice = document.getElementById('choice');
    let game = document.getElementById('result');

    let randNum = Math.ceil(Math.random() * 2);

    let face;

    if (randNum == 1) {
        face = "Heads";
    } else {
        face = "Tails";
    }

    let status;
    if (face == choice) {
        status = "Win";
    } else {
        status = "Loss";
    }

    result.innerText = face;
    choice.innerText = pick;
    result.innerText = status;

    console.log(randNum);

}