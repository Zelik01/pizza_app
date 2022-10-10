
const router = require("express").Router();
const orderController = require("../controller/orderController")


router.get(	"/",orderController.getOrders);

router.post("/", orderController.postOrder);

router.get("/:orderId", orderController.getOrder);

router.patch("/:id", orderController.updateOrder);

router.delete("/:id", orderController.deleteOrder);


module.exports = router;