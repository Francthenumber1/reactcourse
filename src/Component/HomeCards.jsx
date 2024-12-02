import { Link } from 'react-router-dom'; // Correct import for React Router
import Cards from './Cards.jsx'; // Ensure this matches the filename exactly

import React from 'react';

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          {/* Card for Clients */}
          <Cards bg="bg-red-100">
            <h2 className="text-2xl font-bold">Für Kunden</h2>
            <p className="mt-2 mb-4">
              Finden Sie den perfekten Dienstleister für Ihre Bedürfnisse
            </p>
            <Link
              to="/Serviceslink"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Dienstleistungen durchsuchen
            </Link>
          </Cards>
          
          {/* Card for Service Providers */}
          <Cards bg="bg-red-100">
            <h2 className="text-2xl font-bold">Für Dienstleister</h2>
            <p className="mt-2 mb-4">
              Präsentieren Sie Ihr Handwerk, um die perfekten Kunden zu gewinnen
            </p>
            <Link
              to="/add-job"
              className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Dienstleistung hinzufügen
            </Link>
          </Cards>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
