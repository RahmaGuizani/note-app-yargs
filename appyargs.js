const fs = require("fs");
const os = require("os");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./note.js");
var argv = yargs
  .command("add", "adding new note", {
    title: {
      describe: "title of note",
      demandOption: true,
      alias: "t"
    },
    body: {
      describe: "title of note",
      demandOption: true,
      alias: "b"
    }
  })
  .command("remove", "remove new note", {
    title: {
      describe: "title of note",
      demandOption: true,
      alias: "t"
    }
  })
  .command("read", "read  note", {
    title: {
      describe: "title of note",
      demandOption: true,
      alias: "t"
    }
  })
  .help().argv;

var command = argv._[0];
console.log("commande:", command);
if (command == "add") {
  notes.addNotes(argv.title, argv.body);
} else if (command == "remove") {
  notes.removeNotes(argv.title);
} else if (command === "read") {
  notes.readNotes(argv.title);
} else if (command == "list") {
  notes.getAll();
} else {
  console.log("Invalid command ");
}
