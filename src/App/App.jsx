import React from "react";
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import {
  HomePage,
  About,
  Advertise,
  Team,
  Schedule,
  Header,
  Footer,
  Contact
} from "../components";

export class App extends React.Component {
  render() {
    const history = createBrowserHistory();
    return (
      <Router history={history}>
        <div>
          <nav id="off-canvas-menu">
            <div id="off-canvas-menu-title">
              MENU
              <span
                className="icon flaticon-cancel"
                id="off-canvas-menu-close"
              />
            </div>
            <ul className="expander-list">
              <li>
                <span className="name">
                  <Link   id="menu-close-home" to="/">Home</Link>
                </span>
              </li>
              <li>
                <span className="name">
                  <Link  id="menu-close-schedule" to="/schedule">Schedule</Link>
                </span>
              </li>
              <li>
                <span className="name">
                  <Link   id="menu-close-team" to="/team">Our Team</Link>
                </span>
              </li>
              <li>
                <span className="name">
                  <a  id="menu-close-donate" rel="noopener noreferrer"  target="_blank" href="https://facebook.com">Donate</a>
                </span>
              </li>
              <li>
                <span className="name">
                  <Link  id="menu-close-advertise" to="/advertise">Advertise</Link>
                </span>
              </li>
              <li>
                <span className="name">
                  <Link id="menu-close-about" to="/about">About Us</Link>
                </span>
              </li>
              <li>
                <span className="name">
                  <Link id="menu-close-contact" to="/contact">Contact Us</Link>
                </span>
              </li>
            </ul>
          </nav>
          <div id="outer">
            <div id="outer-canvas">
              <Header />
              <Route exact path="/" component={HomePage} />
              <Route path="/team" component={Team} />
              <Route path="/schedule" component={Schedule} />
              <Route path="/advertise" component={Advertise} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <div className="clearfooter" />
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
