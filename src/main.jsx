import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Contact from './components/contact.jsx'
import About from './components/About.jsx'
import Body from './components/Body.jsx'
import RestaurantMenu from './components/RestaurantMenu.jsx'

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
],
   errorElement: <Error />,
  },
 
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < RouterProvider router={appRouter}/>
  </React.StrictMode>,
)
