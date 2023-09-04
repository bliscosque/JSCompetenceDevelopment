let cbs=document.querySelectorAll(".ckbox")
cbs.forEach(cb => {
    console.log(cb.name)
    cb.addEventListener('click', (ev) => {
        console.log(ev)
        console.log(ev.target.name)
        post("/personal", ev.target.name);
    })
})

let navItems=document.querySelectorAll('.nav-link')
navItems.forEach(navItem => {
    navItem.classList.remove('active')
}) 
document.querySelector('#personal').classList.add('active')

window.post = function(url, taskName) {
    console.log(taskName)
    const form = document.createElement('form');
    form.method = 'post';
    form.action = url;

    const hiddenField = document.createElement('input');
    hiddenField.type = 'hidden';
    hiddenField.name = 'changedItem';
    hiddenField.value = taskName;

    form.appendChild(hiddenField);

    document.body.appendChild(form);
    form.submit();
  }
  
  