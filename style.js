let firstbtn = document.getElementById('1');
let secondbtn = document.getElementById('2');
let thirdbtn = document.getElementById('3');
let fourthbtn = document.getElementById('4');
let fifthbtn = document.getElementById('5');
let sixthbtn = document.getElementById('6');
let seventhbtn = document.getElementById('7');
let eighthbtn = document.getElementById('8');
let ninthbtn = document.getElementById('9');

let userPoint = 0;
let computerPoint = 0;
let userbox = document.getElementById('userpointbox');
let Computerbox = document.getElementById('computerpointbox');

let variableArr = [firstbtn, secondbtn, thirdbtn, fourthbtn, fifthbtn, sixthbtn, seventhbtn, eighthbtn, ninthbtn];


function check(button) {
    if (button.innerHTML === 'X' || button.innerHTML === 'O') {
        alert('Position is already taken');
        return;
    }

    button.innerHTML = 'X';

    if (winner()) {
        return;
    }
    setTimeout(function() {
        computerChoice();
        if (winner()) {
            return;
        }
    }, 500);

}

firstbtn.addEventListener('click', function () {
    check(firstbtn);
})
secondbtn.addEventListener('click', function () {
    check(secondbtn);
})
thirdbtn.addEventListener('click', function () {
    check(thirdbtn);
})

fourthbtn.addEventListener('click', function () {
    check(fourthbtn);
})

fifthbtn.addEventListener('click', function () {
    check(fifthbtn);
})

sixthbtn.addEventListener('click', function () {
    check(sixthbtn);
})

seventhbtn.addEventListener('click', function () {
    check(seventhbtn);
})

eighthbtn.addEventListener('click', function () {
    check(eighthbtn);
})

ninthbtn.addEventListener('click', function () {
    check(ninthbtn);
})

let combinationArr = [
    [firstbtn, secondbtn, thirdbtn],
    [fourthbtn, fifthbtn, sixthbtn],
    [seventhbtn, eighthbtn, ninthbtn],
    [firstbtn, fourthbtn, seventhbtn],
    [secondbtn, fifthbtn, eighthbtn],
    [thirdbtn, sixthbtn, ninthbtn],
    [firstbtn, fifthbtn, ninthbtn],
    [thirdbtn, fifthbtn, seventhbtn]
]


function computerChoice() {

    let logic;
    let movesArr = [];
    for (let i = 0; i < variableArr.length; i++) {
        if (variableArr[i].innerHTML !== 'X' && variableArr[i].innerHTML !== 'O') {
            movesArr.push(variableArr[i]);
        }
    }

    for (logic of combinationArr) {
        if (logic[0].innerHTML === 'X' && logic[1].innerHTML === 'X' && logic[2].innerHTML === ' ') {
            logic[2].innerHTML = 'O';
            return;
        }
        else if (logic[0].innerHTML === 'X' && logic[2].innerHTML === 'X' && logic[1].innerHTML === ' ') {
            logic[1].innerHTML = 'O';
            return;
        }
        else if (logic[1].innerHTML === 'X' && logic[2].innerHTML === 'X'  && logic[0].innerHTML === ' ') {
            logic[0].innerHTML = 'O';
            return;
        }





        else if (logic[0].innerHTML === 'X' && logic[1].innerHTML === '' && logic[2].innerHTML === '') {
            logic[1].innerHTML = 'O';  
            return;
        }
        else if (logic[0].innerHTML === 'X' && logic[1].innerHTML === '' && logic[2].innerHTML === '') {
            logic[2].innerHTML = 'O'; 
            return;
        }
        else if (logic[1].innerHTML === 'X' && logic[0].innerHTML === '' && logic[2].innerHTML === '') {
            logic[0].innerHTML = 'O'; 
            return;
        }
        else if (logic[2].innerHTML === 'X' && logic[1].innerHTML === '' && logic[0].innerHTML === '') {
            logic[1].innerHTML = 'O'; 
            return;
        }

        // if(firstbtn.innerHTML === 'X' && fifthbtn.innerHTML === 'X'){
        //     thirdbtn.innerHTML = 'O';
        //     return;
        // }
        // if(firstbtn.innerHTML === 'X' && fifthbtn.innerHTML === 'X'){
        //     ninthbtn.innerHTML = 'O';
        //     return;
        // }
        // if(firstbtn.innerHTML === 'X' && fifthbtn.innerHTML === 'X'){
        //     seventhbtn.innerHTML = 'O';
        //     return;
        // }
        

        // else if(logic[0].innerHTML === 'X' && logic[1].innerHTML === ' ' && logic[2].innerHTML === ' '){
        //     logic[1].innerHTML = 'O';
        // }
        // else if(logic[0].innerHTML === 'X' && logic[1].innerHTML === '' && logic[2].innerHTML === ''){
        //     logic[2].innerHTML = 'O';
        // }

        // else if(logic[1].innerHTML === 'X' && logic[0].innerHTML === '' && logic[2].innerHTML === ''){
        //     logic[0].innerHTML = 'O';
        // }
        // else if(logic[1].innerHTML === 'X' && logic[1].innerHTML === '' && logic[0].innerHTML === ''){
        //     logic[2].innerHTML = 'O';
        // }

        // else if(logic[2].innerHTML === 'X' && logic[1].innerHTML === '' && logic[0].innerHTML === ''){
        //     logic[1].innerHTML = 'O';
        // }
        // else if(logic[2].innerHTML === 'X' && logic[1].innerHTML === '' && logic[0].innerHTML === ''){
        //     logic[0].innerHTML = 'O';
        // }
    }
    
    if(movesArr.length>0){
        let position = Math.floor(Math.random() * movesArr.length);
        movesArr[position].innerHTML = 'O';
    }  

    if (movesArr.length === 0) {
        alert("Match Draw");
        clearBoard();
        return;
    }
}

function winner() {

    for (let combination of combinationArr) {
        if (combination[0].innerHTML === 'X' && combination[1].innerHTML === 'X' && combination[2].innerHTML === 'X') {
            clearBoard();

            userPoint++;
            userbox.innerHTML = userPoint;
            alert('User Win');

            return true;
        }
        if (combination[0].innerHTML === 'O' && combination[1].innerHTML === 'O' && combination[2].innerHTML === 'O') {
            computerPoint++;
            Computerbox.innerHTML = computerPoint;
            alert('Computer Win');
            clearBoard();

            return true;
        }
    }
    return false;
}

function clearBoard() {
    for (let button of variableArr) {
        button.innerHTML = ' ';
    }
}   