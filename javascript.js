let container = document.getElementById('buttons');

function getNumberOfButtons () {
    return document.getElementById("number").value;
}

function randomNumber() {
    return Math.floor(Math.random() * getNumberOfButtons()) + 1;
}

function NButtons () {
    let number_of_buttons = getNumberOfButtons();
    if (number_of_buttons == '' || number_of_buttons == 0) {
        alert('Please, introduce a number!');
    } else {
        document.getElementById('buttons').innerText = ''
        for (let i = 1; i <= number_of_buttons; ++i) {
            createButton(i);
        }
    }
}

function createButton(i) {
    var button = document.createElement('button');
    button.innerText = "Choose me!";
    button.id = i;
    button.className = 'm-1 btn btn-primary btn-lg';
    container.appendChild(button);
    button.onclick = function checkWinnerButton() {
        if (button.id == randomNumber()) {
            alert('You won!');
            location.reload();
        } else {
            alert('You lost!');
            location.reload();
        }
    }
}
