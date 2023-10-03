const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.route");

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
  };

//---MIDDLEWARE --


app.use(cors((corsOptions)),express.json(),express.urlencoded({extended: true}))

app.use(cookieParser());


require("dotenv").config()
require("./config/mongoose.config")
app.use("/", userRoutes);
require("./routes/orders.route")(app)



//---Connect To Port --
const PORT =process.env.PORT
app.listen(PORT,()=>{
    console.log(`>>>>> server is running on Port ${PORT} 😊😊`)
})
    