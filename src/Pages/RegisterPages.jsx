import RegisterForm from '../Component/RegisterForm';
import React from 'react';

const RegisterPages = () => {
  return (
    <section className='m-auto max-w-lg my-10 px-6'>
    <h1 className="text-3xl font-bold mb-6">Register</h1>
  <RegisterForm />
</section>  );
};

export default RegisterPages; // Ensure there is a default export
