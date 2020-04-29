import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css'

import Navbar from './Components/Navbar/Navbar'
import About from './PageComponents/About/About.jsx'
import Home from './PageComponents/Home'
// import ContactUs from './PageComponents/ContactUs/ContactUs.jsx'
import Gallery from './PageComponents/Gallery/Gallery.jsx'
import { LanguageProvider } from '../src/Languages/context'
import ScrollToTopBtn from "./Components/ScrollButton/ScrollToTop";

class App extends React.Component {
    render() {
        return (
        <LanguageProvider>
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
                        {/* <Route path='/contact-us'>
                            <ContactUs />
                        </Route> */}
                        <Route path='/'>
                            <Home />
                        </Route>
                    </Switch>
                    <ScrollToTopBtn />
                </div>
            </BrowserRouter>
        </LanguageProvider>
        );
    }
}

export default App;
