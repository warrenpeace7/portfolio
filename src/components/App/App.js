import React, { Component } from 'react';
import Home from './../Home/Home'
import JobHistory from './../JobHistory/JobHistory'
import Projects from './../Projects/Projects'
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'



class App extends Component {
  state = {

  }
  constructor() {
    super()
    console.log('App.constructor()')
  }

  componentWillMount() {
    console.log('App.componentWillMount()')

  }
  componentDidMount() {
    console.log('App.componentDidMount()')
  }

  render() {
    console.log('App.render')
    return (
     
      <Router>
        <div className="App">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/jobhistory">Job History</Link>
            <Link to="/projects">Projects</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/jobhistory" component={JobHistory} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
