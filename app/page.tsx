import React from 'react';

const Home: React.FC = () => {
  return (
    <main className='w-full h-screen flex justify-center items-center'>
      <section className='text-center'>
        <h1 className='text-xl font-semibold'>Hi there! Welcome.</h1>
        <p className='text-sm text-primary/50'>
          This is the solution for the assignment by Vocso.
        </p>
      </section>
    </main>
  );
};


export default Home;