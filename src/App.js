import "./styles.css";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Restaurants from "./components/Restaurants";
import Filters from "./components/Filters";
import restaurants from "./data/restaurants.json";
import OffersData from "./data/offers.json";
import userInfo from "./data/userInfo.json";
import { useState } from "react";

const filters = {
  1: "Cost High to Lost",
  2: "Cost Lost to High",
  3: "Ratings",
  4: "Delivery Time",
  5: "Relevance"
};

export default function App() {
  const [filterBy, setFilterBy] = useState("");
  const [data, setData] = useState(restaurants);

  const updateFilter = (newFilter) => {
    switch (newFilter) {
      case "1": {
        setFilterBy(1);
        data.sort((a, b) => b.costForTwo - a.costForTwo);
        setData([...data]);
        break;
      }
      case "2": {
        setFilterBy(2);
        data.sort((a, b) => a.costForTwo - b.costForTwo);
        setData([...data]);
        break;
      }
      case "3": {
        setFilterBy(3);
        data.sort((a, b) => b.rating - a.rating);
        setData([...data]);
        break;
      }
      case "4": {
        setFilterBy(4);
        data.sort((a, b) => a.deliveryTimings - b.deliveryTimings);
        setData([...data]);
        break;
      }
      case "5": {
        setFilterBy(5);
        data.sort((a, b) => b.offer - a.offer);
        setData([...data]);
        break;
      }
      default: {
        setData(restaurants);
        break;
      }
    }
  };
  return (
    <div>
      <Navbar {...userInfo.location} />
      <Offers OffersData={OffersData} />
      <section className="near-you">
        <Filters
          filters={filters}
          currentFilterBy={filterBy}
          updateFilter={updateFilter}
        />
        <Restaurants restaurants={data} />
      </section>
    </div>
  );
}
