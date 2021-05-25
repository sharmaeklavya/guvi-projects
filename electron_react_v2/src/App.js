import React from "react";
import { ipcMain } from "electron";
const { ipcRenderer, remote } = window.require("electron");
const fs = window.require("fs");
const process = window.require("child_process");

let selectedFilePath;
let selectedFolderPath;
let dir = "./hls-media";

function project(e) {
  const button = e.target;
  const form = document.querySelector(".media-form");
  form.classList.toggle("d-none");
  !form.classList.contains("d-none")
    ? (button.innerText = "My Media")
    : (button.innerText = "New Project");
  button.classList.toggle("new-btn");
}

const selectFile = () => {
  ipcRenderer.send("open-file-dialog");
};

const selectFolder = () => {
  ipcRenderer.send("open-folder-dialog");
};

ipcRenderer.on("selected-file", (event, paths) => {
  const filePath = document.querySelector(".file-path");
  selectedFilePath = paths;
  filePath.value = selectedFilePath;
});

ipcRenderer.on("selected-folder", (event, paths) => {
  const folderPath = document.getElementById("folderPath");
  selectedFolderPath = paths;
  if (paths.length > 0) {
    folderPath.value = paths;
  } else {
    folderPath.value = "Please select an empty folder";
  }
});

const convertMedia = (e) => {
  e.preventDefault();
  const form = document.querySelector(".media-form");
  const convertBtn = document.querySelector(".convert-btn");
  const filePath = document.getElementById("filePath");
  const folderPath = document.getElementById("folderPath");

  if (filePath.value === "") {
    filePath.placeholder = "Select a file";
  } else if (folderPath.value === "") {
    folderPath.placeholder = "Select a folder";
  } else if (selectedFolderPath !== "Please select an empty folder") {
    process.exec(
      `ffmpeg -i "${selectedFilePath}" -profile:v baseline -level 3.0 -s 640x360 -start_number 0 -hls_time 10 -hls_list_size 0 -f hls ${selectedFolderPath}/converted_video.m3u8`,
      (err, stdout, stderr) => {
        console.log(stdout);
        if (err !== null) {
          console.log(err);
        }
      }
    );

    convertBtn.innerText = "Conversion successful";
    setTimeout(() => {
      convertBtn.innerText = "Convert Now";
      alert("Conversion is done. Thank you!");
    }, 500);

    form.reset();
  }
};

export default function App() {
  return (
    <div className="container">
      <div className="mt-4">
        <button
          type="button"
          className="new-btn btn btn-primary"
          onClick={project}
        >
          New Project
        </button>
      </div>
      <form
        className="media-form mt-4 text-light d-none"
        onSubmit={convertMedia}
      >
        <div className="form-row d-flex">
          <div className="col-md-8 mb-3">
            <label htmlFor="filePath" className="sr-only py-2">
              Select MP4 file
            </label>
            <input
              type="text"
              readOnly
              className="form-control file-path"
              id="filePath"
              value=""
              placeholder="Fake-path/home-directory/file.mp4"
              onChange={selectedFilePath}
              required
            />
          </div>
          <div className="col-md-4 mt-3">
            <button
              type="button"
              className="btn btn-warning mx-4 mt-4"
              onClick={selectFile}
            >
              Select File
            </button>
          </div>
        </div>
        <div className="form-row d-flex">
          <div className="col-md-8 mb-3">
            <label htmlFor="folderPath" className="sr-only py-2">
              Choose Folder to store the converted media
            </label>
            <input
              type="text"
              readOnly
              className="form-control folder-path"
              id="folderPath"
              value=""
              placeholder="Fake-path/home-directory"
              onChange={selectedFolderPath}
              required
            />
          </div>
          <div className="col-md-4 mt-3">
            <button
              type="button"
              className="btn btn-warning mx-4 mt-4"
              onClick={selectFolder}
            >
              Select Folder
            </button>
          </div>
        </div>
        <div className="col-md-10">
          <label htmlFor="inputFormat" className="py-2 mt-1">
            Choose File Format
          </label>
          <select id="inputFormat" className="form-control">
            <option defaultValue disabled>
              File Format
            </option>
            <option>HLS</option>
          </select>
        </div>

        <div className="text-center mt-4">
          <button type="submit" className="btn btn-success convert-btn">
            Convert Now
          </button>
        </div>
      </form>
    </div>
  );
}
