const express = require("express")
const path = require("path")
const app = express()

//app.use(express.static(path.join(__dirname, "Public")))

app.get("/", async function(req, res){
    console.log(req.ip)
    res.sendFile(__dirname+"/Public/index.html")
})

app.listen(3000)
console.log("Port 3000")