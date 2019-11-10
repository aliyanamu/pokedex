import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './pages/Home';
import Group from './pages/Group';
import Notfound from './pages/Notfound';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: '',
      width: ''
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const { height, width } = this.state
    return (
      <Provider store={store}>
         <Router>
          <div className="App" style={{'height': height, 'width': width}}>
            <Switch>
              <Route path='/home' component={(props) => <Home {...props} size={{ height, width, path: 'home' }} />}/>
              <Route path='/group/:groupName' component={(props) => <Group {...props} size={{ height, width, path: 'group' }} />}/>
              <Route component={Notfound} />
            </Switch>
          </div>
         </Router>
      </Provider>
    );
  }
}

export default App;
