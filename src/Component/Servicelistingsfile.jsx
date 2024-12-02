import { useState, useEffect } from "react";
import Servicelistings from "./Servicelistings.jsx";
import Spinner from "./Spinner.jsx";


import React from 'react'

const Servicelistingsfile = ({isHome= false}) => {
  // const JobListings = isHome ? services.slice(0,3):services;
  const [Services,setServices]=useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const fetchjobs = async () => {
      const apiUrl = isHome ? "/api/Services?_limit=3" : "/api/Services";
      try {
        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setServices(data); // Correct state updater
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchjobs();
  }, [isHome]);
  
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          { isHome ?'Recent Jobs':'Browse Jobs'}
        </h2>
        
        
         
         {loading?
          (<Spinner loading={loading}/>) :(
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {Services.map((Services)=>
        (
          <Servicelistings key ={Services.id} Services={Services} />
        
         ))}
         </div>

         
        )}
          
        
      </div>
    </section>
  )
}

export default Servicelistingsfile