import React from 'react';
import ReactDOM from 'react-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import {
  Nav,
  Navbar,
  NavItem
} from 'react-bootstrap';

import Home from './home';
import About from './about';
import Books from './books';
import List from './list';
import Stats from './stats';
import NotFound from './notfound';

class App extends React.Component {
  render () {
    return <BrowserRouter>
      <div>
        <Navbar inverse fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
            <LinkContainer to="/">
            <a>joy.fyi</a>
            </LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/books">
                <NavItem>Books</NavItem>
              </LinkContainer>
            </Nav>
            <Nav>
              <LinkContainer to="/list">
                <NavItem>List</NavItem>
              </LinkContainer>
            </Nav>
            <Nav>
              <LinkContainer to="/stats">
                <NavItem>Stats</NavItem>
              </LinkContainer>
            </Nav>
            <Nav>
              <LinkContainer to="/about">
                <NavItem>About</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          {/* <Route exact path="/" component={Home}/>*/}
          <Redirect exact to="/books" from="/"/>
          <Route path="/about" component={About}/>
          <Route path="/books" component={Books}/>
          <Route path="/list" component={List}/>
          <Route path="/stats" component={Stats}/>
          <Route exact path="/404" component={NotFound}/>
          <Redirect to="/404"/>
        </Switch>
      </div>
    </BrowserRouter>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)