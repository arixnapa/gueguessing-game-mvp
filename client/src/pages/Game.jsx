import { useState, useMemo } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
import locations from "../components/locations";

const libraries = ["places"];
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
