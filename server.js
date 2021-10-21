import express, { static } from "express";
const app = express();
import { join } from "path";

//set the view engine to PUG
app.set("views", join(__dirname,"views"));
app.set("view engine", "pug");

app.use(static("./assets"));

//basic route
app.get("/", (req,res, next) => {
  //  console.log(users);
    res.render("layout")
});

//add the manifest
app.get("/manifest.json", function(req, res){
    //send the correct headers
    res.header("Content-Type", "text/cache-manifest");
    //console.log(path.join(__dirname,"manifest.json"));
    //send the manifest file
    //to be parsed bt express
    res.sendFile(join(__dirname,"manifest.json"));
  });

//add the service worker
  app.get("/sw.js", function(req, res){
    //send the correct headers
    res.header("Content-Type", "text/javascript");
    
    res.sendFile(join(__dirname,"sw.js"));
  });

  app.get("/loader.js", function(req, res){
    //send the correct headers
    res.header("Content-Type", "text/javascript");
    
    res.sendFile(join(__dirname,"loader.js"));
  });

  app.get("/three.js", function(req, res){
    //send the correct headers
    res.header("Content-Type", "text/javascript");
    
    res.sendFile(join(__dirname,"three.js"));
  });

app.listen(3000, ()=>{
    console.log("server running @ localhost:3000");
});
