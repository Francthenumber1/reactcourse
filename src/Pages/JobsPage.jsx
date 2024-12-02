import { useParams, useLoaderData, Link, useNavigate } from "react-router-dom";
import React from "react";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";

const JobsPage = () => {
  const Services = useLoaderData();
  const navigate = useNavigate();

  const onDeleteClick = async (id) => {
    const confirmDelete = window.confirm("Möchten Sie diesen Job wirklich löschen?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/Services/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Fehler beim Löschen des Jobs.");
      alert("Job erfolgreich gelöscht.");
      navigate("/Serviceslink"); // Nach Löschung umleiten
    } catch (error) {
      console.error("Fehler beim Löschen des Jobs:", error);
      alert("Fehler beim Löschen des Jobs.");
    }
  };

  return (
    <>
      {/* Zurück */}
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/Serviceslink"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Zurück zur Job-Liste
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{Services.type}</div>
                <h1 className="text-3xl font-bold mb-4">{Services.title}</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <FaMapMarker className="text-orange-700 mr-1" />
                  <p className="text-orange-700">{Services.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">Jobbeschreibung</h3>
                <p className="mb-4">{Services.description}</p>

                <h3 className="text-indigo-800 text-lg font-bold mb-2">Gehalt</h3>
                <p className="mb-4">{Services.Pricing}</p>

                {/* Chat Button */}
                <Link
                  to={`/chat`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full mt-4 inline-block"
                >
                  Mit dem Dienstleiter chatten
                </Link>
              </div>
            </main>

            {/* Seitenleiste */}
            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Unternehmensinformationen</h3>
                <h2 className="text-2xl">{Services.company.name}</h2>
                <p className="my-2">{Services.company.description}</p>
                <hr className="my-4" />
                <h3 className="text-xl">Kontakt E-Mail:</h3>
                <p className="my-2 bg-indigo-100 p-2 font-bold">{Services.company.contactEmail}</p>
                <h3 className="text-xl">Kontakt Telefon:</h3>
                <p className="my-2 bg-indigo-100 p-2 font-bold">{Services.company.contactPhone}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Job verwalten</h3>
                <Link
                  to={`/services/edit/${Services.id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Job bearbeiten
                </Link>
                <button
                  onClick={() => onDeleteClick(Services.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Job löschen
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const jobloader = async ({ params }) => {
  try {
    const res = await fetch(`/api/Services/${params.id}`);
    if (!res.ok) {
      throw new Error(`Fehler beim Laden des Dienstes mit ID: ${params.id}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`Die Daten konnten nicht geladen werden: ${error.message}`);
  }
};

export { JobsPage as default, jobloader };
