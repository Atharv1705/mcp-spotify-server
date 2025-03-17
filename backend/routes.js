// backend/routes.js
const express = require("express");
const axios = require("axios");
const { getSpotifyToken } = require("./spotifyService");

const router = express.Router();

// Test route for API
router.get("/", (req, res) => {
  res.send("MCP Spotify API is running!");
});

// Route to fetch user playlists
router.get("/playlists", async (req, res) => {
  try {
    const token = await getSpotifyToken();
    const response = await axios.get("https://api.spotify.com/v1/me/playlists", {
      headers: { Authorization: `Bearer ${token}` },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch playlists", details: error.message });
  }
});

// Route to search for tracks
router.get("/search", async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json({ error: "Search query is required" });
  try {
    const token = await getSpotifyToken();
    const response = await axios.get(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to search tracks", details: error.message });
  }
});

module.exports = router;
