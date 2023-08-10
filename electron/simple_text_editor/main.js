const { BrowserWindow, app, Notification, dialog, ipcMain, Menu } = require("electron")
const path=require("path")
const fs=require("fs");
const { error } = require("console");

let mainWindow;
let openedFilePath;

// try {
//     require("electron-reloader")(module);
//   } catch {}

const createWindow = () => {
    mainWindow=new BrowserWindow({
        width: 900,
        height: 700,
        titleBarStyle: "hiddenInset",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(app.getAppPath(),"renderer.js"),
        }
    })
    //mainWindow.webContents.openDevTools();
    mainWindow.loadFile("index.html")

    
  const menuTemplate = [
    {
      label: "File",
      submenu: [
        {
          label: "Add New File",
          click: () => ipcMain.emit("open-document-triggered"),
        },
        {
          label: "Create New File",
          click: () => ipcMain.emit("create-document-triggered"),
        },
        { type: "separator" },
        {
          label: "Open Recent",
          role: "recentdocuments",
          submenu: [
            {
              label: "Clear Recent",
              role: "clearrecentdocuments",
            },
          ],
        },
        {
          role: "quit",
        },
      ],
    },
    {
      label: "Edit",
      submenu: [
        { role: "undo" },
        { role: "redo" },
        { type: "separator" },
        { role: "cut" },
        { role: "copy" },
        { role: "paste" },
        { role: "pasteAndMatchStyle" },
        { role: "delete" },
        { role: "selectAll" },
        { type: "separator" },
        {
          label: "Speech",
          submenu: [{ role: "startSpeaking" }, { role: "stopSpeaking" }],
        },
      ],
    },
  ];

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
    createWindow();
})

const handleError = () => {
    new Notification({
        title: "Error",
        body:"Sorry, something went wrong :(",
    }).show();
};

const openFile=(filePath) => {
    fs.readFile(filePath,"utf8",(error,content) => {
        if (error) {
            handleError();
        } else {
            app.addRecentDocument(filePath);
            openedFilePath=filePath;
            mainWindow.webContents.send("document-opened",{filePath,content});
        }
    });
};

app.on("open_file",(_,filePath) => {
    openFile(filePath);
});

ipcMain.on("open-document-triggered",() => {
    // console.log("open");
    dialog.showOpenDialog({
        properties: ["openFile"],
        filters: [{name:"text files", extensions: ["txt"]}],
    }).then(({filePaths}) => {
        const filePath=filePaths[0];
        openFile(filePath);
    });
});

ipcMain.on("create-document-triggered",() => {
    dialog.showSaveDialog(mainWindow, {
        filters: [{name:"text files", extensions: ["txt"]}],
    }).then(({filePath}) => {
        fs.writeFile(filePath,"",(error) => {
            if(error) {
                handleError();
            } else {
                app.addRecentDocument(filePath);
                openedFilePath=filePath;
                mainWindow.webContents.send("document-created",filePath);
            }
        });
    });
});

ipcMain.on("file-content-updated",(_,textareaContent) =>{
    fs.writeFile(openedFilePath,textareaContent,(error) => {
        if (error) handleError;
    });
});