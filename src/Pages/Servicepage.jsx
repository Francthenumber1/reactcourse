import Servicelistingsfile from '../Component/Servicelistingsfile';
import React from 'react';

const ServicePage = () => {
  return (
    <section className='bg-blue-50 px-4 py-6'>
      {/* Heading */}
      <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
        Dienstleistungen durchsuchen
      </h2>

      {/* Search and Filter Bar */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between mb-6">
        {/* Search Bar */}
        <div className="flex items-center w-full md:w-2/3 mb-4 md:mb-0">
          <input
            type="text"
            className="border border-gray-300 rounded-l-lg p-2 w-full"
            placeholder="Suchen Sie nach Titel, Ort oder Beschreibung"
            disabled // Disabled to make it non-functional
          />
          <button
            className="bg-indigo-500 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-600"
            disabled // Disabled to make it non-functional
          >
            Suchen
          </button>
        </div>

        {/* Filter Dropdown */}
        <div className="w-full md:w-1/3 flex justify-end">
          <select
            className="border border-gray-300 rounded-lg p-2 w-full md:w-auto"
            disabled // Disabled to make it non-functional
          >
            <option value="">Filtern nach</option>
            <option value="qualifikation">Qualifikation</option>
            <option value="preis">Preis</option>
          </select>
        </div>
      </div>

      {/* Service Listings */}
      <Servicelistingsfile />
    </section>
  );
};

export default ServicePage;
