const Reservation = require("../models/reservation").model;
const ErrorResponse = require("../utils/errorResponse");


exports.addReservation = async (req, res) => {
    let { terrain , date } = req.body;
    let user=req.user
    try {
        let reservation=await Reservation.findOne({terrain,date})
        if(reservation){
            return next(new ErrorResponse('Reservation deja affecte', 400))
        }
        else {
            let newReservation = new Reservation();
            newReservation.terrain = terrain;
            newReservation.date = date;
            newReservation.user = user;

            newReservation.save((err, Reservation) => {
                if (err) {
                    return res.status(400).send({
                        message: err.message,
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
