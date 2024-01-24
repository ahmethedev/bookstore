import express, { request, response } from "express";
import {PORT, MONGODB_URL} from "./config.js"
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}));

app.get('/', (request,response) => {
    console.log(request);
    return response.status(234).send("Welcome MERN stack book store app")
});

// /books requestlerini bookRoute'a yönlendir. Böylece birden fazla model kullanabilirim.
app.use('/books', booksRoute);

mongoose
.connect(MONGODB_URL)
.then(() => {
    console.log("App is connected to the databse.")
    app.listen(PORT, () => {
        console.log(`App is listening port: ${PORT}`)
    })
})
.catch((error) => {
     console.log(error)
});
