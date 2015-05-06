var app = require('app');  // Module to control application life.
var BrowserWindow =  require('browser-window');  // Module to create native browser window.

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.openDevTools();

    // and load the index.html of the app.
    mainWindow.loadUrl(
        'file://'
        + __dirname
        + '/index.html'
    );
});

