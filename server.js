const express = require("express")
const path = require("path")
const app = express()

let port = process.env.PORT || 3000
//app.use(express.static(path.join(__dirname, "Public")))

app.get("/", async function(req, res){
    console.log(req.ip)
    res.sendFile(__dirname+"/Public/index.html")
})

app.listen(port)
console.log("Port 3000")
