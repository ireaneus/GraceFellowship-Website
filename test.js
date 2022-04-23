//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const _ = require("lodash");
const jsmediatags = require('jsmediatags');


const fs = require('fs');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Mongoose connect, schema, and model section
mongoose.connect("mongodb+srv://bwDave:TheRockCriesOut5@sermons0.ikt0p.mongodb.net/sermonsDB");


const sermonsSchema = new mongoose.Schema({
  title: String,
  artist: String,
  album: String,
  year: {
    type: String,
    required: false
  },
  comment: {
    type: String,
    required: false
  },
  name: String,
  path: String
});

const Sermon = mongoose.model("Sermon", sermonsSchema);


const testFolder = 'sermons/worship/';

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {

new jsmediatags.Reader(testFolder + file)
.setTagsToRead(["title", "comment", "artist", "album", "year"])  
.read({
    onSuccess: (tag) => {
      var tags = tag.tags;
      console.log(tags.title + " - " + tags.artist + " - " + tags.album + " - " + tags.year + " - " + file + " - " + testFolder);

    const sermon = new Sermon({
      title: tags.title,
      artist: tags.artist,
      album: tags.album,
      year: tags.year,
//      comment: tags.comment.text,
      name: file,
      path: testFolder
    });

    sermon.save();

  },
  onError: function(error) {
    console.log(':(', error.type, error.info, file);
  }
});
  });
});



let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running on port 3000");
});