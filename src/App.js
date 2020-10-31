import React, { Component, Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import './reset.css';
import './App.css';

const SignInPage = React.lazy(() => import('./pages/SignInForm'));
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contacts = React.lazy(() => import('./pages/Contacts'));

class App extends Component {
  render() {
    return (
      <div className='container'>

        text

      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route
              path={['/sign_in', '/signin', '/sign-in', '/auth']}
              component={SignInPage}
            />
            <Route path='/contacts' component={Contacts} />
            <Route path='*'>
              <div>Page not found</div>
            </Route>
          </Switch>
        </Suspense>
      </Router>
      </div>
    );
  }
}

export default App;
