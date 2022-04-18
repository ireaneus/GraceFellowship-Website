//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Mongoose connect, schema, and model section
mongoose.connect("mongodb+srv://bwDave:TheRockCriesOut5@sermons0.ikt0p.mongodb.net/sermonsDB");

const jsmediatags = require("jsmediatags");

jsmediatags.read("sermons/1cor/1corinthians-part3.mp3", {
  onSuccess: function(tag) {
    var tags = tag.tags;
    console.log(tags.title + " - " + tags.artist + " - " + tags.album + " - " + tags.year + " - " + tags.comment.text);
  }
});

const sermonsSchema = new mongoose.Schema({
    title: tags.title,
    artist: tags.ara

})


let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running on port 3000");
});