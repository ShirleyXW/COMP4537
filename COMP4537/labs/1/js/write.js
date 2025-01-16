class TextAreaWrapper {
    constructor(id, listener) {
        this.id = id;
        this.listener = listener;
        this.textAreaWrapper = document.createElement("div");
        this.textAreaWrapper.className = "textArea-wrapper";
        this.textAreaWrapper.id = `textArea-wrapper${id}`;
    }
    getId(){
        return this.id;
    }

    createTextArea(uid = null, content = "") {
        const textArea = document.createElement("textarea");
        const removeButton = document.createElement("button");
    
        const uniqueId = uid || `${Date.now()}`;
    
        textArea.value = content;
    
        textArea.addEventListener("input", () => {
            this.listener.notify("store", uniqueId, textArea.value);
        });
    
        removeButton.onclick = () => {
            totalNumberOfNotes -= 1; 
            this.listener.notify("remove", uniqueId, textArea.value);
            this.textAreaWrapper.remove();
        };
    
        textArea.id = `textArea${this.getId()}`;
        removeButton.id = `removeButton${this.getId()}`;
        textArea.className = "text-area";
        removeButton.className = "remove-button";
    
        removeButton.innerHTML = "Remove";
    
        this.textAreaWrapper.appendChild(textArea);
        this.textAreaWrapper.appendChild(removeButton);
    
        document.getElementById("add").insertAdjacentElement("beforebegin", this.textAreaWrapper);
    }
    
    addComponents() {
        this.createTextArea();
    }
    
    createTextAreaForStoredNote(uid, content) {
        this.createTextArea(uid, content);
    }
    

    remove() {
        this.textAreaWrapper.remove();
    }
}

document.getElementById("add").onclick = notebook.add();
notebook.retrieve();
