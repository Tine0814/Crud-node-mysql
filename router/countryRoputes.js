const express = require("express");
const router = express.Router();

const countryController = require("../controllers/countryController");

router.post("/insert", countryController.insertCountry);
router.get("/insert", countryController.getAllCountries);
router.get("/insert/:id", countryController.getCountryById);
router.delete("/insert/:id", countryController.deleteCountryById);
router.patch("/insert/:id", countryController.updateCountryById);

module.exports = router;
