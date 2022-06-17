let container = document.getElementById('buttons');
let randomNumber;

function getNumberOfButtons() {
    return document.getElementById("number").value;
}

function generateRandomNumber() {
    return Math.floor(Math.random() * getNumberOfButtons()) + 1;
}

function generateButtons() {
    randomNumber = generateRandomNumber();
    for (let i = 1; i <= getNumberOfButtons(); ++i) {
        createButton(i);
    }
}

function createButton(i) {
    var button = document.createElement('button');
    button.innerText = "Choose me!";
    button.id = i;
    button.className = 'm-1 btn btn-primary btn-lg';
    container.appendChild(button);
    button.onclick = function checkWinnerButton() {
        if (button.id == randomNumber) {
            alert('You won!');
            location.reload();
        } else {
            alert('You lost!');
            location.reload();
        }
    }
}
