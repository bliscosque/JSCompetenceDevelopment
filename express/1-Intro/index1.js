import express from 'express'
const app=express()
const port=8080
app.listen(port,() => {
    console.log(`Server running on port ${port}`)
});
app.get('/', (req,res) => {
    res.send("HELLO WORLD")
})
app.get('/about', (req,res) => {
    res.send("<h1>About me </h1>")
})
app.get('/contact', (req,res) => {
    res.send("<h1>Do NOT call me</h1>")
})