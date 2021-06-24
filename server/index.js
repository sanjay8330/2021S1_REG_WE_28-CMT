//Imports
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
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
const conferenceWorkshops = require('./routes/ConferenceWorkshop');
const conferenceResearches = require('./routes/ConferenceResearch');
const appUser = require('./routes/AppUser');

app.use("/workshop", workshopRouter);
app.use("/attendee", attendeeRouter);
app.use("/research", researchRouter);
app.use("/conference", conferenceRouter);
app.use("/conferenceWorkshops", conferenceWorkshops);
app.use("/conferenceResearchs", conferenceResearches);
app.use('/user', appUser);

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;
//Connection to mongoose
mongoose.connect(MONGODB_URI || '&w=majority' , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (error) => {
    if(error) {
        console.log('Error in connection');
    }
})

mongoose.connection.once('open', () => {
    console.log('Database Synched!!');
})

//Running on the server
app.listen(PORT,() => {
    console.log(`Server is started and running on ${PORT}`);
});

module.exports = app;

