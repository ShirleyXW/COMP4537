"use strict";
let totalNumberOfNotes = 0;

function Note(id, content) {
    this.id = id;
    this.content = content;
}

class Listener {
    constructor() {
        this.listeners = [];
    }

    addListener(listener) {
        this.listeners.push(listener);
    }

    notify(type, uid, content){ 
        if (type == "store"){
            this.listeners.forEach(listener => {
                listener.store(uid, content);
            });

        } else if (type == "remove"){
            this.listeners.forEach(listener => {
                listener.delete(uid, content);
            });
        }
    }
}

class Notebook {
    constructor() {
        this.notes = {};
    }

    updateTime(){
        let date = new Date();
        let time = date.toLocaleTimeString();
        document.getElementById("stored-time").innerHTML = `Stored at: ${time}`;
    };

    add() {
        return () =>{
            totalNumberOfNotes += 1;
            const textAreaWrapper = new TextAreaWrapper(`${totalNumberOfNotes}`, listener);
            textAreaWrapper.addComponents();
            this.updateTime();
            
        }

    }
    store(uid, content){
        this.notes[uid] = content;
        let jsonNotes = JSON.stringify(this.notes);
        window.localStorage.setItem("notes", jsonNotes);
        this.updateTime();
    }
    delete(uid, content){
        const result = delete this.notes[uid];
        if (result){
            let jsonNotes = JSON.stringify(this.notes);
            window.localStorage.setItem("notes", jsonNotes);
            this.updateTime();
        } else
            console.log(userText.opeartionFail);
    }

    retrieve(){
        const notesFromLocal = JSON.parse(window.localStorage.getItem("notes"));
        let id = 0;
        Object.keys(notesFromLocal).forEach(key => {
            id += 1;
            totalNumberOfNotes += 1;
            this.notes[key] = notesFromLocal[key];
            this.displayNote(key, this.notes[key], id);
        });
        this.updateTime();
    }
    displayNote(uid, content, id){
        const textAreaWrapper = new TextAreaWrapper(id, listener);
        textAreaWrapper.createTextAreaForStoredNote(uid, content);
    }

}

const notebook = new Notebook();
const listener = new Listener();
listener.addListener(notebook);