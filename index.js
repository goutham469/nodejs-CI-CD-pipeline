const express = require("express")
require("dotenv").config()
const CORS = require("cors")
const app = express()
app.use(CORS())

app.get("/", (req,res) => res.send("Hello man !"));

const {PORT} = process.env()
app.listen(4000, ()=> console.log("running on PORT ", PORT))