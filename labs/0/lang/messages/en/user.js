class User {
    constructor(playground) {
        this.playground = playground;
    }
    getInvalidText() {
        return "Please enter a number between 3 and 7";
    }
    getCongratsText() {
        return "Excellent memory!";
    }
    getGameOverText() {
        return "Wrong order!";
    }
    getSuccessText() {
        return "Buttons created!";
    }
}