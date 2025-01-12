function Message() {
    this.invalidText = "Please enter a number between 3 and 7";
    this.congratsText = "Excellent memory!";
    this.gameOverText = "Wrong order!";
    this.successText = "Buttons created!";
}

class User {
    constructor(playground) {
        this.playground = playground;
        this.message = new Message();
    }
    getInvalidText() {
        return this.message.invalidText;
    }
    getCongratsText() {
        return this.message.congratsText;
    }
    getGameOverText() {
        return this.message.gameOverText;
    }
    getSuccessText() {
        return this.message.successText;
    }
}