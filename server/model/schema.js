import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
          id: String,
          name: String,
          description: String,
          price: String,
})

export const meals = mongoose.model("AvailableMeals", itemSchema);

const orderSchema = new mongoose.Schema({
    userData:{
        name:{
            type:String,
            required:true
        },
        street:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        postalCode:{
            type:String,
            required:true
        }
    },
    orderedItems:[
        {
            name:String,
            amount:Number,
            price:String,
            img:String
        }
    ],
    cost:{
        bill:String
    }
})

export const order = mongoose.model("orders", orderSchema);



