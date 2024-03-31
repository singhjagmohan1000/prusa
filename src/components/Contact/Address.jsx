import React from "react";

export class Address extends React.Component {
  render() {
    return (
      <ul className="contacts-list">
        <li>
          <span className="icon flaticon-phone" /> (408) 272-5200, (408)722-7698
        </li>
        <li>
          <span className="icon flaticon-mail" />{" "}
          <a href="mailto:info@punjabiradiousa.com">info@punjabiradiousa.com</a>
        </li>
        <li>
          <h5>San Jose Studio</h5>
          <span className="icon flaticon-home" /> 3750 McKee Road, STE B, San
          Jose, CA
        </li>
        <li>
          <h5> Fresno Studio</h5>
          <span className="icon flaticon-home" /> 2125 N Barton Ave, Fresno, CA
        </li>
      </ul>
    );
  }
}
