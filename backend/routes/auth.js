import { Router } from "express";
import { hash, compare } from "bcrypt";
import pkg  from "jsonwebtoken";
import db from "../db.js";

const { sign } = pkg;   

const auth = Router();
const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";

auth.post("/signup", async (req, res) => {
    const { id, name, email, password } = req.body;
    
    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
        if (err) return res.status(500).json({ message: "Database error" });
        if (results.length > 0) return res.status(400).json({ message: "Email already exists" });

        // Hash password
        const hashedPassword = await hash(password, 10);
       
        db.query("INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)", 
        [id ,name, email, hashedPassword], 
        (err, result) => {
            if (err) return res.status(500).json({ message: "Error registering user" });
            res.json({ message: "User registered successfully" });
        });
    });
});

// User Login
auth.post("/signin", (req, res) => {
    const { email, password } = req.body;

    // Check if user exists
    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
        if (err) return res.status(500).json({ message: "Database error" });
        if (results.length === 0) return res.status(401).json({ message: "Invalid email or password" });

        const user = results[0];

        // Check password
        const isMatch = await compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "Invalid email or password" });

        // Generate JWT Token
        // const token = sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: "1h" });

        res.json({ message: "Login successful" , user: { id: user.id, name: user.name, email: user.email , isLoggedIn : true } });
    });
});


export default auth;
