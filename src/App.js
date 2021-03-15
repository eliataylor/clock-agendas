import React from 'react';
import './App.css';
import Home from './views/Home';
import About from './views/About';
import Ethics from './views/Ethics';
import Sponsors from './views/Sponsors';
import Rallies from "./views/Rallies";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FirebaseCMS from "./views/firebaseCMS/FirebaseCMS";
import Topics from "./views/Topics";
import Resources from "./views/Resources";
import RallyHome from "./views/RallyHome";
import MeetingHome from "./views/MeetingHome";
import RallyTemplates from "./views/RallyTemplates";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import {NavLink} from "react-router-dom";
import {SnackbarProvider} from "notistack";
import CancelIcon from '@material-ui/icons/Cancel';
import Citizen from "./views/Citizen";

function App() {
    const [isOpen, closeWarning] = React.useState(process.env.NODE_ENV === 'production' && document.location.pathname.indexOf('/rally/') !== 0);

    const notistackRef = React.useRef();
    const onClickDismiss = (key) => {
        notistackRef.current.handleDismissSnack(key);
    }

    return (
        <SnackbarProvider maxSnack={3}
                          ref={notistackRef}
                          action={(key) => (<CancelIcon onClick={() => onClickDismiss(key)} />)} >
        <div className="App">
                <Router>
                    <Dialog open={isOpen} >
                        <div style={{padding:30}}>
                            <p style={{textAlign:'right', marginBottom:30}}>
                                <Button color='primary' variant='contained' onClick={() => closeWarning(false)}>Close</Button>
                            </p>
                            <p>This site is just a prototype. If interested please share your ideal <NavLink onClick={() => closeWarning(false)} to={"/rally/templates"} >meeting template</NavLink> </p>
                            <p>To subscribe, visit the live site <a href="https://democrasee.club" target="_blank" rel="noopener noreferrer" >Democrasee.club</a>.</p>
                        </div>
                    </Dialog>

                    <Header />
                    <Switch>
                        <Route path="/cms"><FirebaseCMS/></Route>
                        <Route path="/c/:entity"><FirebaseCMS/></Route>
                        <Route path="/rallies"><Rallies/></Route>
                        <Route path="/values"><Topics/></Route>
                        <Route path="/resources"><Resources/></Route>
                        <Route path="/citizens/:uid"><Citizen/></Route>
                        <Route path="/sponsors/cities"><Sponsors/></Route>

                        <Route exact path="/rally/:rid/meeting/:mid"component={MeetingHome} />
                        <Route exact path="/rally/templates"component={RallyTemplates} />
                        <Route exact path="/rally/:rid" component={RallyHome} />

                        <Route path="/about"><About/></Route>
                        <Route path="/ethics"><Ethics/></Route>
                        <Route path="/users"><Ethics/></Route>

                        <Route path="/"><Home/></Route>
                    </Switch>
                    <Footer />
                </Router>
        </div>
        </SnackbarProvider>
    );
}

export default App;
