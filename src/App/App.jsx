import React from "react";
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import {
  HomePage,
  About,
  Advertise,
  Team,
  Schedule,
  Listen,
  Header,
  Footer,
  Contact,
  Jobs,
  Privacy
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
                  <Link   id="menu-close-team" to="/team">Team</Link>
                </span>
              </li>
              <li>
                <span className="name">
                  <Link   id="menu-close-team" to="/listen">Ways To Listen</Link>
                </span>
              </li>
              <li>
                <span className="name">
                  <a  id="menu-close-donate" rel="noopener noreferrer"  target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=info@punjabiradiousa.com&item_name=Punjabi+Radio+USA">Donate</a>
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
              <li>
                <span className="name">
                  <Link id="menu-close-contact" to="/jobs">Jobs</Link>
                </span>
              </li>
              <li>
                <span className="name">
                  <Link id="menu-close-privacy" to="/privacy">Privacy Policy</Link>
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
              <Route path="/listen" component={Listen} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/jobs" component={Jobs} />
              <Route path="/privacy" component={Privacy} />
              <div className="clearfooter" />
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
