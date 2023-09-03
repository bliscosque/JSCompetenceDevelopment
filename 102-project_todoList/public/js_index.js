let cbs=document.querySelectorAll(".ckbox")
cbs.forEach(cb => {
    console.log(cb.name)
    cb.addEventListener('click', (ev) => {
        console.log(ev)
    })
})