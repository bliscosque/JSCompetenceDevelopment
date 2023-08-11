const fs=require('fs')
const YAML=require('yaml')

document.querySelector("#btnLinks").addEventListener("click",() => {
    console.log("links clicked");
    const file=fs.readFileSync('./links.yaml', 'utf-8')
    
    const links=YAML.parse(file);
    
    const tLinks=document.querySelector("#tLinks")
    console.log(links.links.length)

    for (let i=0;i<links.links.length;i++) {
        let tr=tLinks.insertRow()
        
        let td=tr.insertCell()
        td.appendChild(document.createTextNode(`${links.links[i]['category']}`))
        
        td=tr.insertCell()
        td.appendChild(document.createTextNode(`${links.links[i]['description']}`))
        
        td=tr.insertCell()
        td.appendChild(document.createTextNode(`${links.links[i]['link']}`))
    }
});