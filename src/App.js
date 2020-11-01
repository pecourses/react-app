import React, { Component, Suspense, lazy, createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import './reset.css';
import './App.css';
import { ImportantInfo, ThemeContext } from './contexts/ImportantContext';
import withTheme from './components/HOCs/withTheme';

const SignInPage = React.lazy(() => import('./pages/SignInForm'));
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contacts = React.lazy(() => import('./pages/Contacts'));



class App extends Component {
  render() {
    return (
      <ImportantInfo.Provider value={{ id: 1, name: 'Test Testovich', age: 24 }}>
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
      </ImportantInfo.Provider>
    );
  }
}

export default withTheme(App);
