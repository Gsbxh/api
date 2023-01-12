var express = require('express');
var app = express();
var axios = require('axios')
const { insta } = require('./apis/ig.js')
const http = require('http');
const port = process.env.PORT || 3000;


app.get("/insta", function (req, res)  {
  console.log("request coming in...");
  insta(`${req.query.url}`).then(({ creator , url }) => {
                    result = {
                      "status" : "true" ,
                      "creator" : creator,
                      "media" : {
                      "url" : url 
                      }
                    }
                      res.status(200).json( result );
  
                  })
})

 

const server = http.createServer(app);
server.listen(port);

