let jwt = require("jsonwebtoken");
const User = require("../models/user").model;
const ErrorResponse = require('../utils/errorResponse');

exports.isAuthenticated = async (req, res, next) =>{
  const token = req.cookies.jwt;
  if (!token){
    return next (new ErrorResponse('You must log in to access this ressource', 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    return next (new ErrorResponse('You must log in to access this ressource', 401));
  }
}
