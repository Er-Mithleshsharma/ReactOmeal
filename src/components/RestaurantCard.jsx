import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,
    } = resData?.info;

    return (
        <div
            className="p-4 m-2 w-60 rounded-lg h-96 mx-auto"
            style={{
                backgroundColor: '#f0f0f0',
            }}
        >
            <img
                className=" h-44 w-52 rounded-sm"
                src={CDN_URL + cloudinaryImageId}
                alt="Biryani"
            />

            <h3 className='text-xl font-bold'>{name}</h3>
            <h4 className=' font-semibold'>{
                cuisines[3]?
            cuisines[0]+", "+cuisines[1]+", "+cuisines[3]:cuisines[0]
            }</h4>
            <h4 className=' font-semibold'>{avgRating} stars</h4>
            <h4 className=' font-semibold'>{costForTwo.toUpperCase()}</h4>
            <h4 className=' font-semibold'>{sla.slaString}</h4>
        </div>
    );
};

export default RestaurantCard;
