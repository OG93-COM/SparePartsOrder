const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const UserSchema = new mongoose.Schema({
    firstName : {
        type:String,
        required:[ true, "First Name is required"],
        minlength: [3, "First Name must be at least 3 characters long"],
        maxlength: [20, "First Name must be at max 20 characters long"]
    },
    lastName : {
        type:String,
        required:[ true, "Last Name is required"],
        minlength: [3, "Last Name must be at least 3 characters long"],
        maxlength: [40, "Last Name must be at max 20 characters long"]
    },
    email : {
        type: String,
        unique : true,
        required: [ true, "Email address is required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password : { 
        type: String,
        required: [ true, "Password is required"] 
  }

}, {timestamps:true});


    UserSchema.pre("save", async function (next) {
        
            const salt = await bcrypt.genSalt();
            this.password = await bcrypt.hash(this.password, salt);
            next();
    });

    UserSchema.statics.login = async function (email, password) {
        const user = await this.findOne({ email });
        if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error("incorrect password");
        }
        throw Error("incorrect email");
    };

module.exports = mongoose.model("User", UserSchema) ;