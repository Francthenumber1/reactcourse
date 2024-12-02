import { useState } from "react";
import React from 'react'
import {FaMapMarker} from 'react-icons/fa'
import { Link } from "react-router-dom";


const Serviceslistings = ({Services}) => 
  {
  {/*here is to cut the description to show only that what is required i.e to make it shorter this is done using a component use state and a substring method */}
  const [Showfulldescription , setShowfulldescription] = useState(false);

  let description=Services.description;
  if (!Showfulldescription)
    {
      description=description.substring(0, 90)+'...';
    }

  
  return (
    <div className="bg-white rounded-xl shadow-md relative">
    <div className="p-4">
      <div className="mb-6">
        <div className="text-gray-600 my-2">{Services.type}</div>
        <h3 className="text-xl font-bold">{Services.title}</h3>
      </div>

      <div className="mb-5">{description}</div>
        <button onClick={()=>setShowfulldescription(prevState=>!prevState)} className="text-indigo-500 mb-5 hover:text-red-500">{Showfulldescription ? 'less':'more'} </button>
      <h3 className="text-indigo-500 mb-2">{Services.Pricing}/ Stunde</h3>

      <div className="border border-gray-100 mb-5"></div>

      <div className="flex flex-col lg:flex-row justify-between mb-4">
      <div className="text-rose-500 mb-3">
  <FaMapMarker className="inline text-lg mb-1" />
  {Services.location}
</div>

        <Link
 to={`/Serviceslink/${Services.id}`}

  className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
>
  Read More
</Link>

      </div>
    </div>
  </div>
  )
}

export default Serviceslistings