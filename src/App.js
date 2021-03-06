import React, { Component } from 'react';
import './App.css';
import Landing from './Pages/LandingandLogin/Landing';
import {Route, Switch,Redirect} from 'react-router-dom';
import ProtectedRoute from './Pages/LandingandLogin/ProtectedRoute';
import Contests from './Pages/ContestList/ContestPage';
import Problemlist from './Pages/ProblemList/ProblemList';
import ComingSoon from './Pages/ComingSoon/ComingSoon';
import TermsOfService from './Pages/Terms';
import PrivacyPolicy from './Pages/Privacy';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/privacypolicy" component={PrivacyPolicy} />
        <Route exact path="/termsofservice" component={TermsOfService} />
        {/* <Route path="/contests" exact component={Contests} /> */}
        {/* <Route path="/problems" exact component={Problemlist} /> */}
        <Route exact path="/comingsoon" exact component={ComingSoon} />
        {/* <Redirect to="/contests" /> */}
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default App;