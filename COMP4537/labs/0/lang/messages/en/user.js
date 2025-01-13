class User {
    constructor(message) {
        this.message = message;
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