import React, { useState } from 'react'
import ItemList from './ItemList'
import { BiSolidDownArrow } from "react-icons/bi";
const RestrauntCategory = ({data}) => {
  const [showItems,setShowItems] = useState(false)
  function clickhandler()
  {
    setShowItems(!showItems);
  }
    console.log(data)
  return (
          <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span onClick={clickhandler}><BiSolidDownArrow /></span>
        </div>
        {/* Accordion Body */}

         { showItems && < ItemList items={data.itemCards} />}
      </div>
  )
}

export default RestrauntCategory