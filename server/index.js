//Imports
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');

//Creating an app from express
const app = express();

//Getting the output as a JSON fro the app
//app.use(express.json());
app.use(bodyparser.json());
app.use(cors());

const workshopRouter = require('./routes/Workshop');

app.use("/workshop", workshopRouter);

//Connection to mongoose
mongoose.connect("mongodb+srv://AF:sanjay-8330@cmt.g1xsc.mongodb.net/CMTDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//Running on the server
app.listen(3001,() => {
    console.log("Server is started and running on 3001");
})

