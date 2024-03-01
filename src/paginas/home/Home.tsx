import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <>
        <div className="bg-indigo-800 flex justify-center">
          <div className=' container grid grid-cols- text-white'>
            <div className="justify-center flex-col gap-9 items-center  py-9">
            <br />
              <br />
              <br />
              <br />
              <h2 className='text-5xl font-bold'>Seja bem vinde a nossa Farmacia!</h2>
              <br />
              <br />
              <br />
              <br />
  
              <div className="text-center flex justify-center flex justify- gap-4">
              
                <Link to='/categorias' className='rounded bg-white text-blue-800 py-2 px-4'>Ver categorias</Link>
              </div>
            </div>
  
            <div className="flex justify-center ">
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;