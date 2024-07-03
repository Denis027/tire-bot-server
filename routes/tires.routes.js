const Router = require("express");
const router = new Router();
const tiresController = require("../controller/tires.controller");

router.post("/tires", tiresController.addTire);
router.get("/tires", tiresController.getTires);
router.get("/tires/:id", tiresController.getOneTire);
router.put("/tires", tiresController.updateTire);
router.delete("/tires/:id", tiresController.deleteTire);

module.exports = router;
