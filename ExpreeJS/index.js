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

app.get("/", (req, res) => {

  res.sendFile( path.join(import.meta.dirname,"practice.html"));
});


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
