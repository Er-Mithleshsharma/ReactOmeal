import React, { Suspense , lazy } from 'react'
import App from '../App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
const Contact = lazy(() => import('./contact'));
const About = lazy(() => import('./About'));
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
      element:
      <Suspense> 
      <About/>
      </Suspense>
     
    },
    {
      path :"/contact",
      element:
      <Suspense>
         <Contact/>
         </Suspense>
     
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