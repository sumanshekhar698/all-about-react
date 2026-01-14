import React from "react";
import RestaurantCard from "../components/RestaurantCard";
import Spinner from "../components/Spinner";
import LocationMarquee from "../components/LocationMarquee";
import { fetchRestaurants as initFetchRestaurants } from "../util/geolocation";


const Body = () => {
  const [restaurants, setRestaurants] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [location, setLocation] = React.useState(null);

  // Fetch restaurants using geolocation
  React.useEffect(() => {
    const fetchSwiggyData = async (lat, lng) => {
      try {
        setLoading(true);
        console.log("Fetching restaurants for:", lat, lng);
        const URL = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

        // const URL = proxy + url;
        console.log("Fetching from URL:", URL);
        const response = await fetch(URL);
        const data = await response.json();


        // Extract restaurants from the API response
        const restaurantsArray =
          data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];
        setRestaurants(restaurantsArray);
        console.log("Fetched Restaurants:", restaurantsArray);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching restaurants:", err);
        setError("Failed to fetch restaurants");
        setLoading(false);

        // Fallback to static data if API fails
        // if (swiggyData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
        //   setRestaurants(
        //     swiggyData.data.cards[4].card.card.gridElements.infoWithStyle
        //       .restaurants
        //   );
        // }
      }
    };

    initFetchRestaurants(setError, setLocation, fetchSwiggyData);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    console.warn(error);
  }

  const displayRestaurants = restaurants.slice(0, 9); // Display first 7 restaurants
  console.log("Total Restaurants Fetched:", restaurants.length);

  return (
    <div className="body">
      <LocationMarquee location={location} />
      <div className="restaurant-container">
        {displayRestaurants.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;