import React from 'react';
import {Map, GoogleApiWrapper } from 'google-maps-react';

const MapStyles = {
  width:'600px',
  height:'350px',
  border: '7px solid rgba(0.25, 30, 10)',
  marginTop: '30px;',
  

};


class MapContainer extends React.Component{

  render(){
    return(

      <Map
        google={this.props.google}
        zoom={14}
        style={MapStyles}
        initialCenter={{
         lat: 34.124772,
         lng: -84.220153
        }}

      />


    );
  }



}

export default GoogleApiWrapper({
  apiKey:'AIzaSyASacU1cPgnrd4ok1NdhO0sCGhzLPQJiNs'
})(MapContainer);
