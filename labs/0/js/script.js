"use strict";

let colorExists = [];
let buttons = [];
const shuffleInterval = 2000;
const defaultFontSize = 16;
const btnWidth = 10;
const btnHeight = 5;
const userText = new User();

class Button {
    constructor(id) {
        this.btn = document.createElement("button");;
        this.btn.id = "btn" + id;
        this.btn.className = "btn";
        this.btn.innerText = id;
        this.btn.style.width = `${btnWidth}em`;
        this.btn.style.height = `${btnHeight}em`;
        this.btn.style.backgroundColor = getColor();
    }
    getButton() {
        return this.btn;
    }
    getRandomPosition() { 
        const maxX = document.getElementById("playground").offsetWidth - btnWidth * defaultFontSize;
        const maxY = document.getElementById("playground").offsetHeight - btnHeight * defaultFontSize;
        let left = Math.floor(Math.random() * maxX);
        let top = Math.floor(Math.random() * maxY);
        return [left, top];
    }
}

class Playground {
    constructor() {
        this.playground = document.createElement("section");
        this.playground.id = "playground";
        this.playground.position = "relative";
    }
    clearPlayground() {
        this.playground.innerHTML = "";
    }
    createPlayground() {
        document.getElementById("quest-and-create").insertAdjacentElement("afterend", playground.playground);
    }
}


const playground = new Playground();
playground.createPlayground();

function getColor() {
    let colors = ["aliceblue", "aqua", "blueviolet", "chartreuse", "coral", "beige", "fuchsia"];
    let index = Math.floor(Math.random() * colors.length);
    while (colorExists.includes(index)) {
        index = Math.floor(Math.random() * colors.length);
    }
    colorExists.push(index);
    return colors[index];
}

function isValidInput(numOfBtns) {
    if (isNaN(numOfBtns) || numOfBtns < 3 || numOfBtns > 7) {
        return false;
    } else {

        return true;
    }

}

function addBtns(numOfBtns) {
    colorExists = [];
    buttons = [];
    playground.clearPlayground();

    for (let i = 0; i < numOfBtns; i++) {
        const btn = new Button(i);
        buttons.push(btn);
        document.getElementById("playground").appendChild(btn.getButton());
    }
}

function shuffle(number) {
    let intervalID = setInterval(()=>{
        buttons.forEach((button) => {
            button.btn.innerText="";
            button.btn.style.position = "absolute";
            let position = button.getRandomPosition();
            let left = position[0];
            let top = position[1];
            button.btn.style.left = left + "px";
            button.btn.style.top = top + "px";
        });
    }, shuffleInterval);
    setTimeout(() => clearInterval(intervalID), shuffleInterval * number);
}

function go() {
    let numOfBtns = document.getElementById("number").value;
    let result;
    if (isValidInput(numOfBtns)) {
        let number = parseInt(numOfBtns);
        addBtns(number);
        result = userText.getSuccessText();
        setTimeout(shuffle(number), number*1000);
    } else {
        result = userText.getInvalidText();
        alert(result);
    }
    console.log(result);
}

document.getElementById("go").onclick = go;
