import express from 'express'
import bodyParser from "body-parser"
const app=express()
const port=3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));
app.listen(port,() => {
    console.log(`Server running on port ${port}`)
})

app.get('/',(req,res)=>{
    res.render('index.ejs', {todayitems})
})

app.get('/work',(req,res)=>{
    res.render('work.ejs', {workitems})
})

app.get('/personal',(req,res)=>{
    res.render('personal.ejs', {personalitems})
})

app.post('/',(req,res) => {
    console.log(req.params)
    console.log(req.body)
    if (req.body.todoitem) {
        todayitems.push({
            name: req.body.todoitem,
            checked: ""
        })
    }
    else {
        let compName=req.body.changedItem
        //console.log('CHANGEITEM')
        //console.log(compName)
        const idx=todayitems.findIndex(item => item.name==compName)
        if (todayitems[idx].checked=="checked") todayitems[idx].checked=""
        else todayitems[idx].checked="checked"
    }
    res.render('index.ejs',{todayitems})
})

app.post('/work',(req,res) => {
    console.log(req.params)
    console.log(req.body)
    if (req.body.todoitem) {
        workitems.push({
            name: req.body.todoitem,
            checked: ""
        })
    }
    else {
        let compName=req.body.changedItem
        //console.log('CHANGEITEM')
        //console.log(compName)
        const idx=workitems.findIndex(item => item.name==compName)
        if (workitems[idx].checked=="checked") workitems[idx].checked=""
        else workitems[idx].checked="checked"
    }
    res.render('work.ejs',{workitems})
})

app.post('/personal',(req,res) => {
    console.log(req.params)
    console.log(req.body)
    if (req.body.todoitem) {
        personalitems.push({
            name: req.body.todoitem,
            checked: ""
        })
    }
    else {
        let compName=req.body.changedItem
        //console.log('CHANGEITEM')
        //console.log(compName)
        const idx=personalitems.findIndex(item => item.name==compName)
        if (personalitems[idx].checked=="checked") personalitems[idx].checked=""
        else personalitems[idx].checked="checked"
    }
    res.render('personal.ejs',{personalitems})
})

let todayitems=[
    {
        name: "todo1",
        checked: ""
    },
    {
        name: "todo2",
        checked: "checked"
    }
]

let workitems=[]
let personalitems=[]