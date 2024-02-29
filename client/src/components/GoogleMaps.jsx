// this is just to display a map full screen
import { useState, useRef, useEffect } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const render = (status) => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return null;
};

function MyMapComponent({ center, zoom }) {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div ref={ref} id="map" style={{ width: "100vw", height: "100vh" }} />;
}

export default function GoogleMaps() {
  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;

  return (
    <div>
      <Wrapper
        apiKey={API_KEY}
        render={render}
      >
        <MyMapComponent center={center} zoom={zoom} />
      </Wrapper>
    </div>
  );
}
