import {useState,useEffect} from 'react'
import {MENU_API} from "./constants"
const useRestrauntMenu = (resId)=>{
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
      }, []);
    
      const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json);
     
      };  
       console.log(resInfo)
      return resInfo;
}
export default useRestrauntMenu