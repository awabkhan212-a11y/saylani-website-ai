const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Registration endpoint
app.post("/register", (req, res) => {
  const { name, email, phone, program } = req.body;
  console.log("New Registration:", req.body); // Check terminal for submissions
  res.json({ message: "Registration received successfully!" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
