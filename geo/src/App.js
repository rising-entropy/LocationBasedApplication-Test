import './App.css';
import {useState, useEffect} from 'react'

function App() {

  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [locationState, setLocationState] = useState([]);

  //getting location
  navigator.geolocation.getCurrentPosition((position) => {
    setLat(position.coords.latitude)
    setLong(position.coords.longitude)
  })

  //check if allow location is blocked
  useEffect( () => {
  navigator.permissions.query({
    name: 'geolocation'
  }).then((result) => {
      setLocationState(result.state)
  });}, [locationState])

  useEffect( () => {
    navigator.permissions.query({
      name: 'geolocation'
    }).then((result) => {
        setLocationState(result.state)
    });}, [])

  return (
    <div className="App">
      <h2>Getting Geo-Location Co-ordinates</h2>
      <h4>Latitude: {lat}</h4> 
      <h4>Longitude: {long}</h4> 
      <br/>
      <h4>Location State: {locationState}</h4> 
    </div>
  );
}

export default App;
