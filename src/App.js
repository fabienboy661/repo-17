import React from 'react'
import './app.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import Footer1 from './Components/footer1/Footer1';
import Form from './Components/Forms/Form'
import Dashboard from './Components/admin/Dashboard';
import ScrollToTop from './ScrollToTop'

const NavRoute = ({exact, path, component: Component}) => (
  <Route exact={exact} path={path} render={(props) => (
    <div>
      <Navbar/>
      <Component {...props}/>
    </div>
  )}/>
)
const App = () => {
  return (  
  <>
    <Router>
      <ScrollToTop />
      <Switch>
        <NavRoute path='/' exact component={Home} />
        <NavRoute path='/main' exact component={Main} />
        <NavRoute path='/forms' exact component={Form} />
        <NavRoute path='/footer' exact component={Footer} />
        <Route exactly component={Dashboard} pattern="/dashboard" />
      </Switch>
    </Router>
    <Footer1 />
    <ToastContainer />
  </>
  );
}

export default App