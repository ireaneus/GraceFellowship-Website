let x = "";
const sermon = {
    topic: "New Testament",
    path: "sermons/",
    book: [
        { name: "Hebrews", files: ["hebrews_part1.mp3", "hebrews_part2.mp3", "hebrews_part3.mp3"] },
    ]
}

for (let i in sermon.book) {
    x += "<h3>" + sermon.book[i].name + "</h3>";
    for (let j in sermon.book[i].files) {
        x += "<a href=" + sermon.path + sermon.book[i].name + "/" + sermon.book[i].files[j] + ">" + sermon.book[i].files[j] + "</a><br>";
    }
}

// Display data from the object:
// 
// document.getElementById("file").innerHTML = sermon.file;
// document.getElementById("path").innerHTML = sermon.path;

document.getElementById("topic").innerHTML = sermon.topic;
document.getElementById("demo").innerHTML = x;