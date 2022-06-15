let random_number;
let container = document.getElementById('buttons');
let check = true;

function NButtons () {
    let number_of_buttons = document.getElementById("number").value;
    random_number = Math.floor(Math.random() * number_of_buttons) + 1;
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
        if (button.id == random_number) {
            alert('You won!');
        } else {
            alert('You lost!');
        }
    }
}
