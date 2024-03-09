import { useDispatch } from 'react-redux';
import { CDN_URL } from '../utils/constants';
import { addItem } from '../utils/cartSlice';
import React from 'react';
  import { ToastContainer, toast } from 'react-toastify';
  import { Bounce } from 'react-toastify'; // Import Bounce transition
  import 'react-toastify/dist/ReactToastify.css';
const ItemList = ({ items}) => {
  const notify = () => toast.success('Added to Cart!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
    });
    const dispatch  = useDispatch()
 function buttonhandler(item)
 {
  notify()
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
          <div className="sm:w-3/12 p-4 relative">
            <div className="absolute bottom-4 left-14">
              <button className="p-2  rounded-lg bg-black text-white shadow-lg hover:bg-white  hover:text-black transition-all duration-[.3s] opacity-80 "
                onClick={()=>buttonhandler(item)}>
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full rounded-md sm:h-full  "
            />
          </div>
        </div>
      ))}
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition: Bounce
/>
    </div>
  );
};

export default ItemList;
