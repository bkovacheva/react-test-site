import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "./GoogleMaps.css"

 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
class SimpleMap extends Component {
  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="google_maps">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY}}
          defaultCenter={{
            lat: parseFloat(this.props.lat),
            lng: parseFloat(this.props.lng)
          }}
          defaultZoom={10}
        >
          <AnyReactComponent
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;