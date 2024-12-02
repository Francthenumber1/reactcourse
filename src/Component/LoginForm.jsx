import { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Logic for login goes here
    console.log('Eingeloggt mit', email, password);
  };

  return (
    <form onSubmit={handleLogin} className='bg-white p-6 rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-4'>Anmelden</h2>
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
      <button type='submit' className='bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg'>
        Anmelden
      </button>
    </form>
  );
};

export default LoginForm;
