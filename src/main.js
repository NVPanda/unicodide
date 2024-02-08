const { app, BrowserWindow } = require('electron')
const cm = require('codemirror')

function createWindow() {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')

  const editor = cm.fromTextArea(document.getElementById('editor'), {
    mode: 'text/javascript',
    lineNumbers: true
  })
}

app.on('ready', () => { 
    createWindow()
 });