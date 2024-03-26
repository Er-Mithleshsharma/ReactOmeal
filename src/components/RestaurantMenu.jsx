import { useParams } from 'react-router-dom';
import ShimmerMenu from './ShimmerMenu';
import { CDN_URL } from '../utils/constants';
import { FiClock } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';
import useRestrauntMenu from '../utils/useRestrauntMenu';
import RestaurantCategory from './RestaurantCategory';
import useMobileMenu from '../utils/useMobileMenu';

const RestaurantMenu = () => { 
   const { resId } = useParams();
    const resInfo = useRestrauntMenu(resId)
  if (resInfo === null) return <ShimmerMenu />;

    const show =  resInfo?.data?.cards[2]?.card?.card?.info
    console.log(show)
    const categories = resInfo.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter
    ((c)=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  const {
    name,
    cuisines,
    costForTwoMessage,
    costForTwo,
    cloudinaryImageId,
    avgRating,
    sla
  } = show

  return (
    <div>
      <header className=" bg-black  flex justify-center pt-4 sm:pr-6 sm:gap-10">
        <div className="menu-header-left pr-6 pb-6">
          <img src={CDN_URL + cloudinaryImageId} alt="Restaurent Info" className=' sm:h-44 h-28  sm:w-64 rounded-lg ' />
        </div>
        <div className=" text-white flex flex-col sm:pt-6">
          <div className="">
            <h1 className=" text-xl sm:text-4xl font-bold pb-4" >{name}</h1>
            <h3 className='text-gray-400'>{cuisines.join(', ')}</h3>
          </div>
          <div className="flex pt-4 sm:w-64 justify-between flex-wrap md:flex-nowrap ">
            <h4 className="flex pr-1">
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
            <h4 className="flex pr-1">
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
