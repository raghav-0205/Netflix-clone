import express, { json } from "express";
import cors from "cors";
import db from "./db.js";
import dotenv from "dotenv";
import router from './routes/auth.js';

  
dotenv.config();

const app = express();
const PORT =  3000;

app.use(json()); 
app.use(cors());
app.use("/auth", router);

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Connected to MySQL database");
    }
});


app.get("/", (req, res) => {
    res.send("Netflix Clone Backend is running...");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});