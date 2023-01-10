import { meals, order } from "../model/schema.js";

export const getMeals = async (req, resp)=>{

    try{
        const Allmeals = await meals.find({});
        resp.status(200).json(Allmeals);
    }
    catch(err){
        resp.status('404').json({message:err.message});
    }
}

export const postOrder = async (req, resp) =>{

    const orderDetails = req.body;
    orderDetails.orderedItems.map(item=>{
        delete item._id;
    })

    console.log(orderDetails);

    const finalOrder = new order(orderDetails);
    try{
        await finalOrder.save()
        resp.status(200).json(finalOrder)
    }
    catch(err){
        resp.status(404).json({message:err.message});
    }

}