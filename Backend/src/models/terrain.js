const mongoose=require('mongoose')

const Terrain=new mongoose.Schema({
    numero:{
        type:Number,
        required:true,
        unique:true
    }
},
{collection : "terrains"}
)

const model=mongoose.model("Terrain",Terrain)
module.exports= {model,Terrain}
