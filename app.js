// const fs = require('fs')
// const chalk = require('chalk')
const yargs = require('yargs')
// const validator = require('validator')

const notes = require('./notes')


// add a note 

yargs.command({
    command: 'add',
    describe: 'adding a new note ',
    builder: {
        title: {
            describe: 'new builder ',
            demandOption: true,
            type: String
        },
        body: {
            desceibe: 'the body ',
            demandOption: true,
            type: Number
        }
    },
    handler(argv) { notes.addNotes(argv.title, argv.body) }
})


// remove a note 
yargs.command({
    command: 'remove',
    describe: 'removing a new note ',
    builder: {
        title: {
            describe: 'new builder ',
            demandOption: true,
            type: String
        }
    },
    handler(argv) { notes.removeNote(argv.title) }
})


// list all notes 
yargs.command({
    command: 'list',
    describe: 'removing a new note ',
    handler(argv) { notes.listNotes() }
})


// read a note 

yargs.command({
    command: 'readOne',
    describe: 'reading a note ',
    builder: {
        title: {
            describe: 'new builder ',
            demandOption: true,
            type: String
        }
    },
    handler(argv) { notes.readOneNote(argv.title) }
})

// read all notes 

yargs.command({
    command: 'read',
    describe: 'reading a note ',

    handler(argv) { notes.getAllNotes() }
})

yargs.parse()


