"use strict";
const defaultFreshTime = 2000;
function displayNotes() {
    let notes = JSON.parse(window.localStorage.getItem("notes"));
    document.getElementById("notebook-read").innerHTML = "";
    if (notes) {
        for (let key in notes) {
            let notePad = document.createElement("p");
            notePad.innerHTML = notes[key];
            document.getElementById("notebook-read").appendChild(notePad);
        }
    }
    document.getElementById("updated-time").innerHTML = `Last updated at: ${new Date().toLocaleTimeString()}`;
}
displayNotes();
setInterval(displayNotes, defaultFreshTime);