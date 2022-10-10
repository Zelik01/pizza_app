
const router = require("express").Router();
const orderController = require("../controller/orderController")
const auth = require("../authentication")


router.get(	"/",orderController.getOrders);

router.post("/", orderController.postOrder);

router.get("/:orderId",auth.authenticateUser, orderController.getOrder);

router.patch("/:id",auth.authenticateUser, orderController.updateOrder);

router.delete("/:id",auth.authenticateUser, orderController.deleteOrder);


module.exports = router;