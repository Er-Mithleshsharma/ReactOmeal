import React from 'react'
import {useState,useEffect} from 'react'
const useMobileMenu = (resId) => {
    // const FETCH_MENU_URL_MOBILE1 =
    // "https://corsproxy.org/?"+encodeURIComponent("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&submitAction=ENTER&restaurantId="+resId);
    const FETCH_MENU_URL_MOBILE ="https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&submitAction=ENTER&restaurantId="+resId;
    const [mobilemenu,setmobilemenu]=useState([])
      async function mob(){
         let data;
          let menuData;
          let json;
            data = await fetch(FETCH_MENU_URL_MOBILE);
            json = await data.json();
            menuData = json.data;
            setmobilemenu(menuData)
      }
    
         useEffect(()=>{
             mob()
         },[])

          return mobilemenu;
}

export default useMobileMenu