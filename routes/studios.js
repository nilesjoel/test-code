const router = require("express").Router();

const controller = require("../controllers/studio.controller");

router.param("id", controller.findStudio);

router.route("/").post(controller.createStudio).get(controller.getAllStudios);

router
  .route("/:id")
  .get(controller.getOneStudio)
  .put(controller.updateStudio)
  .delete(controller.deleteStudio);

module.exports = router;
