const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
      sandbox: false, // fixes require() in preloader
    }
  })

  win.loadFile('index.html')
}

app.on('ready', () => { 
    createWindow()
 });