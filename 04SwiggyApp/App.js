// You can only use import on a moudule script and not on a normal script

import ReactDOM from "react-dom/client";

import "./css/landing_page.css";
import Header from "./components/Header";
import SearchWidget from "./components/SearchWidget";

import Body from "./components/Body";



/*
Header
  - Logo
  - Nav Items
Body
  - Search
  - MenuContainer
    - RestaurantCard
      - Image
      - Name
      - Star Rating
      - Cuisine
      - Description
      - Order Now
Footer
  - Copyright
  - Links
  - Address
  - Contact
*/

// 20240307120658
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.86840&lng=85.78270&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING


// const resData1 = {
//   resName: "Bizeal",
//   cuisine: "Cakes & Pastries",
//   image: "image1",
//   starRatings: 4.4,
//   description: "Best cakes and pastries in the town",
// };

// const resData2 = {
//   resName: "New Gokul Sweetes",
//   cuisine: "Sweets, Savouries",
//   image: "image2",
//   starRatings: 4.1,
//   description: "Healthy and Tasty sweets",
// };


const AppLayout = () => {
  return (
    <div className="app">
      <div className="hero-section">
        <Header />
        <SearchWidget />
      </div>
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
