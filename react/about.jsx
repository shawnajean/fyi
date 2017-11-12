import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import {
  Image,
  Panel
} from 'react-bootstrap';

class About extends React.Component {
  render () {
    return <div className="container main">
      <panel>
        <Image className="center-block" src="/static/panda.png" alt="Panda" circle responsive/>
        <div>
          <p>Software engineer <a href="https://twitter.com/plaid">@plaid</a>.
          <br/>Previously software engineer <a href="https://twitter.com/vessel">@vessel</a>,
            intern <a href="https://twitter.com/dropbox">@dropbox</a> and <a href="https://twitter.com/addepar">@addepar</a>.</p>
        </div>
      </panel>
    </div>
  }
}

export default About
