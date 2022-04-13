const sermons = {
    topic: "New Testament",
    path: "sermons/",
    book: [
        { name: "Hebrews", files: ["hebrews_part1.mp3", "hebrews_part2.mp3", "hebrews_part3.mp3"] },
        { name: "1Corinthians", files: ["1cor_part1.mp3", "1cor_part2.mp3", "1cor_part3.mp3"] }
    ]
};

for (let h in sermons) {
    let sermon = sermons[h];
    for (let i in sermon.book) {
        let book = sermon.book[i];
        x += "<h3>" + book.name + "</h3>";
        for (let j in book.files) {
            x += "<a href=" + sermon.path + book.name + "/" + book.files[j] + ">" + book.files[j] + "</a><br>";
        }
    }
};

document.getElementById("topic").innerHTML = sermons.topic;
document.getElementById("book").innerHTML = x;
document.getElementById("path").innerHTML = sermons.path;