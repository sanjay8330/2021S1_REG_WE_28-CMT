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
const attendeeRouter = require('./routes/Attendee');
const researchRouter = require('./routes/Research');
const conferenceRouter = require('./routes/Conference');

app.use("/workshop", workshopRouter);
app.use("/attendee", attendeeRouter);
app.use("/research", researchRouter);
app.use("/conference", conferenceRouter);

//Connection to mongoose
mongoose.connect("mongodb+srv://AF:sanjay-8330@cmt.g1xsc.mongodb.net/CMTDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.once('open', () => {
    console.log('Database Synched!!');
})

//Running on the server
app.listen(3001,() => {
    console.log("Server is started and running on 3001");
})

