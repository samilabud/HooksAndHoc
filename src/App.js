
import React from 'react';
import { Route, Switch, BrowserRouter as Router,Link } from 'react-router-dom';
import UserAddressCard from './components/useraddresscard/useraddresscard.component';
import UserPostCard from './components/userpostcard/userpostcard.component';
//Practicing
import SimpleCounter from './components/simplecounter/simplecounter.component';
import RandomAPI from './components/randomAPI/randomAPI.component';
import './App.css';


export const App = () => {
    return ( 
        <div>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/counterPractice">Counter Practice</Link>
                            </li>
                            <li>
                                <Link to="/randomAPI">Request To Random API</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Switch>
                    <Route exact path="/">
                        <UserAddressCard type="address" />
                        <UserPostCard type="post" />
                    </Route>
                    {/*Practicing all on this video https://www.youtube.com/watch?v=gnkrDse9QKc */}
                    <Route exact path="/counterPractice">
                        <SimpleCounter />
                    </Route>
                    <Route exact path="/randomAPI">
                        <RandomAPI />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;