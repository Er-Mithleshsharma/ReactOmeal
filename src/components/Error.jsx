import { useRouteError } from 'react-router-dom';
import img from '../assets/error.jpg'
const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className='flex justify-around items-center flex-wrap sm:flex-nowrap gap-20 mt-10'>
      <h1 className='text-5xl font-bold'>Try Reloading</h1>
      <h3>
        
        <img className='sm:w-[800px] sm:h-[600px]' src={img} alt="" />
      </h3>
    </div>
  );
};

export default Error;
