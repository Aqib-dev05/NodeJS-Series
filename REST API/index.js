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

app.post("/users", (req, res) => {
  const { name, age, salary } = req.body;

  fs.readFile("users.json", "utf-8", (err, data) => {
    if (err) {
      console.log("Error in reading file", err);
      res.status(500).json({ message: "Internal Pointer Variable!!!" });
      return;
    }

    const users = JSON.parse(data);
    const newUser = {
      id: users.length + 1 + 1,
      name,
      age,
      salary,
    };
    users.push(newUser);

    fs.writeFile("users.json", JSON.stringify(users, null, 2), (err) => {
      if (err) {
        console.error("Error writing file:", err);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }
      res.json({ message: "User Updated Successfully!" });
    });
  });
});

app.patch("/users/:id/edit", (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, age, salary } = req.body;

  fs.readFile("users.json", "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    const users = JSON.parse(data);
    const userIndex = users.findIndex((user) => user.id === userId);

    if (userIndex === -1) {
      return res.status(404).json({ message: "User not found" });
    }

    users[userIndex] = { ...users[userIndex], name, age, salary };

    fs.writeFile("users.json", JSON.stringify(users, null, 2), (err) => {
      if (err) {
        console.error("Error writing file:", err);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }
      res.json({ message: "User Updated Successfully!" });
    });
  });
});

app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  fs.readFile("users.json", "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    let users = JSON.parse(data);
    users = users.filter((user) => user.id !== userId);
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
