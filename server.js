const https = require("https");
const express = require('express');
const cors = require("cors");

const app = express();
var port = 8081;

app.use('/', express.static('./public/'));
app.use(cors());

app.get('/drinkbuddy/:name', function(req, res){
    url = "https://127.0.0.1:8081";

    var resbody = `{"hello world",${req.params.name}"}`;
    
    console.log(url);
    res.json(resbody);
//    https.get(url, res=>{
//        res.setEncoding("UTF-8");
//        
//        res.on("data", data => {
//           resbody += data; 
//        });
//        
//        res.on("end", () => {
//            console.log(resbody);            
//            resbody = JSON.parse(resbody);
//            res.json(resbody);
//            
//            resbody = "";
//            resq = null;
//        });
//    }); 
});

app.listen(port, () =>{ 
    console.log(`listening on port ${port}!`)
});
