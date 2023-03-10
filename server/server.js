const express = require("express");
const cors = require("cors");
const port = 8000;

require("./config/mongoose.config");
const app = express();
app.use(cors()); 
app.use(express.json(), express.urlencoded({extended: true}));

const jokeRoutes = require("./routes/joke.routes");
jokeRoutes(app);

app.listen(port, () => {
    console.log(`Listening on port ${port} for requests to respond to.`)
})