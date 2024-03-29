const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

// List of D&D classes
const dndClasses = [
  "Barbarian",
  "Bard",
  "Cleric",
  "Druid",
  "Fighter",
  "Monk",
  "Paladin",
  "Ranger",
  "Rogue",
  "Sorcerer",
  "Warlock",
  "Wizard",
  "Artificer",
  "Blood Hunter"
];


//Route to get a random D&D class
app.get('/random-class', (req, res) => {
  console.log("Fetch Request Received")
  const randomIndex = Math.floor(Math.random() * dndClasses.length);
  const randomClass = dndClasses[randomIndex];
  res.json({ class: randomClass });
  console.log("Job Complete")
});

//returns string
// app.get('/random-class', (req, res) => {
//   const randomIndex = Math.floor(Math.random() * dndClasses.length);
//   const randomClass = dndClasses[randomIndex];
//   res.json(randomClass);
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});