const mongoose=require('mongoose')
const Terrain=require("./terrain").Terrain
const User=require("./user").User


const Reservation=new mongoose.Schema({

        terrain: Terrain,
        date:{
            type: Date,
            required: true,
        },
        user: User
    },
    {collection : "reservations"},
)


const model = mongoose.model('Reservation',Reservation)
module.exports = {model,Reservation}
