import express from "express";
import {Book} from "../models/bookModel.js"


const router = express.Router();


// Route for Creating a new Book

router.post('/' , async (request, response) => { 
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
        return response.status(200).send(book);
        
    } catch (error) {
        console.log(error);
        response.status(500).send({message: error.message});
    }
})

//Route for getting all books from db 
router.get('/', async(request, response) => {
    try {
        const books = await Book.find({});
        response.status(200).json({
            count: books.length,
            data: books
        });
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})

//Route for getting a book with id from db 
router.get('/:id', async(request, response) => {
    try {
        const { id } = request.params;
        const book = await Book.findById(id);
        response.status(200).json(book);
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})


// Route for update a book

router.put('/:id', async(request, response) => {
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


        const { id } = request.params;
        const result = await Book.findByIdAndUpdate(id, request.body);
        if(!result){
            return response.status(404).json(
                {message: 'Book not found.', }
            );
        }
        return response.status(200).send({message: "Book updated successfuly!"});

        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})

router.delete('/:id', async(request, response) => {
    try {
       
        const { id } = request.params;
        const result = await Book.findByIdAndDelete(id);
        if(!result){
            return response.status(404).json(
                {message: 'Book not found.', }
            );
        }
        return response.status(200).send({message: "Book deleted successfuly!"});

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})

export default router;