import mongoose from 'mongoose'

const { Schema, model } = mongoose
// Schema 
const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
     
    },
    createdAt: {
        type: Date,
        default: new Date(),
     
    },
    deletedAt: {
        type: Date,
        
    },
})
// Model 

const PRODUCT = model('product', productSchema);

export default PRODUCT