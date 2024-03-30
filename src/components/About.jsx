import {useState,useEffect} from 'react'
import { FaGithub } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
const About = ()=>{
    const [data,setdata] = useState({})
    useEffect(()=>{
          github_api()
    },[])
    async function github_api()
    {
         const data = await fetch('https://api.github.com/users/Er-Mithleshsharma');
         const json = await data.json(); 
         setdata(json)
    }
    if(!data)return

    return(
        <div>
        <div className='flex justify-center items-center text-4xl gap-5 p-20 pb-5'>
            <img src={data.avatar_url} alt=""  className='rounded-full h-56 w-56'/>
            {data.login} <FaGithub className=' cursor-pointer' onClick={()=>{
                window.location.href = data.html_url
            }}/>

        </div>
        <div>
            <div className='about  flex items-center flex-col pb-24 pt-5'>
                   <h1 className='font-bold text-2xl flex gap-2'>About Me <CgProfile className='cursor-pointer pt-1' size={30} onClick={()=>{
                    window.location.href = "https://mithleshsharma.netlify.app/"
                   }} /></h1>
                   <p className='text-lg font-semibold w-[800px] pt-5'>A dedicated BTech student with a passion for technology and innovation. I'm currently immersed in my studies, focusing on mastering the MERN (MongoDB, Express.js, React.js, Node.js) stack.</p>
            </div>
        </div>
        </div>
    )
}
export default About