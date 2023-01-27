import React from "react";
import Users from './Users'
import "./styles.css";
import Reservation from "./Reservation";
import Navs from "./Navs";
import List from './List';
import Avion from "./Avion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Dashboard() {
  return (
    <><Router>
      <div className="App">
        <Navs />
          <Switch>
            <Route path="/dashboard/homes" exact component={Homes} />
            <Route path="/dashboard/list" exact component={List} />
            <Route path="/dashboard/reservation" exact component={Reservation} />
            <Route path="/dashboard/users" component={Users} />
            <Route path="/dashboard/avion" component={Avion} />
          </Switch>
        </div>
    </Router>
    </>
  );
}

function Homes() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='xl'>
        <Box sx={{ bgcolor: 'black', height: '100vh' }}>
          <h1>Hello</h1>
        </Box>
      </Container>
    </React.Fragment>
  );
}