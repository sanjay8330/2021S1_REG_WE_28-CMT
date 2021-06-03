import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar/navBar';
import AddWorkshop from './components/Workshops/createWorkshop';

function App(){
    return(
        <div>
            <Router>
                <NavBar />

                <section>
                    <Switch>
                        <Route path="/addWorkshop" component={ AddWorkshop } exact></Route>
                    </Switch>
                </section>
            </Router>

        </div>
    )
}

export default App;