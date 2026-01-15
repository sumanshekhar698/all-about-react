const CloudinaryBaseUrl =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const styleCard = {
  //inline style for the restaurant card using the js object NOT RECOMMENDED
  backgroundColor: "transparent",
  padding: "10px",
  borderRadius: "10px",
  width: "300px",
  overflow: "hidden",
};

const RestaurantCard = (props) => {
  // const RestaurantCard = ({ resData }) => { // Destructuring right in the parameters
  console.log(props);
  const { resData } = props; //destructuring
  console.log(resData);

  return (
    // <div className="restaurant-card" style={{backgroundColor: "transparent"}}>
    <div className="restaurant-card" style={styleCard}>
      <div className="card-image">
        {/* <img src={image} alt="restaurant"></img> */}
        <img
          src={CloudinaryBaseUrl + resData.info.cloudinaryImageId}
          alt="restaurant"
        ></img>
      </div>

      <h3>{resData.info.name}</h3>
      {/* <h4>{resData.info.cuisines[0]}</h4> */}
      <h4>{resData?.info?.cuisines?.[0] || "Cuisines not available"}</h4>
      <h5>{resData.info.avgRating} Star Ratings</h5>

      <p>{resData.info.costForTwo}</p>
      <a href="#">
        <button>Order Now</button>
      </a>
    </div>
  );
};

export default RestaurantCard;
