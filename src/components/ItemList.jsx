import { useDispatch } from 'react-redux';
import { CDN_URL } from '../utils/constants';
import { addItem } from '../utils/cartSlice';

const ItemList = ({ items}) => {
    const dispatch  = useDispatch()
 function buttonhandler(item)
 {
  dispatch(addItem(item));
 }
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 font-semibold">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 relative">
            <div className="absolute bottom-4 left-14">
              <button className="p-2  rounded-lg bg-black text-white shadow-lg hover:bg-white  hover:text-black transition-all duration-[.3s] opacity-80 "
                onClick={()=>buttonhandler(item)}>
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full rounded-md h-full "
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
