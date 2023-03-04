const express = require("express");
const cors = require("cors");
const app = express();
 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./config/mongoose.config");
require("./routes/event.routes")(app);
app.listen(3001, () => {
 console.log("Listening at Port 3001");
});
