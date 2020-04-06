import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from './Components/Navbar/Navbar';
import About from './PageComponents/About/About.jsx';
import Home from './PageComponents/Home';
import ContactUs from './PageComponents/ContactUs/ContactUs.jsx';
import Gallery from './PageComponents/Gallery/Gallery.jsx';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Switch>
                        <Route path='/gallery'>
                            <Gallery />
                        </Route>
                        <Route path='/about'>
                            <About />
                        </Route>
                        <Route path='/contact-us'>
                            <ContactUs />
                        </Route>
                        <Route path='/'>
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
