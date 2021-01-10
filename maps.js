import React, {useState, useEffect} from "react";
// import {
//   withGoogleMap,
//   withScriptjs,
//   GoogleMap,
//   Marker,
//   InfoWindow
// } from "react-google-maps";
//import mapStyles from "./mapStyles";
 

function Map(){

    //const [selectedLocaton, setSelectedLocation] = useState(null);
    const [hasErrors, setErrors] = useState(false)
    const [locations, setLocations] = useState({})


    async function fetchData(){
    
        const res = await fetch("`https://maps.googleapis.com/maps/api/place/textsearch/json?key=&query=dog friendly businesses");
        
        res
        .json()
        .then(res => setLocations(res))
        .catch(err => setErrors(err))

    }

    //note: If you want the useEffect to behave like the componentDidMount 
    //lifecycle event, pass an array as the second argument, like so:
    
    useEffect(()=>{
        fetchData();
    }, [])




        return (
            <div>
              <span>{JSON.stringify(locations)}</span>
              <hr />
              <span>Has error: {JSON.stringify(hasErrors)}</span>
            </div>
          );
     
        // return(
                    
        //     <div className= "left-container">
        //     <GoogleMap defaultZoom={13} defaultCenter={{lat:40.712776, lng:-74.005974}}
        //     defaultOptions={{ styles: mapStyles }} >
        //     </GoogleMap>
        //     </div>
           
        // )
  } 



//const MapWrapped  = withScriptjs(withGoogleMap(Map))
 
//export default MapWrapped;

export default Map;