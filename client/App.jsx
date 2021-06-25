import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from './components/Header_Footer/Footer';
import Home from './components/Home';

import AddWorkshop from './components/Workshops/createWorkshop';
import AddAttendees from './components/Attendees/createAttendees';
import AddUser from './components/AppUser/createUser';
import AddGeneralUser from './components/AppUser/createGeneralUser';
import UserLogin from './components/Login/userLogin';
import AddResearch from './components/Research/createResearch';

//Dashboard types
import MainDashboard from './components/Dashboard/mainDashboard';
import AdminDashboard from './components/Dashboard/adminDashboard';
import reviewerDashboard from './components/Dashboard/reviewerDashboard';
import editorDashboard from './components/Dashboard/editorDashboard';

import viewWorkshopReviewer from './components/reviewerRole/viewWorkshop';
import DisplayResearchReviewer from './components/reviewerRole/viewResearchpaper';

//The main file for App render
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        return (
            <div>
                <Router>
                    <section>
                        <Switch>
                            <Route path="/" component={Home} exact />
                            <Route path="/addWorkshop" component={AddWorkshop}></Route>
                            <Route path="/addAttendee" component={AddAttendees}></Route>
                            <Route path="/generalUserSignUp" component={ AddGeneralUser }></Route>
                            <Route path="/login" component={ UserLogin }></Route>
                            <Route path="/addUser" component={ AddUser }></Route>
                            <Route path="/addResearch" component={AddResearch}></Route>
                            <Route path="/dashboard" component={MainDashboard}></Route>
                            <Route path="/adminDashboard" component={AdminDashboard}></Route>
                            <Route path="/reviewerDashboard" component={reviewerDashboard}></Route>
                            <Route path="/editorDashboard" component={editorDashboard}></Route>

                            <Route path="/DisplayWorkshopReviewer" component={viewWorkshopReviewer}></Route>
                            <Route path="/DisplayResearchReviewer" component={DisplayResearchReviewer}></Route>

                        </Switch>
                    </section>
                    <Footer />
                </Router>
            </div>
        )
    }
}
