const Orders = require("../models/orders.model");


// FindAll
module.exports.findAllOrders =(req,res)=>{
    Orders.find()
    .then(allOrders =>{
      console.log(allOrders)
      res.json({allOrders})
     })
    .catch(err => { res.json({message: "Wait a minute😊"})})
}

// FindOne
module.exports.findOneOrders = (req,res) =>{
    Orders.findOne({_id:req.params.id})
      .then((Orders)=>{
        console.log("This Order", Orders)
        res.json(Orders)
    }).catch(err=>{
        console.log(err)
        res.json({error:err})
    })
}

// Create
module.exports.createOrders = (req,res) =>{
    Orders.create(req.body).then(newOrders=>{
          console.log("New Order : ", newOrders)
          res.json(newOrders)
      }).catch(err=>{
          console.log(err)
          res.status(400).json(err)
      })
  }

  // Update One
module.exports.updateOneOrders = (req, res) => {
    Orders.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedOrders => { res.json({ updatedOrders }) })
        .catch(err => { res.json({ message: "wait a minute 😏😏", error: err }) })
}
// Delete

module.exports.deleteOrders = (req, res) => {
    Orders.deleteOne({ _id: req.params.id })
        .then(deletedresult => { res.json({ deletedresult }) })
        .catch(err => { res.json({ message: "wait a minute 😏😏", error: err }) })


}