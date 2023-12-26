import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-6xl font-bold text-primary'>GPT_Genius</h1>
          <p className='py-6 text-lg leading-loose'>
            GPT_Genius is a web application that allows you to create and
            participate in tournaments.
          </p>
          <Link href='/chat' className='btn btn-secondary'>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
