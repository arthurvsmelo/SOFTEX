class EventListeners {
    update(filename){}
}

class EventManager extends EventListeners {
    constructor() {
        super()
        this.listeners = {}
    }

    subscribe(eventType, listener) {
        this.listeners[`${eventType}`] = listener
    }

    unsubscribe(eventType, listener) {
        for(const event of this.listeners) {
            if(event == eventType) {
                delete this.listeners.event
            }
        }
    }

    notify(eventType, data) {
        for(const event of this.listeners) {
            if(event == eventType) {
                event.update(data)
            }
        }
    }
}

class TextEditor {
    constructor() {
        this.events = new EventManager()
        this.file = new File()
    }

    insertLine(lineNumber, text) {
        this.file.content[lineNumber] = text
    }

    removeLine(lineNumber) {
        this.file.content.splice(lineNumber, 1)
    }
}

class File {
    constructor() {
        this.fileName = 'text.txt'
        this.content = []
    }
}

class openFile {
    update(data) {
        console.log(`Arquivo ${data} aberto!`)
    }

}

class saveFile {
    update(data) {
        console.log(`Arquivo salvo!`)
        console.log('Texto: ')
        for(line in data){
            console.log(line)
        }
    }
}


const textEditor = new TextEditor()
textEditor.events.subscribe('open', new openFile())
textEditor.events.subscribe('save', new saveFile())

textEditor.events.notify('open', textEditor.file.fileName)
textEditor.insertLine(0, 'Hello World')
textEditor.insertLine(1, 'This is an example of text')
textEditor.insertLine(3, 'Some Words')
textEditor.events.notify('save', textEditor.file.content)
