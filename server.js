const express = require("express");
const app = express();

const routes = require("./router/countryRoputes");

// Express app configuration
app.use(express.json()); // Enable JSON parsing middleware

// Use the routes
app.use("/", routes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
