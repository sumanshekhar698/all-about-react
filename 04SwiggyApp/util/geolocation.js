export const fetchRestaurants = (setError, setLocation, fetchSwiggyData) => {
  // Check if geolocation is available
  if (!navigator.geolocation) {
    setError("Geolocation is not supported by your browser");
    // Fallback to default location
    fetchSwiggyData(12.9716, 77.5946); // Default: Bangalore
    return;
  }

  // Get user's current position
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ lat: latitude, lng: longitude });
      console.log(`Location: ${latitude}, ${longitude}`);
      fetchSwiggyData(latitude, longitude);
    },
    (error) => {
      console.error("Error getting location:", error);
      setError("Unable to get your location. Using default location.");
      // Fallback to default location
      fetchSwiggyData(12.9716, 77.5946); // Default: Bangalore
    }
  );
};
