import './App.css';
//import MapWrapped from './maps';
import Map from './maps'
import './map.css';
import {Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
    <Map />
     {/* <Route
        path='/'
        render={(props) => (
        <div style={{ width: "50vw", height: "75vh" }} className = "map"> 
         <MapWrapped
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=`}
                   loadingElement={<div style={{ height: "100%" }} />}
                      containerElement={<div style={{ height: "100%" }} />}
                       mapElement={<div style={{ height: "100%" }} />}
                       />
                       </div>
         )
       }
      /> */}
    </div>
  );
}

export default App;
