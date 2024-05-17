const express = require("express");
const app = express();
const cors = require("cors");

const allowedOrigins = ['http://localhost:3000', 'http://localhost:8080', 'http://127.0.0.1:8080', 'http://localhost:5173']

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: allowedOrigins }));


app.get("/", (req, res) => {
    res.status(200).json({ message: "Backend connected to frontend" })
})

app.post("/", async (req, res) => {
    const { message } = req.body
    res.json({ returningMsg : message })
})

app.listen(8080, () => {
    console.log("server is running on port 8080")
})