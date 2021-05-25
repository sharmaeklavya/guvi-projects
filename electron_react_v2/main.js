const electron = require("electron");
const { BrowserWindow, app } = electron;
const path = require("path");
const os = require("os");
const { ipcMain } = require("electron");
const dialog = electron.dialog;
const fs = require("fs");

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      worldSafeExecuteJavaScript: true,
      contextIsolation: false,
    },
  });
  win.loadURL("file://" + __dirname + "/index.html");
}

require("electron-reload")(__dirname, {
  electron: path.join(__dirname, "node-modules", "bin", "electron"),
});

app.whenReady().then(createWindow);

ipcMain.on("open-file-dialog", (event) => {
  dialog
    .showOpenDialog(null, options)
    .then((result) => {
      event.sender.send("selected-file", result.filePaths[0]);
    })
    .catch((err) => console.log(err));
});

ipcMain.on("open-folder-dialog", (event) => {
  dialog
    .showOpenDialog(null, {
      title: "Open",
      buttonLabel: "Select Folder",
      properties: ["openDirectory"],
    })
    .then((result) => {
      if (fs.readdirSync(result.filePaths[0]).length === 0) {
        event.sender.send("selected-folder", result.filePaths[0]);
      } else {
        event.sender.send("selected-folder", "Please select an empty folder");
      }
    })
    .catch((err) => console.log(err));
});

let options = {
  title: "Open",
  buttonLabel: "Select File",
  filters: [{ name: "Movies", extensions: ["mp4"] }],
  properties: ["openFile"],
};
