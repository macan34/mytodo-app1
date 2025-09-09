const express = require("express");
const { ExpressPeerServer } = require("peer");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 443;

// buat server http
const server = app.listen(PORT, () => {
  console.log("PeerJS server running on port " + PORT);
});

// konfigurasi PeerServer
const peerServer = ExpressPeerServer(server, {
  debug: true,
  allow_discovery: true
});

// mount peerjs endpoint
app.use("/peerjs", peerServer);

app.get("/", (req, res) => {
  res.send("✅ PeerJS server aktif!");
});
