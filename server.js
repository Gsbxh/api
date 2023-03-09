var express = require('express');
var app = express();
var axios = require('axios')
const { insta } = require('./apis/ig.js')
const http = require('http');
const port = process.env.PORT || 3000;


app.get("/api/insta", function (req, res)  {
  //console.log("request coming in...");
  try {
  insta(`${req.query.url}`).then(({ creator , url }) => {
                    result = {
                      "status" : "200" ,
                      "creator" : creator,
                      "media" : {
                      "url" : url 
                      }
                    }
                      res.status(200).json( result );
  
                  })
                  } catch {
                  result = {
                      "status" : "200" ,
                      "creator" : "ᴠɪᴘᴇʀ-x",
                      "media" : {
                      "url" : "ʟɪɴᴋ ᴇʀʀᴏʀ" 
                      }
                    }
                      res.status(200).json( result );
                  }
                  
})

 

app.get("/", function (req, res)  {

result = {
                      "status" : "true" ,
                      "creator" : "Viper-X"
                    }
                      res.status(200).json( result );



})



const server = http.createServer(app);
server.listen(port);
