import express from "express";
import path from "path";
import cors from "cors";
import fs from "fs";
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
const dirName = import.meta.dirname;

  

app.get("/users", (req, res) => {
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

app.delete("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id, 10); 
    fs.readFile("users.json", "utf-8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            res.status(500).json({ error: "Internal Server Error" });
            return;
        }
        let users = JSON.parse(data);
        users = users.filter(user => user.id !== userId);
        fs.writeFile("users.json", JSON.stringify(users, null, 2), (err) => {
            if (err) {
                console.error("Error writing file:", err);
                res.status(500).json({ error: "Internal Server Error" });
                return;
            }
            res.json({ message: "User deleted successfully" });
        });
      });
});


app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
