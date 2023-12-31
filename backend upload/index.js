import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import {Book} from './models/shopModel.js'
import booksRoute from './routes/shopRoute.js'
import cors from 'cors'

const app = express();

app.use(express.json()); 

app.use(cors()); 

app.get('/', (request, response) => {
    console.log(request) 
    return response.status(234).send('Welcome Buyers to shopping app')
});

app.use('/shop', booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listing to port : ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    })  