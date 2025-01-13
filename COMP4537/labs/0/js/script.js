"use strict";

let colorExists = [];
let buttons = [];
const shuffleInterval = 2000;
const defaultWaitTime = 1000;
const defaultFontSize = 16;
const btnWidth = 10;
const btnHeight = 5;

function Message() {
    this.invalidText = "Please enter a number between 3 and 7";
    this.congratsText = "Excellent memory!";
    this.gameOverText = "Wrong order!";
    this.successText = "Buttons created!";
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


class Button {
    constructor(id) {
        this.btn = document.createElement("button");;
        this.btn.id = id;
        this.btn.className = "btn";
        this.btn.innerText = id;
        this.btn.style.width = `${btnWidth}em`;
        this.btn.style.height = `${btnHeight}em`;
        this.btn.style.backgroundColor = this.getColor();
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
    revealId() {
        return this.btn.id;
    }
    getColor() {
        let colors = ["aliceblue", "aqua", "blueviolet", "chartreuse", "coral", "beige", "fuchsia"];
        let index = Math.floor(Math.random() * colors.length);
        while (colorExists.includes(index)) {
            index = Math.floor(Math.random() * colors.length);
        }
        colorExists.push(index);
        return colors[index];
    }

}


function enableClikableButtons() {
    let order = 0;
    buttons.forEach((button) => {
        button.btn.onclick = function() {
            if (order == button.btn.id - 1) {
                order++;
                button.btn.innerText = button.revealId();
                console.log(order);
                if (order == buttons.length) {
                    alert(this.user.getCongratsText());
                    colorExists = [];
                    buttons = [];
                    playground.clearPlayground();
                }
            } else {
                buttons.forEach((button) => {
                    button.btn.innerText = button.revealId();
                });
                setTimeout(() => {
                    alert(this.user.getGameOverText());
                    colorExists = [];
                    buttons = [];
                    playground.clearPlayground();
                }
                , defaultWaitTime);
            }

        }
    });

}

class Game{
    constructor(colorExists, buttons, playground, user) {
        this.colorExists = colorExists;
        this.buttons = buttons;
        this.playground = playground;
        this.user = user;
    }

    go() {
        let numOfBtns = document.getElementById("number").value;
        let result;
        if (this.isValidInput(numOfBtns)) {
            let number = parseInt(numOfBtns);
            this.addBtns(number);
            result = this.user.getSuccessText();
            setTimeout(()=>{this.shuffle(number)}, number * defaultWaitTime);
            setTimeout(()=> {this.enableClikableButtons()}, defaultWaitTime);
    
        } else {
            result = this.user.getInvalidText();
            alert(result);
        }
        console.log(result);
    }

    isValidInput(numOfBtns) {
        if (isNaN(numOfBtns) || numOfBtns < 3 || numOfBtns > 7) {
            return false;
        } else {
    
            return true;
        }
    
    }

    addBtns(numOfBtns) {
        this.colorExists = [];
        this.buttons = [];
        this.playground.clearPlayground();
    
        for (let i = 0; i < numOfBtns; i++) {
            const btn = new Button(i + 1);
            this.buttons.push(btn);
            document.getElementById("playground").appendChild(btn.getButton());
        }
    }

    shuffle(number) {
        let intervalID = setInterval(()=>{
            this.buttons.forEach((button) => {
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


    enableClikableButtons() {
        let order = 0;
        this.buttons.forEach((button) => {
            button.btn.onclick = () => {
                if (order == button.btn.id - 1) {
                    order++;
                    button.btn.innerText = button.revealId();
                    console.log(order);
                    if (order == this.buttons.length) {
                        alert(this.user.getCongratsText());
                        this.colorExists = [];
                        this.buttons = [];
                        this.playground.clearPlayground();
                    }
                } else {
                    this.buttons.forEach((button) => {
                        button.btn.innerText = button.revealId();
                    });
                    setTimeout(() => {
                        alert(this.user.getGameOverText());
                        this.colorExists = [];
                        this.buttons = [];
                        this.playground.clearPlayground();
                    }, defaultWaitTime);
                }
            };
        });
    }
}

const playground = new Playground();
const message = new Message();
const user = new User( message);

const game = new Game(colorExists, buttons, playground, user);
game.playground.createPlayground();
document.getElementById("go").onclick = game.go.bind(game);
