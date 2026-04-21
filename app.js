const express = require("express")
const CORS = require("cors")
const app = express()
app.use(CORS())

app.get("/", (req,res) => res.send("Hello man, i am from space !"));

app.get("/add", (req,res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.send(`the sum of ${a} and ${b} is ${sum}`);
})

app.get("/subtract", (req,res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const difference = a - b;
    res.send(`the difference of ${a} and ${b} is ${difference}`);
})

app.get("/multiply", (req,res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const product = a * b;
    res.send(`the product of ${a} and ${b} is ${product}`);
})

app.get("/divide", (req,res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    if (b === 0) {
        res.send("Error: Division by zero is not allowed.");
    } else {
        const quotient = a / b;
        res.send(`the quotient of ${a} and ${b} is ${quotient}`);
    }
})

module.exports = app;