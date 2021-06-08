import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar/navBar';
import AddWorkshop from './components/Workshops/createWorkshop';
import AddAttendees from './components/Attendees/createAttendees';
import AddResearch from './components/Research/createResearch';

//The main file for App render
function App(){
    return(
        <div>
            <Router>
                <NavBar />

                <section>
                    <Switch>
                        <Route path="/addWorkshop" component={ AddWorkshop } exact></Route>
                        <Route path="/addAttendee" component={ AddAttendees }></Route>
                        <Route path="/addResearch" component={ AddResearch }></Route>
                    </Switch>
                </section>
            </Router>

        </div>
    )
}

export default App;