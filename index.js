const express = require("express");
const app = express();

app.use(express.json());

const user = {
  name: "admin",
  password: "admin",
};

app.post("/", (req, res) => {
  const Name = req.body.name;
  const Password = req.body.password;
  new Promise((resolve, reject) => {
    if (Name === user.name && Password === user.password) {
      resolve("You are successfully logged in");
    } else {
      reject("Login failed");
    }
  })
    .then((response) => res.status(200).json(response))
    .catch((err) => res.status(500).json(err));
});

app.listen(5000, () => console.log("server running"));
