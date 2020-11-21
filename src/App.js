import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { Home, Contact, About } from './components'


function App() {
  return (
    <Router>
      <div className="App">
        <div className='container'>
          {/* <h1 className='text-center'>React Routing Trainning 1</h1>
          <hr/> */}
          <nav className='navbar navbar-exapnd-lg navbar-light bg-light'>
            <ul className="navbar-nav mr-auto flex-row">
              <li className="nav-item col">
                <Link
                  className='nav-link'
                  to='/'
                  >Home
                </Link>
              </li>
              <li className="nav-item col">
                <Link
                  className='nav-link'
                  to='/contact'
                  >Contact
                </Link>
              </li>
              <li className="nav-item col">
                <Link
                  className='nav-link'
                  to='/about'
                  >About
                </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route 
              exact 
              path='/'
              component={ Home } 
            />
            <Route 
              exact 
              path='/contact'
              component={ Contact } 
            />
            <Route 
              exact 
              
              path='/about'
              component={ About } 
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
