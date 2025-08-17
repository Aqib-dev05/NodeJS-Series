//this not work when we use ESmodule. We have to use alternative method
// console.log(__dirname);
// console.log(__filename);
import express from "express";
import cors from "cors"; // Changed this line
import fs from "fs";
import path from "path";
const app = express();
app.use(cors());
const PORT = 3000; 

    app.use(express.static("public"));

app.get("/", (req, res) => {
  //a single file can also be served as a response but in case of multiple files, We have to created a static folder which holds all static files like html css js and more

  res.sendFile( path.join(import.meta.dirname,"practice.html"));
});
  
  app.get("/login",(req,res)=>{
    //now, pubic folder can be accessed directly
    res.sendFile(path.join(import.meta.dirname,"public","pub.html"));
  })
  app.get("/about/:person",(req,res)=>{
    res.send(`About page is opened for ${req.params.person}`)
    console.log(req.params)
  })

app.get("/api/users", (req, res) => {
    fs.readFile("users.json", "utf-8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            res.status(500).json({ error: "Internal Server Error" });
            return;
        }
        const users = JSON.parse(data);
        res.json(users);
    });
});
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
