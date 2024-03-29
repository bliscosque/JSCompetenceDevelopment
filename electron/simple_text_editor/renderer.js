const {ipcRenderer}=require("electron")
const path=require("path")

window.addEventListener("DOMContentLoaded",() => {
    const el={
        documentName: document.getElementById("documentName"),
        openDocumentBtn: document.getElementById("openDocumentBtn"),
        createDocumentBtn: document.getElementById("createDocumentBtn"),
        fileTextarea: document.getElementById("fileTextarea"),
    };
    const handleDocumentChange = (filePath, content="") => {
        el.documentName.innerHTML=path.parse(filePath).base;
        el.fileTextarea.removeAttribute("disabled");
        el.fileTextarea.value=content;
        el.fileTextarea.focus()
    };

    el.createDocumentBtn.addEventListener("click", () => {
        ipcRenderer.send("create-document-triggered");
    });
    
    el.openDocumentBtn.addEventListener("click", () => {
        ipcRenderer.send("open-document-triggered");
    });

    el.fileTextarea.addEventListener("input", (e) => {
        ipcRenderer.send("file-content-updated", e.target.value);
    })

    ipcRenderer.on("document-opened",  (_,{filePath,content}) => {
        handleDocumentChange(filePath,content);
    })

    ipcRenderer.on("document-created",(_,filePath) => {
        handleDocumentChange(filePath);
    });

});