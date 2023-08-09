const { BrowserWindow, app } = require("electron")
const path=require("path")

try {
    require("electron-reloader")(module);
  } catch {}

const createWindow = () => {
    const mainWindow=new BrowserWindow({
        width: 900,
        height: 700,
        titleBarStyle: "hiddenInset",
        webPreferences: {
            preload: path.join(app.getAppPath(),"renderer.js"),
        }
    })
    mainWindow.webContents.openDevTools();
    mainWindow.loadFile("index.html")
}

app.whenReady().then(() => {
    createWindow();
})