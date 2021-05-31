const express = require("express");
const app = express();
const fs = require("fs");

const path = "/Users/eklavya/Desktop/zenclass";
const folderImg =
  "https://cdn.icon-icons.com/icons2/221/PNG/256/apple_25594.png";
const fileImg = "https://img.icons8.com/cotton/2x/update-file.png";
const folders = [];
const files = [];

fs.readdir(path, "utf8", (err, data) => {
  if (err) throw err;
  pathItems(data);
});

const pathItems = (items) => {
  items.forEach((item) =>
    item.match(new RegExp(`^\.[^.]+$`, "ig"))
      ? folders.push(
          `<img src=${folderImg} style='width:50px; height:50px; margin-right:10px;'/> <span style="font-size:20px;">${item}</span> <br />`
        )
      : files.push(
          `<img src=${fileImg} style='width:50px; height:50px; margin-right:10px;'/> <span style="font-size:20px;">${item}</span> <br />`
        )
  );
};

app.get("/", (req, res) => {
  res.send(`${files.join("")} ${folders.join("")}`);
});

app.listen(3000);
