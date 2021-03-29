import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "./GoogleMaps.css"
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 42.698334,
      lng: 23.319941
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="google_maps">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "anykey"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
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