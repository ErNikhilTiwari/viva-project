import express from 'express';
import { Book } from '../models/shopModel.js'

const router = express.Router();

router.post('/', async (request, response) => {
    try {
        if(
            !request.body.name || 
            !request.body.description || 
            !request.body.price || 
            !request.body.category || 
            !request.body.review
        ) {
            return response.status(400).send({
                message: 'Send all required fields: name, description, price, category, review',
            });
        }
        const newproduct = { 
            name: request.body.name,  
            description: request.body.description,  
            price: request.body.price, 
            category: request.body.category,  
            review: request.body.review,  
        };

        const product = await Book.create(newproduct);

        return response.status(201).send(product);
    } 
    catch (error) {
        console.log(error.message); 
        response.status(500).send({message: error.message});
    }
})


router.get('/', async(request, response) => {
    try {
        const product = await product.find({}); 

        return response.status(200).json({
            count: product.length,
            data: product
        }); 
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});


router.get('/:id', async(request, response) => {
    try {

        const { id } = request.params;

        const product = await product.findById(id); 

        return response.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});


router.put('/:id', async(request, response) => {
    try {
        if(
            !request.body.name || 
            !request.body.description || 
            !request.body.price || 
            !request.body.category || 
            !request.body.review
        ) {
            return response.status(400).send({
                message: 'Send all required fields: name, description, price, category, review',
            });
        }

        const {id} = request.params;

        const result = await product.findByIdAndUpdate(id, request.body);

        if(!result) {
            return response.status(404).json({message: 'Product not found' });
        }
        
        return response.status(200).send({ message: 'Product updated successfully' }); 
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});


router.delete('/:id', async(request, response) => {
    try {
        
        const {id} = request.params;

        const result = await product.findByIdAndDelete(id, request.body);

        if(!result) {
            return response.status(404).json({message: 'product not found' });
        }
        
        return response.status(200).send({ message: 'product deleted successfully' }); 

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});


export default router;