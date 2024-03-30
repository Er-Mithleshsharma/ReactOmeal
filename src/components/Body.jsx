import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import {Link} from 'react-router-dom'
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus'
import { RESTAURANT_DATA } from '../utils/mockData';

const Body = () => {
  // * React Hook -> A normal JavaScript function which is given to us by React (or) Normal JS utility functions
  // * useState() - Super Powerful variable
  // * useEffect() -

  // * State variable - Super Powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [inpval,setinpval]=useState("");
  // const [searchText, setSearchText] = useState('');
  const [filteredrestraunts,setfilteredrestaurants] = useState([])
  useEffect(()=>{
    apicall();
  },[])

   async function apicall()
  {
    if(window.innerWidth<1024) {
      setListOfRestaurants(RESTAURANT_DATA?.restaurants)
      setfilteredrestaurants(RESTAURANT_DATA?.restaurants)
    }
    else{
      // const data1 = await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.9715987%26lng%3D77.5945627%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING");
        //  const data =  await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredrestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
  }
  // async function apicall() {
  //   try {
  //     // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.2920743&lng=75.5945828&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  //     const data = await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.9715987%26lng%3D77.5945627%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING");
  //     const fdata = await data.json();
  //     console.log(fdata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //     setListOfRestaurants(fdata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //     setfilteredrestaurants(fdata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  //     // console.log(fdata?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // }
  function filterlogic()
  {
    const newlist = listOfRestaurants.filter((restaurant)=> restaurant?.info.name.toLowerCase().includes(inpval.toLowerCase()))
    console.log(newlist)
    setfilteredrestaurants(newlist);
  }
  const checkStatus= useOnlineStatus();
  if(checkStatus === false) return <h1>rest is offline</h1>
  return listOfRestaurants.length === 0 ? <Shimmer/> :
   (
    <div className="body">
      <div className='w-full flex flex-col justify-center items-center  bg-[url("./assets/body.jpg")] h-56'>
        {/* <img className='w-full h-56 object-cover  blur-[1.8px]' src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="" /> */}
        <div className='p-4 flex left-4 text-white font-bold'>
        <h1 className='text-xl sm:text-4xl'>Top Restaurant Chains Near You</h1>
        </div>
      
      <div className='flex items-center flex-col text-white px-4'>
            <input  className=" p-3 w-full sm:w-[550px] border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-2xl font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" placeholder="Enter Restraunt here" type="text" value={inpval} onChange={e=> setinpval(e.target.value)}/>
            <button className='p-2 px-8 text-xl bg-[#ccb38d] m-3 rounded-sm' onClick={(e)=>{
              filterlogic();
              console.log(inpval)
            }}>Search</button>
          </div>
        </div>
      {/* <div className='p-4 flex absolute top-20 md:left-[32%] left-4 text-white font-bold'>
        <h1 className='text-xl sm:text-4xl'>Top Restaurant Chains Near You</h1>
        </div>
      
      <div className='flex items-center flex-col absolute top-40 sm:left-[32%]  text-white px-4'>
            <input  className=" p-3 w-full sm:w-[550px] border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-2xl font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" placeholder="Enter Restraunt here" type="text" value={inpval} onChange={e=> setinpval(e.target.value)}/>
            <button className='p-2 px-8 text-xl bg-[#ccb38d] m-3 rounded-sm' onClick={(e)=>{
              filterlogic();
              console.log(inpval)
            }}>Search</button>
          </div> */}
          <div className=" flex  gap-5 pl-20 items-center mt-1">
            <h1 className='md:text-3xl font-semibold'>Filter Restaurants :</h1>
        <button
          className="font-xl font-semibold  bg-gray-100 rounded-3xl p-2 pt-1 mt-1 "
          onClick={() => {
            // * Filter logic
            const filteredList = listOfRestaurants.filter((res)=> parseFloat(res.info.avgRating) > 4.0)
        

            setfilteredrestaurants(filteredList);
            console.log(filteredList);
          }}
        >  
          Ratings 4+
        </button>
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
      <div className="sm:flex sm:flex-wrap w-full gap-10  justify-center">
        {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}

        {filteredrestraunts.map((restaurant) => (
           <Link
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

