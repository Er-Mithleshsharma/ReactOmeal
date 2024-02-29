import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import {Link} from 'react-router-dom'
import Shimmer from './Shimmer';

const Body = () => {
  // * React Hook -> A normal JavaScript function which is given to us by React (or) Normal JS utility functions
  // * useState() - Super Powerful variable
  // * useEffect() -

  // * State variable - Super Powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [inpval,setinpval]=useState("");
  const [searchText, setSearchText] = useState('');
  const [filteredrestraunts,setfilteredrestaurants] = useState([])
  useEffect(()=>{
    apicall();
  },[])

  //  async function apicall()
  // {
  //    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.2920743&lng=75.5945828&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  //    const fdata = await data.json()
  //    console.log(fdata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  // }
  async function apicall() {
    try {
      // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.2920743&lng=75.5945828&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const data = await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.9715987%26lng%3D77.5945627%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING");
      const fdata = await data.json();
      console.log(fdata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setListOfRestaurants(fdata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilteredrestaurants(fdata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      // console.log(fdata?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    } catch (error) {
      console.error("Error:", error);
    }
  }
  function filterlogic()
  {
    console.log("jj");
    const newlist = listOfRestaurants.filter((restaurant)=> restaurant?.info.name.includes(inpval))
    console.log(newlist)
    setfilteredrestaurants(newlist);
  }
  return listOfRestaurants.length === 0 ? <Shimmer/> :
   (
    <div className="body">
      {/* <div className="search-container">
        <input type="text" placeholder="Search Food or Restaurant" />
        <button>Search</button>
      </div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // * Filter logic
            const filteredList = listOfRestaurants.filter((res)=> parseFloat(res.info.avgRating) > 4.2)
        

            setfilteredrestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className='search'>
            <input  className="searchbox" type="text" value={inpval} onChange={e=> setinpval(e.target.value)}/>
            <button onClick={(e)=>{
              filterlogic();
              console.log(inpval)
            }}>search</button>
          </div>
          {/* <div className="search">
          <input
            type="text"
            placeholder="Search a restaurant you want..."
            className="searchBox"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // * Filter the restaurant cards and update the UI
              // * searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilteredrestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div> */}
      <div className="res-container">
        {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}

        {filteredrestraunts.map((restaurant) => (
           <Link
           style={{
             textDecoration: 'none',
             color: '#000',
           }}
           key={restaurant.info.id}
           to={'/restaurants/' + restaurant.info.id}
         >
           <RestaurantCard resData={restaurant} />
         </Link>
          // <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
