require('dotenv').config();
const express = require('express');
const app = express();

// middleware

// Routes
app.get('/', (req, res) => {
  res.json({ message: "MERN app API Home"});
});

// Controllers

app.listen(process.env.PORT || 3000, () => 
  console.log(`🎧 You're listening to the smooth sounds of Port ${process.env.PORT || 3000}`)
);