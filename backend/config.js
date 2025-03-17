// backend/config.js
require("dotenv").config({ path: "../.env" });

module.exports = {
  port: process.env.PORT || 3000,
  spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
  spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
};
