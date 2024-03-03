import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import {Link} from 'react-router-dom'
import Shimmer from './Shimmer';
import { RiFilter2Fill } from "react-icons/ri";
import useOnlineStatus from '../utils/useOnlineStatus'

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [inpval,setinpval]=useState("");
  const [filteredrestraunts,setfilteredrestaurants] = useState([])
  useEffect(()=>{
    apicall();
  },[])

  async function apicall() {
    try {
      // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.2920743&lng=75.5945828&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const data = await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.9715987%26lng%3D77.5945627%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING");
      const fdata = await data.json();
      console.log(fdata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setListOfRestaurants(fdata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilteredrestaurants(fdata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    } catch (error) {
      console.error("Error:", error);
    }
  }
  // search functionality
  function filterlogic()
  {
    const newlist = listOfRestaurants.filter((restaurant)=> restaurant?.info.name.toLowerCase().includes(inpval.toLowerCase()))
    console.log(newlist)
    setfilteredrestaurants(newlist);
  }
  //checking online status - custom hook
   const checkStatus= useOnlineStatus();
   if(checkStatus === false) return <h1>rest is offline</h1>

   // conditional rendering based upon either object is filled with data or show shimmer 
   //once objects get filled and rerender will happen and will show body on page 
  return listOfRestaurants.length === 0 ? <Shimmer/> :
   (
    <div className="body">
      <div className='w-full relative'>
        <img className='w-full h-56 object-cover  blur-[1.8px]' src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="" />
        </div>
      <div className='p-4 flex justify-center absolute top-20 left-[32%] text-white font-bold'>
        <h1 className='text-4xl'>Top restaurant chains near you</h1>
        </div>
      
      <div className='flex items-center flex-col absolute top-40 left-[32%]  text-white'>
            <input  className="p-3 w-[550px] border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-2xl font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" placeholder="Enter Restraunt here" type="text" value={inpval} onChange={e=> setinpval(e.target.value)}/>
            <button className='p-2 px-8 text-xl bg-[#ccb38d] m-3 rounded-sm' 
            onClick={(e)=>{
              filterlogic();
              console.log(inpval)
            }}>Search</button>
          </div>
          <div className="flex justify-center">
        <button
          className="text-2xl font-bold p-2 "
          onClick={() => {
            // * Filter logic
            const filteredList = listOfRestaurants.filter((res)=> parseFloat(res.info.avgRating) > 4.2)
        

            setfilteredrestaurants(filteredList);
            console.log(filteredList);
          }}
        >  
          Restaurants
        </button>
      </div>
      <div className="flex flex-wrap container px-20 gap-4">
        {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}

        {filteredrestraunts.map((restaurant) => (
           <Link
           key={restaurant.info.id}
           to={'/restaurants/' + restaurant.info.id}
         >
           <RestaurantCard resData={restaurant} />
         </Link>
        ))}
        {/* explanation for link tag - it works similar to href but doesent reload the page it is imp for single page app */}
      </div>
    </div>
  );
};

export default Body;
