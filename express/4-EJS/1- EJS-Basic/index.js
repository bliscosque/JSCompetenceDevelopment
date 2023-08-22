import express from 'express'
const app=express()
const port=8080

app.get('/', (req,res) => {
    const d = new Date()
    let day=d.getDay()
    let dayType="Weekday"
    let advice="let's work!"
    console.log(day)
    if (day==0 || day==6) {
        dayType= "Weekend"
        advice="time 4 fun!"
    }
    res.render('page.ejs',{
        dayT: dayType,
        adv: advice
    })
})

app.listen(port,() => {
    console.log(`Server running on port ${port}`)
});