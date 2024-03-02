import { useState,useEffect } from "react"

const useOnlineStatus = ()=>{
     console.log("useonline")
     const [onlineStatus,setOnlineStatus] = useState(true)
     useEffect(() => {
          console.log("useonline effect")
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