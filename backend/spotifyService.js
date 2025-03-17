// backend/spotifyService.js
const axios = require("axios");
require("dotenv").config({ path: "../.env" });

async function getSpotifyToken() {
  try {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
      throw new Error("Missing Spotify Client ID or Secret");
    }

    const authString = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({ grant_type: "client_credentials" }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${authString}`,
        },
      }
    );
    console.log("✅ Spotify Token:", response.data.access_token);
    return response.data.access_token;
  } catch (error) {
    console.error("🚨 Error fetching Spotify token:", error.response?.data || error.message);
    throw error;
  }
}

module.exports = { getSpotifyToken };
