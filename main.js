const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 350,
      height: 600,

      resizable: false,
      titleBarStyle: 'hidden',
      titleBarOverlay: {
        color: '#2f3241',
        symbolColor: '#74b1be'
      },
    frame: true, 
    transparent: true, 
    })


    win.setBackgroundColor('#00000000');
    win.loadURL(' http://localhost:5000/')
  }



  app.whenReady().then(() => {
    createWindow()
  })