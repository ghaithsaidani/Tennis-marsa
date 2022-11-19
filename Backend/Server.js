let express = require('express');
let bodyparser = require('body-parser');
let connectDB = require("./src/config/connectDB");
let cors=require('cors')
let user=require('./src/routes/user.route')
let terrain=require('./src/routes/terrain.route')
let reservation=require('./src/routes/reservation.route')
let cookieParser = require("cookie-parser");
let session=require("express-session")
let csrf=require("csurf")
const csrfProtection = csrf({ cookie: true })
let app = express();
require("dotenv").config();
const allowedDomains="http://localhost:3000"
const corsOptions = {
    origin: allowedDomains,
    credentials: true
};


app.use(cors(corsOptions))
app.use(cookieParser());
/*app.use(session({
    secret: 'crypted key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Put true if https
}))*/
// Using bodyparser to parse json data
app.use(bodyparser.json());
app.use('/user', user);
app.use('/terrain', terrain);
app.use('/reservation', reservation);
connectDB();

  
// Creating server
const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server running at port: " + port);
});
  
// Importing routes

  
// Use user route when url matches /api/user/



// let express = require("express");
// const conectDB = require("./config/connectDB");
// let user = require("./routes/user.route");
// let cors=require('cors')
// let bodyparser = require('body-parser');
// let app = express();

// app.use(cors())
// app.use(express.json());
// app.use("/api", user);
// app.use(bodyparser.json())
