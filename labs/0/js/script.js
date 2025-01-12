"use strict";

let colorExists = [];
let buttons = [];
const userText = new User();

class Button {
    constructor(id) {
        this.btn = document.createElement("button");;
        this.btn.id = "btn" + id;
        this.btn.innerText = id;
        this.btn.style.width = "10em";
        this.btn.style.height = "5em";
        this.btn.style.backgroundColor = getColor();
    }
    getButton() {
        return this.btn;
    }
}

class Playground {
    constructor() {
        this.playground = document.createElement("section");
        this.playground.id = "playground";
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

function go() {
    let numOfBtns = document.getElementById("number").value;
    let result;
    if (isValidInput(numOfBtns)) {
        addBtns(parseInt(numOfBtns));
        result = userText.getSuccessText();
    } else {
        result = userText.getInvalidText();
        alert(result);
    }
    console.log(result);
}

document.getElementById("go").onclick = go;
