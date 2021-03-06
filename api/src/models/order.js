import mongoose from "mongoose"
const Schema = mongoose.Schema

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    status:{
        type:String,
        required:true,
        enum:["Pending","Rejected","Accepted","Completed"],
        default: "Pending"
    },
    date: {
        type: Date, // o string
        required: true,

        default: Date.now
    },
    total: {
        type: Number,
        required: true
    },
    products: {
        type: Array,
        ref: "Product",
        required: true
    }
    /* debería tener una cantidad?? */
})

const Order = mongoose.model("Order", orderSchema)
export default Order
