import { useState, useMemo } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const API_KEY=import.meta.env.VITE_GOOGLE_MAPS_API_KEY


const libraries = ["places"];

// list of loactions to guess
const locations = [
  {
    city: "Barcelona",
    country: "Spain",
    location: { lat: 41.3851, lng: 2.1734 },
  },
  {
    city: "New York",
    country: "USA",
    location: { lat: 40.7128, lng: -74.006 },
  },
  { city: "Paris", country: "France", location: { lat: 48.8566, lng: 2.3522 } },
  {
    city: "Tokyo",
    country: "Japan",
    location: { lat: 35.6895, lng: 139.6917 },
  },
  {
    city: "Sydney",
    country: "Australia",
    location: { lat: -33.8688, lng: 151.2093 },
  },
  { city: "Rome", country: "Italy", location: { lat: 41.9028, lng: 12.4964 } },
  { city: "Cairo", country: "Egypt", location: { lat: 30.033, lng: 31.2336 } },
  {
    city: "Reykjavik",
    country: "Iceland",
    location: { lat: 64.1265, lng: -21.8174 },
  },
  {
    city: "Copenhagen",
    country: "Denmark",
    location: { lat: 55.6761, lng: 12.5683 },
  },
  {
    city: "Edinburgh",
    country: "United Kingdom",
    location: { lat: 55.9533, lng: -3.1883 },
  },
  { city: "Berlin", country: "Germany", location: { lat: 52.52, lng: 13.405 } },
  {
    city: "Budapest",
    country: "Hungary",
    location: { lat: 47.4979, lng: 19.0402 },
  },
  {
    city: "Lisbon",
    country: "Portugal",
    location: { lat: 38.7223, lng: -9.1393 },
  },
  {
    city: "Stockholm",
    country: "Sweden",
    location: { lat: 59.3293, lng: 18.0686 },
  },
  {
    city: "Brussels",
    country: "Belgium",
    location: { lat: 50.8503, lng: 4.3517 },
  },
  {
    city: "Amsterdam",
    country: "Netherlands",
    location: { lat: 52.3676, lng: 4.9041 },
  },
  {
    city: "Athens",
    country: "Greece",
    location: { lat: 37.9838, lng: 23.7275 },
  },
  {
    city: "Dublin",
    country: "Ireland",
    location: { lat: 53.3498, lng: -6.2603 },
  },
  {
    city: "Prague",
    country: "Czech Republic",
    location: { lat: 50.0755, lng: 14.4378 },
  },
  {
    city: "Vienna",
    country: "Austria",
    location: { lat: 48.8566, lng: 16.3522 },
  },
  {
    city: "Buenos Aires",
    country: "Argentina",
    location: { lat: -34.6118, lng: -58.4173 },
  },
  {
    city: "Rio de Janeiro",
    country: "Brazil",
    location: { lat: -22.9068, lng: -43.1729 },
  },
  {
    city: "Mexico City",
    country: "Mexico",
    location: { lat: 19.4326, lng: -99.1332 },
  },
  { city: "Lima", country: "Peru", location: { lat: -12.0464, lng: -77.0428 } },
  {
    city: "Bogotá",
    country: "Colombia",
    location: { lat: 4.711, lng: -74.0721 },
  },
  {
    city: "Santiago",
    country: "Chile",
    location: { lat: -33.4489, lng: -70.6693 },
  },
  {
    city: "Caracas",
    country: "Venezuela",
    location: { lat: 10.4806, lng: -66.9036 },
  },
  {
    city: "Wellington",
    country: "New Zealand",
    location: { lat: -41.2866, lng: 174.7756 },
  },
  { city: "Mumbai", country: "India", location: { lat: 19.076, lng: 72.8777 } },
  {
    city: "Bangalore",
    country: "India",
    location: { lat: 12.9716, lng: 77.5946 },
  },
  {
    city: "Brasília",
    country: "Brazil",
    location: { lat: -15.8267, lng: -47.9218 },
  },
  {
    city: "Panama City",
    country: "Panama",
    location: { lat: 8.9824, lng: -79.5199 },
  },
  {
    city: "Kathmandu",
    country: "Nepal",
    location: { lat: 27.7172, lng: 85.324 },
  },
  {
    city: "Amman",
    country: "Jordan",
    location: { lat: 31.9522, lng: 35.2332 },
  },
  {
    city: "Ljubljana",
    country: "Slovenia",
    location: { lat: 46.0569, lng: 14.5058 },
  },
  { city: "Accra", country: "Ghana", location: { lat: 5.6037, lng: -0.187 } },
  {
    city: "Tbilisi",
    country: "Georgia",
    location: { lat: 41.7151, lng: 44.8271 },
  },
  {
    city: "Hanoi",
    country: "Vietnam",
    location: { lat: 21.0285, lng: 105.8542 },
  },
  {
    city: "Jerusalem",
    country: "Israel",
    location: { lat: 31.7683, lng: 35.2137 },
  },
  // is there a way to do it with a place ID?
];
let placesService;

export default function Map() {
  const [photo, setPhoto] = useState("");
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);

  const [userGuess, setUserGuess] = useState(""); //adding the user guess
  const [points, setPoints] = useState(0); //addint the score in points starting at 0

  // Google API
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries,
  });

  const center = useMemo(
    () => locations[currentLocationIndex].location,
    [currentLocationIndex]
  );

  const onLoad = (map) => {
    placesService = new window.google.maps.places.PlacesService(map);
    getRandomPhoto(true);
  };

  // fetch a random photo
  const getRandomPhoto = (firstTime) => {
    let newIndex = currentLocationIndex;

    if (!firstTime) {
      newIndex = (currentLocationIndex + 1) % locations.length;

      setCurrentLocationIndex(newIndex);
    }

    console.log(newIndex);

    // create a query with city and country
    const currentLocation = locations[newIndex];
    const query = `${currentLocation.city}, ${currentLocation.country}`;

    placesService.textSearch({ query }, (suggestions) => {
      if (
        suggestions &&
        suggestions.length > 0 &&
        suggestions[0].photos &&
        suggestions[0].photos.length > 0
      ) {
        const firstPhoto = suggestions[0].photos?.[0].getUrl({ maxWidth: 400 });
        setPhoto(firstPhoto);
      } else {
        setPhoto("");
      }
    });
  };

  // handleGuessSubmit
  const handleGuessSubmit = () => {
    const currentLocation = locations[currentLocationIndex];

    // to check if the user's guess matches the current city OR country
    if (
      userGuess.toLowerCase() === currentLocation.city.toLowerCase() ||
      userGuess.toLowerCase() === currentLocation.country.toLowerCase()
    ) {
      // if they get it right, alert with correct, if not with the right answer
      setPoints((prevPoints) => prevPoints + 1);
      alert("Correct! You earned a point.");
    } else {
      alert(
        `Incorrect. The correct location is ${currentLocation.city}, ${currentLocation.country}.`
      );
    }

    setUserGuess("");
  };
 
  return (
    <div className="container py-4">
      <div className="d-flex flex-column align-items-center gap-4">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => getRandomPhoto()}
        >
          Get a random photo
        </button>
        <img src={photo} alt="photo" className="img-fluid" />

        <div className="text">
          <strong>Where is this?</strong>
        </div>
        <div className="text">
          Enter either the name of the <span className="stand-out">city</span>{" "}
          or <span className="stand-out">country</span> to make your guess!
        </div>

        <div>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={userGuess}
              onChange={(e) => setUserGuess(e.target.value)}
              placeholder="Your guess"
            />

            <button className="btn btn-success " onClick={handleGuessSubmit}>
              Guess the place
            </button>
          </div>
        </div>

        <div className="">
          {!isLoaded ? (
            <h1>Loading...</h1>
          ) : (
            <GoogleMap
              mapContainerClassName="map-container"
              center={center}
              onLoad={onLoad}
            />
          )}
        </div>

        <p className="points">Points: {points}</p>
      </div>
    </div>
  );
}
