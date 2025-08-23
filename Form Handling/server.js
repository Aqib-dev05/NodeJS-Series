const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();
const app = express();
const port = 3000;

// Middleware to parse form data. Without it,no data shown in req.body and console undefined
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve static files (like HTML)
app.use(express.static('public'));

// Setup mail transporter (using Gmail example)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,   // put in .env
    pass: process.env.EMAIL_PASS    // app password if using Gmail
  }
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})

// Handle POST request from form
// app.post('/submit', (req, res) => {
//     const formData = req.body;
//     console.log('Form data received:', formData);
    
//     res.json(formData);
// });


app.post("/submit", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // send email
    await transporter.sendMail({
      from: email,
      to:process.env.EMAIL_USER,
      subject: `New message from ${email}`,
      text: message,
    });

    res.json({ success: true, msg: "Email sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, msg: "Failed to send email." });
  }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at ${port}`);

});