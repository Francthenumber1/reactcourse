import { useState } from 'react';
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditservicesPage = ({ updateservicesSubmit }) => {
  const services = useLoaderData();
  const [title, setTitle] = useState(services.title);
  const [type, setType] = useState(services.type);
  const [location, setLocation] = useState(services.location);
  const [description, setDescription] = useState(services.description);
  const [Pricing, setPricing] = useState(services.Pricing);
  const [companyName, setCompanyName] = useState(services.company.name);
  const [companyDescription, setCompanyDescription] = useState(
    services.company.description
  );
  const [contactEmail, setContactEmail] = useState(services.company.contactEmail);
  const [contactPhone, setContactPhone] = useState(services.company.contactPhone);

  const navigate = useNavigate();
  const { id } = useParams();

  const submitForm = (e) => {
    e.preventDefault();

    const updatedservices = {
      id,
      title,
      type,
      location,
      description,
      Pricing,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };

    updateservicesSubmit(updatedservices);

    toast.success('Dienst wurde erfolgreich aktualisiert!');

    return navigate(`/servicess/${id}`);
  };

  return (
    <section className='bg-indigo-50'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <form onSubmit={submitForm}>
            <h2 className='text-3xl text-center font-semibold mb-6'>
              Dienst aktualisieren
            </h2>

            <div className='mb-4'>
              <label
                htmlFor='type'
                className='block text-gray-700 font-bold mb-2'
              >
                Dienstart
              </label>
              <select
                id='type'
                name='type'
                className='border rounded w-full py-2 px-3'
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value='Full-Time'>Vollzeit</option>
                <option value='Part-Time'>Teilzeit</option>
                <option value='Remote'>Remote</option>
                <option value='Internship'>Praktikum</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Dienstname
              </label>
              <input
                type='text'
                id='title'
                name='title'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='z.B. Professioneller Maler in Berlin'
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='description'
                className='block text-gray-700 font-bold mb-2'
              >
                Beschreibung
              </label>
              <textarea
                id='description'
                name='description'
                className='border rounded w-full py-2 px-3'
                rows='4'
                placeholder='Fügen Sie Pflichten, Erwartungen, Anforderungen, usw. hinzu'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className='mb-4'>
              <label
                htmlFor='type'
                className='block text-gray-700 font-bold mb-2'
              >
                Preis
              </label>
              <select
                id='Pricing'
                name='Pricing'
                className='border rounded w-full py-2 px-3'
                required
                value={Pricing}
                onChange={(e) => setPricing(e.target.value)}
              >
                <option value='Under 50€'>Unter 50€</option>
                <option value='€50 - 60'>€50 - 60</option>
                <option value='€60 - 70'>€60 - 70</option>
                <option value='€70 - 80'>€70 - 80</option>
                <option value='€80 - 90'>€80 - 90</option>
                <option value='€90 - 100'>90€ - 100€</option>
                <option value='€100 - 125'>100€ - 125€</option>
                <option value='€125 - 150'>125€ - 150€</option>
                <option value='€150 - 175'>150€ - 175€</option>
                <option value='€175 - 200'>€175 - 200€</option>
                <option value='Over €200'>Über 200€</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Standort
              </label>
              <input
                type='text'
                id='location'
                name='location'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Dienst-Standort'
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <h3 className='text-2xl mb-5'>Anbieterinformationen</h3>

            <div className='mb-4'>
              <label
                htmlFor='company'
                className='block text-gray-700 font-bold mb-2'
              >
                Anbietername
              </label>
              <input
                type='text'
                id='company'
                name='company'
                className='border rounded w-full py-2 px-3'
                placeholder='Name des Anbieters'
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='company_description'
                className='block text-gray-700 font-bold mb-2'
              >
                Anbieterbeschreibung
              </label>
              <textarea
                id='company_description'
                name='company_description'
                className='border rounded w-full py-2 px-3'
                rows='4'
                placeholder='Was bietet der Anbieter an?'
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              ></textarea>
            </div>

            <div className='mb-4'>
              <label
                htmlFor='contact_email'
                className='block text-gray-700 font-bold mb-2'
              >
                Kontakt-E-Mail
              </label>
              <input
                type='email'
                id='contact_email'
                name='contact_email'
                className='border rounded w-full py-2 px-3'
                placeholder='E-Mail-Adresse für Bewerber'
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='contact_phone'
                className='block text-gray-700 font-bold mb-2'
              >
                Kontakt-Telefon
              </label>
              <input
                type='tel'
                id='contact_phone'
                name='contact_phone'
                className='border rounded w-full py-2 px-3'
                placeholder='Optionale Telefonnummer für Bewerber'
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>

            <div>
              <button
                className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Dienst aktualisieren
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default EditservicesPage;
