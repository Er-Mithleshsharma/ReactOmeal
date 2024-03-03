import { useState,useEffect } from "react"

const useOnlineStatus = ()=>{
     const [onlineStatus,setOnlineStatus] = useState(true)
     useEffect(() => {
          window.addEventListener('offline', () => {
            setOnlineStatus(false);
          });
      
          window.addEventListener('online', () => {
            setOnlineStatus(true);
          });
        }, []);
  // * boolean value
  return onlineStatus;      
}
export default useOnlineStatus;

// working - 
// firstly it will get mounted onto the dom 
// so it will be actively looking for online and offline events 
// at any point the event triggers it will chnage the state variable 
// which will trigger the component to get rerendered 

// Q- why useeffect is used 

// A- we only want it to be mounted for the first time and only one time not on every subsequent rerender
