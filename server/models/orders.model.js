const mongoose = require("mongoose");


const ordersSchema = new mongoose.Schema({
    fullName : {
        type:String,
        required:[ true, "Full Name is required"],
        minlength: [3, "Name must be at least 3 characters long"],
        maxlength: [20, "Name must be at max 20 characters long"]
    },
    phone : {
        type: Number,
        required:[ true, "Phone Number is required"],
    },
    email : {
      type:String,
      required: [ true, "Email address is required"],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  adresse : {
    type:String,
    required:[ true, "Please Add Your Address"],
    minlength: [5, "Address must be at least 5 characters long"],

  },
  carType : {
    type:String,
    required:[ true, "Please Add Your Car"],
    minlength: [3, "Name Car must be at least 3 characters long"]
  },
  fuelCar : {
    type:String,
    required:[ true, "the Type of is required"],
    enum: ["Fuel", "Diesel", "Gaz"]
  },
  yearsCar : {
    type: Number,
    required:[ true, "The Car Years is required"],
    min: [1920, "Please add a valid years"],
    max: [2024, "Please add a valid years"]
  },
  partsOrder : {
    type:String,
    required:[ true, "Parts Order Description is required"],
    minlength: [10, "Name must be at least 3 characters long"]
  },
  status : {
    type:String,
    default:"active"
  },

}, {timestamps:true});

module.exports = mongoose.model("Orders", ordersSchema) ;