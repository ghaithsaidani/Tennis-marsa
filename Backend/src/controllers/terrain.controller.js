const Terrain = require("../models/terrain").model;
const ErrorResponse = require("../utils/errorResponse");


exports.addTerrain = async (req, res) => {
    let { numero } = req.body;

    try {
        let terrain=await Terrain.findOne({numero})
        if(terrain){
            return next(new ErrorResponse('Numero Terrain Existe', 400))
        }
        else{
            let newTerrain = new Terrain();
            newTerrain.numero = numero;

            newTerrain.save((err, Terrain) => {
                if (err) {
                    return res.status(400).send({
                        message: err,
                    });
                } else {

                    return res.status(201).send({
                        success: true,
                    });
                }
            });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllTerrains= async (req,res)=>{

    try {
        let terrains=await Terrain.find()
        res.status(200).send({success:true,terrains})
    }catch (error) {
        res.status(500).json({error:error.message})
    }
}
