import './country.css'
import { countries } from '../countries'
import { useMemo } from 'react';
import Video from './Video'
import MapContainer from './GoogleMap';
export default function Country ({ match }) {
  const currentCountry = countries.filter( country => country.title.toLowerCase().replace(/\s/g, '') === match.params.countryId.toLowerCase().replace(/\s/g, ''))[0]
  let background =  useMemo(()=> currentCountry.pictures[Math.floor(Math.random() * currentCountry.pictures.length)],[currentCountry.pictures])
  return (
    <div className = "country-page">
      <div className="video-wrapper"
       style={{
        backgroundImage: `url('${background}') `,
      }}>
        <h1>{currentCountry.title}</h1>
        <Video url={currentCountry.video}/>
    
      </div>
      <div className="about">
        <div className="capital-flag-emblem">
          <h2>Capital: {currentCountry.capital}</h2>
          <div className="flag"
           style={{
            backgroundImage: `url('${currentCountry.flag}') `,
          }}>
          </div>
          <div className="emblem"
           style={{
            backgroundImage: `url('${currentCountry.emblem}') `,
          }}
          >
          </div>
          <div className="map">
          <MapContainer 
          capital={currentCountry.capital}
          lat={currentCountry.lat}
          lng={currentCountry.lng}
          />
            </div> 
        </div>
        <div className="short-info">
          <h2>Description</h2>
          <p>{currentCountry.information}</p>
        </div>
      </div>
      <div className="slider">
        <div className="slides">
          { currentCountry.pictures.map((el,index) => {return <div
           style={{
            backgroundImage: `url('${el}') `,
          }}
          id={`slide-${index+1}`}></div>}) }
        </div>
      </div>
      <div className="widget-wrapper">
        <div className="local-time"></div>
        <div className="local-wallet"></div>
        <div className="local-weather"></div>
      </div>  
  </div>
  )
}