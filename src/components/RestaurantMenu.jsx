import { useParams } from 'react-router-dom';
import ShimmerMenu from './ShimmerMenu';
import { CDN_URL } from '../utils/constants';
import { FiClock } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';
import useRestrauntMenu from '../utils/useRestrauntMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
  const { resId } = useParams();
    const resInfo = useRestrauntMenu(resId)
    if(window.innerWidth <1024) return <div>swiggy api not available open in desktop</div>
  if (resInfo === null) return <ShimmerMenu />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    costForTwo,
    cloudinaryImageId,
    avgRating,
    sla
  } = resInfo?.cards[0]?.card?.card?.info;

     const categories =resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter
     ((c)=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
 
  return (
    <div>
      <header className=" bg-black  flex justify-center pt-4 pr-6 gap-10">
        <div className="menu-header-left pr-6 pb-6">
          <img src={CDN_URL + cloudinaryImageId} alt="Restaurent Info" className='h-44 w-64 rounded-lg ' />
        </div>
        <div className=" text-white flex flex-col pt-6">
          <div className="">
            <h1 className="text-4xl font-bold pb-4" >{name}</h1>
            <h3 className='text-gray-400'>{cuisines.join(', ')}</h3>
          </div>
          <div className="flex pt-4 w-64 justify-between">
            <h4 className="flex">
              <span
                className="icons"
                style={{
                  position: 'relative',
                  top: '5px',
                  marginRight: '3px',
                }}
              >
                <AiOutlineStar />
              </span>
              <span>{avgRating}</span>
            </h4>
            <div className='h-8 w-1 bg-white'></div>
            <h4 className="flex">
              <span
                className="icons"
                style={{
                  position: 'relative',
                  top: '5px',
                  marginRight: '3px',
                }}
              >
                <FiClock />
              </span>
              <span> {sla.deliveryTime} MINS</span>
            </h4>
            <div className='h-8 w-1 bg-white'></div>
            <h3>{costForTwoMessage}</h3>
          </div>
        </div>
      </header>
      
     <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>
      {/* categories accordions */}
      {categories.map((category) => (
        // Controlled Component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
        />
      ))}
    </div>
    </div>
  );
};

export default RestaurantMenu;
