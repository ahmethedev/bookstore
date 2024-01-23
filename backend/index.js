import express, { request, response } from "express";
import {PORT, MONGODB_URL} from "./config.js"
import mongoose from "mongoose";
import {Book} from "./models/bookModel.js"

const app = express();
app.use(express.json());

app.get('/', (request,response) => {
    console.log(request);
    return response.status(234).send("Welcome MERN stack book store app")
});

// Route for Creating a new Book

app.post('/books' , async (request, response) => { 
    try {
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ){
            return response.status(400).send(
                {message: 'Send all required fields: title, author, publish year.', }
            );
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear
        };
        const book = await Book.create(newBook); 
        return response.status(201).send(book);
        
    } catch (error) {
        console.log(error);
        response.status(500).send({message: error.message});
    }
})

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
