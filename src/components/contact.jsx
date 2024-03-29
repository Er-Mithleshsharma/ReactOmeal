import React from 'react'

const Contact = () => {
  return (
    <div className='w-full p-4 text-[#ccb38d] h-fit bg-gradient-to-b from-black to-[#5d0c1d]'>
        <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto'>
            <div className=''>
                <p className='inline text-4xl font-bold border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>
            <div  name='contact' className='flex items-center justify-center'>
                <form 
                action = "https://getform.io/f/zazkykob"
                method='POST'
                className='flex flex-col w-full md:w-1/2'>
                    <input 
                    type="text" 
                    name='name' 
                    placeholder='Enter your name' 
                    className='p-2 text-white bg-transparent border-2 rounded-md focus:outline-none border-[#ccb38d]' />
                    <input 
                    type="text" 
                    name='email' 
                    placeholder='Enter your email' 
                    className='p-2 my-4 text-white bg-transparent border-2 rounded-md focus:outline-none border-[#ccb38d]' />
                    <textarea 
                    name="message" 
                    placeholder='Enter your message'
                    rows="10" 
                    className='p-2 bg-transparent border-2 focus:outline-none border-[#ccb38d]'></textarea>
                    <button className='flex items-center px-6 py-3 mx-auto my-8 text-white duration-300 rounded-md bg-gradient-to-b from-[#000000] to-[#5d0c1d] hover:scale-110'>Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}
export default Contact