import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const MapContainer = (props) => {
    const onMarkerClick = () => {}
    const onInfoWindowClose = () => {}
    return (
        <Map 
        google={props.google} 
        zoom={8}
        visible={true}
        initialCenter={{
            lat: props.lat,
            lng: props.lng
        }}
        >
 
        <Marker onClick={onMarkerClick}
                name={props.capital} />
 
        <InfoWindow onClose={onInfoWindowClose}>
        </InfoWindow>
      </Map>
    )
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyA2UEkSFi1KKB10L0GPA20VJYoxM7_L0JA')
  })(MapContainer)