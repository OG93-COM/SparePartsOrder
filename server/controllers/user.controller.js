const User = require("../models/user.model");
const jwt = require("jsonwebtoken");


const maxDate = 2 * 24 * 60 * 60;

const createToken = (id) => {
    return jwt.sign({ id }, "Nice super secret key", {
      expiresIn: maxDate,
    });
  };

const handleErrors = (err) => {
    let errors = { firstName:"", lastName:"", email: "", password: "" };
    console.log("hahahah",err);
    
    if (err.code === 11000) {
      errors.email = "Email is already registered";
      console.log("hahahah",err);
      return errors;
    }
  
    if (err.message.includes("Users validation failed")) {
      Object.values(err.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message;
      });
    }
  
    return errors;
  }

  const handleErrorsLogin = (err) => {
    let errors = { email: "", password: "" };
    console.log("Login handle error",err);

    if (err.message === "Email address is required") {
      errors.email = "Email address is required";
    }
  
    if (err.message === "Password is required") {
      errors.password = "That password is incorrect";
    }
    
  
    if (err.message.includes("Users validation failed")) {
      Object.values(err.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message;
      });
    }
  
    return errors;
  }


  module.exports.register = async (req, res, next) => {
    try {
      const { firstName, lastName, email, password } = req.body;
      const user = await User.create({ firstName, lastName, email, password });
      const token = createToken(user._id);
  
      res.cookie("jwt", token, {
        withCredentials: true,
        httpOnly: false,
        maxDate: maxDate * 1000,
      });
      res.status(201).json({ user: user._id, created: true });

    } catch (err) {
      console.log("Whyyyyyyyy",err);
      const errors = handleErrors(err);
      res.status(400).json(err);
    }
  };



  module.exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.login( email, password );
        const token = createToken(user._id);
    
        res.cookie("jwt", token, {
          withCredentials: true,
          httpOnly: false,
          maxDate: maxDate * 1000,
        });
        res.status(201).json({ user: user._id, created: true });
  
      } catch (err) {
        console.log("Whyyyyyyyy Login : ",err);
        const errors = handleErrorsLogin(err);
        res.status(400).json(errors);
      }
    };

      // FindAll
      module.exports.findAllUser =(req,res)=>{
        User.find()
        .then(allUser =>{
          console.log(allUser)
          res.json({allUser})
        })
        .catch(err => { res.json({message: "Wait a minute😊"})})
      }

      // Delete
        module.exports.deleteUser = (req, res) => {
          User.deleteOne({ _id: req.params.id })
              .then(deletedresult => { res.json({ deletedresult }) })
              .catch(err => { res.json({ message: "wait a minute 😏😏", error: err }) })
        }

    // // Update One
    //     module.exports.updateOneUser = (req, res) => {
    //         User.findByIdAndUpdate( 
    //             req.params.id ,
    //             req.body, 
    //             { new: true, runValidators: true }
    //         )
    //             .then(updatedUser => { res.json( updatedUser) } )
    //             .catch(err => res.json(err) )
    //     }
    
    // // FindOne
        module.exports.findOneUser = (req,res) =>{
          User.findOne({_id:req.params.id})
            .then((user)=>{
              console.log("This user", user)
              res.json(user)
          }).catch(err=>{
              console.log(err)
              res.json({error:err})
          })
        }


