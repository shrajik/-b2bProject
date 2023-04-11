const { resgister } = require("../controllers/userController");

const router = require("express").Router();

router.post("/register", function (req, res) {
  resgister;
});

module.exports = router;
