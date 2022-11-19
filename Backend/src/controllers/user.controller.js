const User = require("../models/user").model;
const ErrorResponse = require("../utils/errorResponse");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  let { email, password } = req.body.values;

  try {
    let newUser = new User();

    newUser.email = email;
    newUser.password = password;

    newUser.setPassword(password);

    newUser.save((err, User) => {
      if (err) {
        return res.status(400).send({
          message: err.message,
        });
      } else {
        return res.status(201).send({
          message: res.message,
          newUser,
        });
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.login = async (req, res) => {
  let { email,password } = req.body;  
  try {

    let user = await User.findOne({email});

    if(!user){
      return  next(new ErrorResponse('Invalid credentials', 400))
    }

    // verify user password

    let isMatched=await user.validPassword(password);

    if (!isMatched){
      return  next(new ErrorResponse('Invalid credentials', 400))
    }
    const token=jwt.sign(
        {id: user._id,email:user.email}
        ,process.env.JWT_SECRET
    );
    const options = {
      httpOnly: false,
      secure:false,
      maxAge:  24*60*60*1000,
      sameSite:'Lax'
    };
    return res.status(200).cookie('jwt', token,options).json({success:true,token:token})
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



exports.logout = (req, res, next)=>{
  res.clearCookie();
  res.status(200).json({
    success: true,
    message: "Logged out"
  })
}




exports.userProfile = async (req, res, next)=>{
  const user = await User.findById(req.user.id);
  res.status(200).json({
    sucess: true,
    user
  });
}


exports.singleUser = async (req, res, next)=>{

  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      sucess: true,
      user
    })

  } catch (error) {
    next(error)

  }

}
