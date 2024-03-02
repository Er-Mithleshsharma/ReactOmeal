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
            className="p-4 m-2 w-60 rounded-lg h-96"
            style={{
                backgroundColor: '#f0f0f0',
            }}
        >
            <img
                className=" h-44 w-56 rounded-sm"
                src={CDN_URL + cloudinaryImageId}
                alt="Biryani"
            />

            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo.toUpperCase()}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    );
};

export default RestaurantCard;
