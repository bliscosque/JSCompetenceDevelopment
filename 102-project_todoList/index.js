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