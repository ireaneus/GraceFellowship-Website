//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const _ = require("lodash");
const jsmediatags = require('jsmediatags');

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
  year: Number,
  comment: String
});

const Sermon = mongoose.model("Sermon", sermonsSchema);


const booksSchema = new mongoose.Schema({
  _id: Number,
  topic: String,
  book: String,
  path: String
});

const Book = mongoose.model("Book", booksSchema);


jsmediatags.read("sermons/1cor/1corinthians-part4.mp3", {
  onSuccess: function(tag) {
    var tags = tag.tags;
    console.log(tags.title + " - " + tags.artist + " - " + tags.album + " - " + tags.year + " - " + tags.comment);

    const sermon = new Sermon({
      title: tags.title,
      artist: tags.artist,
      album: tags.album,
      year: tags.year,
      comment: tags.comment
    });

    sermon.save();

  },
  onError: function(error) {
    console.log(':(', error.type, error.info);
  }
});


let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running on port 3000");
});