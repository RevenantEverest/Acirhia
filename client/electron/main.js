const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const url = require('url');

//Menus
const mainMenuTemplate = require('./menus/mainMenuTemplate');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1920,
    height: 1080,
    icon: './res/images/wolf.png'
  });

  const startURL = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true

  });
  win.loadURL(startURL);
  // const mainMenu = Menu.buildFromTemplate(mainMenuTemplate.template);
  // Menu.setApplicationMenu(mainMenu);

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if(win == null) {
    createWindow();
  }
})
