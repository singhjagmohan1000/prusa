import React from "react";

export class Visit extends React.Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="map fadeUp">
          <iframe
            title="address"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.4816825682183!2d-121.83225238469376!3d37.378439479833524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcd9e51038613%3A0x41cc3a288be4b986!2sPunjabi+Radio+USA!5e0!3m2!1sen!2sus!4v1540269237100"
            className="google-map"
          />
        </div>
        <div className="divider-sm" />
      </div>
    );
  }
}
