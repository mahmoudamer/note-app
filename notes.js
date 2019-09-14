const fs = require('fs')
const chalk = require('chalk')

// add a note 
function addNotes(title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(note => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen.bold('saved from addNote'))
    } else {
        console.log(chalk.bgRed.bold('this note is repeated'))
    }
}


// remove a note 
function removeNote(title) {
    const notes = loadNotes();
    const selectedNote = notes.find(note => note.title === title)
    if (selectedNote == null) {
        console.log(chalk.bgWhite.bold('no note with such title '))
    } else {
        notes.splice(notes.indexOf(selectedNote), 1)
        saveNotes(notes)
    }
}

// load notes from the notes.json file 
function loadNotes() {
    try {
        debugger;
        const binary = fs.readFileSync('notes.json')
        const stringfied = binary.toString();
        return JSON.parse(stringfied)
    } catch (error) {
        return []
    }

}

// save the notes to the notes.json file 
function saveNotes(notes) {
    const notesJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', notesJson)
}

// list notes by title 
function listNotes() {
    const notes = loadNotes()
    console.log(chalk.red.bold('here are your notes :'))
    notes.forEach(el => {
        console.log(el.title)
    });
}

// read only one note by the title 
function readOneNote(title) {
    const notes = loadNotes()
    const oneNote = notes.find(note => note.title === title);
    if (oneNote) {
        console.log(chalk.blue('title : ') + oneNote.title)
        console.log(chalk.green('body : ') + oneNote.body)

    } else {
        console.log(chalk.red('no note found'))
    }
}


// get all notes 
function getAllNotes() {
    const notes = loadNotes();
    notes.forEach(note => console.log(note))
}

module.exports = {
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readOneNote: readOneNote,
    getAllNotes: getAllNotes
}