const { app, BrowserWindow } = require('electron');

let mainWindow = null;

app.allowRendererProcessReuse = true;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.loadFile(__dirname + '/index.html');
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });
    mainWindow.on('close', () => {
        mainWindow = null;
    });
})