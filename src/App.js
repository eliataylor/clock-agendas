import React from 'react';
import './App.css';
import Home from './views/Home';
import About from './views/About';
import Ethics from './views/Ethics';
import City from './views/City';
import PlanList from './components/PlanList';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Topics from "./views/Topics";
import Resources from "./views/Resources";

function App() {
    return (
        <div className="App">
                <Router>
                    <Header />
                    <Switch>

                        <Route path="/rallies"><City/></Route>
                        <Route path="/cities"><City/></Route>
                        <Route path="/values"><Topics/></Route>
                        <Route path="/resources"><Resources/></Route>

                        <Route path="/user/create"><City/></Route>
                        <Route path="/user/:uid/update"><City/></Route>

                        <Route path="/city/:cid"><City/></Route>
                        <Route path="/form/city/create"><City/></Route>
                        <Route path="/form/city/:cid/update"><City/></Route>

                        <Route path="/rally/:rid"><PlanList /></Route>
                        <Route path="/form/rally/create"><PlanList /></Route>
                        <Route path="/form/rally/:rid/update"><PlanList /></Route>

                        <Route path="/official/:oid"><City/></Route>

                        <Route path="/plan/:pid"><City/></Route>
                        <Route path="/form/plan/create"><City/></Route>
                        <Route path="/form/plan/:pid/update"><City/></Route>

                        <Route path="/city/:cid/meeting/:mid"><City/></Route>
                        <Route path="/city/:cid/meeting/create"><City/></Route>
                        <Route path="/form/city/:cid/meeting/:mid/update"><City/></Route>

                        <Route path="/about"><About/></Route>
                        <Route path="/ethics"><Ethics/></Route>
                        <Route path="/users"><Ethics/></Route>

                        <Route path="/"><Home/></Route>
                    </Switch>
                    <Footer />
                </Router>
        </div>
    );
}

export default App;
