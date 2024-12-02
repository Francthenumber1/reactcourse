import { useState } from 'react';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('Kunde'); // Default to Kunde (Client)
  const [companyName, setCompanyName] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    const newUser = {
      email,
      password,
      userType,
      ...(userType === 'Dienstleister' && { companyName, companyDescription }),
    };

    // Logic for registration based on `newUser` object
    console.log('Benutzer registrieren:', newUser);
  };

  return (
    <form onSubmit={handleRegister} className='bg-white p-6 rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-4'>Registrieren</h2>

      <div className='mb-4'>
        <label className='block text-gray-700'>Benutzertyp</label>
        <select
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          className='border rounded w-full py-2 px-3'
          required
        >
          <option value='Kunde'>Kunde</option>
          <option value='Dienstleister'>Dienstleister</option>
        </select>
      </div>

      <div className='mb-4'>
        <label className='block text-gray-700'>E-Mail</label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='border rounded w-full py-2 px-3'
          required
        />
      </div>

      <div className='mb-4'>
        <label className='block text-gray-700'>Passwort</label>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='border rounded w-full py-2 px-3'
          required
        />
      </div>

      <div className='mb-4'>
        <label className='block text-gray-700'>Passwort bestätigen</label>
        <input
          type='password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className='border rounded w-full py-2 px-3'
          required
        />
      </div>

      {userType === 'Dienstleister' && (
        <>
          <div className='mb-4'>
            <label className='block text-gray-700'>Firmenname</label>
            <input
              type='text'
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className='border rounded w-full py-2 px-3'
              required
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700'>Dienstbeschreibung</label>
            <textarea
              value={companyDescription}
              onChange={(e) => setCompanyDescription(e.target.value)}
              className='border rounded w-full py-2 px-3'
              rows='4'
              required
            ></textarea>
          </div>
        </>
      )}

      <button type='submit' className='bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg'>
        Registrieren
      </button>
    </form>
  );
};

export default RegisterForm;
