const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Arrays of prefixes and suffixes for usernames
const prefixes = [
    "Alpha", "Zen", "Ruby", "Pixel", "Captain",
    "Luna", "Quantum", "Emerald", "Serenity", "Sushi",
    "Mountain", "Phoenix", "Electric", "Songbird", "Tech",
    "Silver", "Midnight", "Tango", "Cosmic", "Jazz",
    "Velvet", "Neon", "Ghostly", "Ballet", "Delta",
    "Echo", "Solar", "Whispering", "Pirate", "Harmony",
    "Cyber", "Melody", "Quasar", "Crimson", "Enigma",
    "Stardust", "Techno", "Lunar", "Rogue", "Dream"
];

const suffixes = [
    "Wolf", "Master", "Red", "Pirate", "Adventure",
    "Lovegood", "Coder", "Enigma", "Seeker", "Samurai",
    "Mover", "Fire", "Echo", "Soul", "Titan",
    "Shadow", "Mystic", "Tornado", "Crafter", "Journey",
    "Vortex", "Nebula", "Gazer", "Blossom", "Dynamo",
    "Eagle", "Symphony", "Willow", "Pioneer", "Hawk",
    "Scribe", "Mistress", "Quest", "Comet", "Explorer",
    "Strider", "Trance", "Lullaby", "Rider", "Dancer"
];

// Function to generate a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random username
function generateUsername() {
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    let ending = "";

    // Randomly select an ending: "2048", a random number between 2024 and 2048, or an underscore
    const endings = ["2048", String(getRandomInt(2024, 2048)), "_", "_", "_", "_", "_"];

    // Choose a random ending from the array
    ending = endings[Math.floor(Math.random() * endings.length)];

    return `${prefix}${suffix}${ending}`;
}

// Endpoint to generate a specified number of random usernames
app.get('/api/random-usernames', cors(), (req, res) => {
    const count = parseInt(req.query.count) || 1; // Default to 1 if count is not provided or invalid
    const usernames = [];
    
    for (let i = 0; i < count; i++) {
        usernames.push(generateUsername());
    }

    res.json({ usernames });
});

// Enable CORS for all origins
app.use(cors());

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

