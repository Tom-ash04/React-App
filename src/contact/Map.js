import React from 'react';
import GoogleMapReact from 'google-map-react';

const Tag = ({ text }) => <div className="mapTag">{text}</div>;

class SimpleMap extends React.Component {
  static defaultProps = {
    center: { lat: 51.578274, lng: 20.534873},
    zoom: 14
  };

  render(){
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      ><Tag
          lat={51.578274}
          lng={20.534873}
        /></GoogleMapReact>
    );
  }
}

export default SimpleMap;
