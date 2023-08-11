// reference: https://github.com/77Z/electron-local-terminal-prototype

const { BrowserWindow, app, ipcMain } = require("electron");
const pty=require("node-pty");
const os=require("os");

let shell=os.platform()=="win32"?"powershell.exe":"bash";

const createWindow=() => {
    const mainWindow=new BrowserWindow({
        width:800,
        height:600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })
    mainWindow.loadFile("index.html")

    const ptyProcess=pty.spawn(shell, [], {
        name: "xterm-color",
        cols: 80,
        rows: 30,
        cwd: process.env.HOME,
        env: process.env,
    })

    ptyProcess.on('data', function(data) {
        mainWindow.webContents.send("terminal.incomingData", data);
    });

    ipcMain.on("terminal.keystroke",(event,key) => {
        ptyProcess.write(key);
    });

}

app.whenReady().then(() => {
    createWindow()
})