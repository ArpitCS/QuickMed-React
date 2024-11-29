import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  InfoWindow,
  Marker,
} from "@react-google-maps/api";

import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

const Nearby = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);

  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: -34.397,
    lng: 150.644,
  };

  useEffect(() => {
    const getCurrentPosition = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setCurrentPosition({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          (error) => {
            console.error("Geolocation error:", error);
            // Fallback to default center if geolocation fails
            setCurrentPosition(defaultCenter);
          }
        );
      } else {
        console.log("Geolocation is not supported by this browser.");
        setCurrentPosition(defaultCenter);
      }
    };

    getCurrentPosition();
  }, []);

  const findNearbyHospitals = (map) => {
    if (!currentPosition) return;

    const service = new window.google.maps.places.PlacesService(map);
    const request = {
      location: currentPosition,
      radius: 5000, // Search within 5 km
      type: ["hospital"],
    };
    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setHospitals(results);
      } else {
        console.log("No hospitals found or error occurred:", status);
      }
    });
  };

  return (
    <>
      <Header />
      <LoadScript
        googleMapsApiKey="AIzaSyDqk3ABddxSyRxF7N64va7j_6OhliyVCnQ" // Replace with your API key
        libraries={["places"]}
      >
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15}
          center={currentPosition || defaultCenter}
          onLoad={findNearbyHospitals}
          options={{
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: true,
            streetViewControl: false,
            fullscreenControl: false,
            styles: [
              {
                featureType: "all",
                elementType: "labels",
                stylers: [{ visibility: "off" }],
              },
            ],
          }}
        >
          {currentPosition && (
            <Marker
              position={currentPosition}
              icon={{
                path: window.google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillColor: "#4285F4",
                fillOpacity: 0.8,
                strokeColor: "#ffffff",
                strokeWeight: 2,
              }}
            />
          )}
          {hospitals.map((hospital) => (
            <Marker
              key={hospital.place_id}
              position={hospital.geometry.location}
              onClick={() => setSelectedHospital(hospital)}
            />
          ))}
          {selectedHospital && (
            <InfoWindow
              position={selectedHospital.geometry.location}
              onCloseClick={() => setSelectedHospital(null)}
            >
              <div>
                <h3>{selectedHospital.name}</h3>
                <p>{selectedHospital.vicinity}</p>
                <p>
                  <strong>Rating:</strong> {selectedHospital.rating || "N/A"}
                </p>
                <p>
                  <strong>Total Ratings:</strong>{" "}
                  {selectedHospital.user_ratings_total || "N/A"}
                </p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
      <Footer />
    </>
  );
};

export default Nearby;
