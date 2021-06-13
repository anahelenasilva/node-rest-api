const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader(
    "Access-Control-Allow-Methods",
    "GET",
    "POST",
    "PUT",
    "DELETE"
  );

  next();
});

try {
  app.listen(process.env.EXTERNAL_PORT || 3001);
} catch (error) {
  console.error(error);
}
