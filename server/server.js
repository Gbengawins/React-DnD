const express = require("express");
const app = express();
const PORT = 5600;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const http = require("http").Server(app);
const cors = require("cors");

app.use(cors());


const socketIO = require("socket.io")(http, {
    cors: {
        origin: "https://localhost:3000"
    }
});

socketIO.on("connection", (socket) => {
    console.log(`${socket.id} user connected`)
    socket.on('disconnect', () => {
        socket.disconnect();
        console.log(`socket disconnected`)
    });
});

app.get("/api", (req, res) => {
    res.json({
        message: "Thank you Jesus!",
    });
});

app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));