import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "./GoogleMaps.css"

 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.0,
      lng: 2.0
    },
    zoom: 11
  };

  // constructor(props) {
  //   super(props);
  //   // Don't call this.setState() here!
  //   this.center = { 
  //       lat: this.props.lat,
  //       lng: this.props.lng
  //    };
  //   this.zoom = 11
  // }
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="google_maps">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY}}
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