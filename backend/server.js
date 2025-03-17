// backend/server.js
// This file sets up the Express backend and integrates the Next.js frontend.

const path = require("path");
const fs = require("fs");

// Load environment variables from the project root's .env file
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const express = require("express");
const next = require("next");
const routes = require("./routes");
const { getSpotifyToken } = require("./spotifyService");
const { port } = require("./config");

console.log("SPOTIFY_CLIENT_ID:", process.env.SPOTIFY_CLIENT_ID);
console.log("SPOTIFY_CLIENT_SECRET:", process.env.SPOTIFY_CLIENT_SECRET);

// Define the frontend directory path
const frontendPath = path.join(__dirname, "../frontend");

// Debug: Log the frontend path and check if 'pages' or 'app' directories exist
const pagesDir = path.join(frontendPath, "pages");
const appDir = path.join(frontendPath, "app");
console.log("Frontend Path:", frontendPath);
console.log("Pages directory exists:", fs.existsSync(pagesDir));
console.log("App directory exists:", fs.existsSync(appDir));

// If neither 'pages' nor 'app' exists, exit with an error message
if (!fs.existsSync(pagesDir) && !fs.existsSync(appDir)) {
  console.error("Error: Couldn't find any 'pages' or 'app' directory in the frontend folder. Please create one under the project root (e.g., frontend/pages/index.js).");
  process.exit(1);
}

const dev = process.env.NODE_ENV !== "production";
// Initialize Next.js with the frontend directory
const app = next({ dev, dir: frontendPath });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(express.json());

  // Register API routes under /api
  server.use("/api", routes);

  // Serve Next.js frontend for all other routes
  server.all("*", (req, res) => handle(req, res));

  // Initialize Spotify token for backend usage
  getSpotifyToken().catch((err) =>
    console.error("Error initializing Spotify token:", err)
  );

  server.listen(port, () => {
    console.log(`✅ MCP Spotify Server running on http://localhost:${port}`);
  });
});
