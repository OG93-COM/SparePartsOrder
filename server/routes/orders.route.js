const ordersController = require("../controllers/orders.controller")



module.exports =  (app) => {
    app.post("/api/orders/", ordersController.createOrders)
    app.get("/api/orders/", ordersController.findAllOrders)
    app.get("/api/orders/:id", ordersController.findOneOrders)
    app.put("/api/orders/:id", ordersController.updateOneOrders)
    app.delete("/api/orders/:id", ordersController.deleteOrders)
}