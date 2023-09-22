import React from 'react';

const LoginForm = () => {
  return (
    <div className='w-full h-screen bg-registration'>
      <div className='bg-image-form w-full h-screen grid place-content-center'>
        <div className='form-bg px-3 py-6 flex flex-col gap-16 items-center rounded-lg'>
          <h1 className='font-ace text-2xl text-white'>Sign In</h1>
          <form className='flex flex-col gap-7 items-center'>
            <input type='text' placeholder='Username' className='font-ace text-lg border-white rounded-full placeholder-white py-5'/>
            <button type='submit' className='bg-white font-ace text-slate-600 py-2 px-5 rounded-full'> Log In </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
