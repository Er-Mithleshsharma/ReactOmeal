import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Contact from './contact.jsx'
import About from './About.jsx'
import Body from './Body.jsx'
import RestaurantMenu from './RestaurantMenu.jsx'
import Error from './Error.jsx'
import Cart from './Cart.jsx'

const RoutingConfig = () => {
  return (
    < RouterProvider router={appRouter}/>
  )
}
const appRouter = createBrowserRouter([
    {
        path :"/",
        element:<App/>,
        children: [ 
         {
          path:"/",
          element:<Body/>
         } ,
    {
  
      path :"/about",
      element:<About/>
    },
    {
      path :"/contact",
      element:<Contact/>
    },
    {
      path: '/restaurants/:resId',
      element: <RestaurantMenu />,
    },
    {
      path: '/cart',
      element: <Cart/>
    }
  ],
     errorElement: <Error />,
    },
   
  ])

export default RoutingConfig