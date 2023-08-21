import express from "express";

const app = express();
const port = 3000;

function logger(req,res,next) {
  console.log("Req method: ",req.method);
  next(); // prox middleware
}

app.use(logger); // usando meu middleware

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
