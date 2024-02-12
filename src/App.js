import React from 'react';
import Navbar from './Navbar';
import IncompleteTasks from './IncompleteTasks';
import CreateTask from './CreateTask';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFound from './NotFound';
import TaskDetails from './TaskDetails';

function App(){
  return(
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <IncompleteTasks></IncompleteTasks>
            </Route>
            <Route exact path="/createtask">
              <CreateTask></CreateTask>
            </Route>
            <Route exact path="/Tasks/:id">
              <TaskDetails></TaskDetails>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;




// npm create-react-app to-do-list-react
// npm install react-router-dom@5
// npx json-server --watch src\data\db.json --port 8000