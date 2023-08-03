const countryModel = require("../model/countryModel");

const countryController = {
  insertCountry: (req, res) => {
    const { people, name } = req.body;
    if (!people || !name) {
      res.status(400).send("Both people and name are required.");
      return;
    }

    countryModel.query(
      "INSERT INTO country (people, name) VALUES (?, ?)",
      [people, name],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error inserting country");
          return;
        }

        res.send(result);
      }
    );
  },
  getAllCountries: (req, res) => {
    countryModel.query("SELECT * FROM country", (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error fetching countries");
        return;
      }

      res.send(rows);
    });
  },
  getCountryById: (req, res) => {
    const countryId = req.params.id;

    countryModel.query(
      "SELECT * FROM country WHERE id = ?",
      countryId,
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send("error get by id");
          return;
        }
        if (result.length === 0) {
          res.status(404).send("Country not found");
          return;
        }
        res.send(result);
      }
    );
  },
  deleteCountryById: (req, res) => {
    const countryId = req.params.id;

    countryModel.query(
      "DELETE FROM country WHERE id = ?",
      countryId,
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error deleting country");
          return;
        }

        if (result.affectedRows === 0) {
          res.status(404).send("Country not found");
          return;
        }

        res.send("Country deleted successfully");
      }
    );
  },
  updateCountryById: (req, res) => {
    const countryId = req.params.id;
    const newData = req.body; // Assuming you have the updated data in the request body

    countryModel.query(
      "UPDATE country SET ? WHERE id = ?",
      [newData, countryId],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error updating country");
          return;
        }

        if (result.changedRows === 0) {
          res.status(404).send("Country not found or no changes made");
          return;
        }

        res.send("Country updated successfully");
      }
    );
  },
};

module.exports = countryController;
