import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: false
    },
    price: {
        type: Number,
        default: 0,
        min: 0,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

export default mongoose.model("Product", productSchema);