import { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetcg;
  }, []);

  const fetchMenu = async () => {
    const data = await fetch();
    const json = await data.json();

    console.log(json);
  };
  return <div className="menu">Restaurant Name</div>;
};

export default RestaurantMenu;
