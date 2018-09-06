const fs = require("fs");
var addNotes = (title, body) => {
  let notes = [];
  let note = {
    title,
    body
  };

  try {
    let notestr = fs.readFileSync("notes.json");
    notes = JSON.parse(notestr);
  } catch (e) {}

  let filterNotes = notes.filter(note => note.title == title);

  if (filterNotes.length == 0) {
    notes.push(note);
    fs.writeFileSync("notes.json", JSON.stringify(notes));
  } else {
    console.log("note not existe");
  }
};
var removeNotes = title => {
  try {
    let notestr = fs.readFileSync("notes.json");
    notes = JSON.parse(notestr);
  } catch (e) {}

  let filterNotes = notes.filter(note => note.title != title);

  fs.writeFileSync("notes.json", JSON.stringify(filterNotes));
};
var readNotes = title => {
  try {
    let notestr = fs.readFileSync("notes.json");
    notes = JSON.parse(notestr);
  } catch (e) {}

  let note = notes.filter(note => note.title === title);
  console.log(note);
};
var getAll = () => {
  try {
    let notestr = fs.readFileSync("notes.json");
    notes = JSON.parse(notestr);
  } catch (e) {}
  let note = notes.map((x, i) => {
    console.log("parinting " + i + "note(s)");
    console.log("title :" + x.title);
    console.log("body :" + x.body);
  });
};
module.exports = {
  addNotes,
  removeNotes,
  readNotes,
  getAll
};
