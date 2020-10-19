const express = require('express')
const {connection}=require("./Data-Base/database")
const PORT = 3000
const app = express()
const client=require("./ServerRoutes/Client")
const Freelancer=require("./ServerRoutes/FreeLancer")

app.use(express.json()); 
app.use(express.static(__dirname + '/client/dist'));

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });

app.post('/', function (req, res) { 
    console.log(req.body.name) 
    res.end(); 
});

app.get("*",(req,res)=>{
res.sendFile(__dirname +"/client/dist/index.html")
})

app.listen(PORT, function(err){ 
    if (err) console.log(err); 
    console.log("Server listening on PORT", PORT); 
}); 