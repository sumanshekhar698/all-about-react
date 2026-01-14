import React from "react";

const LocationMarquee = ({ location }) => {
  if (!location) return null;

  return (
    <div
      style={{
        // padding: "1.2rem",
        margin: "0",
      }}
    >
      <marquee
        style={{
          fontSize: "1.1rem",
          fontWeight: "600",
          color: "white",
        }}
      >
        {/* Your Location: {location.lat.toFixed(4)}, {location.lng.toFixed(4)} */}
        Your Location: {location.lat}, {location.lng}
      </marquee>
    </div>
  );
};

export default LocationMarquee;
