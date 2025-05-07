//API: Application Programming Interface "Middle man": lets two differnt applications talk with each other
    // Example: User sends request to log in, API receives it and sends this to the server back end system
    // Server back end system checks database and sends resonse to API, then API tells user whether they can or cannot log in

// Project application goal: build an API for products so users can modify products. They would send a request to the API, then the API would work with the database
    //then send the response back to the client

import express from 'express';
import dotenv from "dotenv";
import path from "path";
import { connectDB } from './config/db.js';

import productRoutes from "./routes/product.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); //allows us to accept JSON data in the req.body

//call functions in product route js file
//route for the api products
app.use("/api/products", productRoutes);

//configuration for merging server and client to one local host: local host 5000
if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (req,res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:"+ PORT);
});
