import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from '../components/CoffeeCard';
import { CoffeesContext } from '../Provider/CoffesPorvider';

const Home = () => {

  // 
  const {coffees, setCoffees} = useContext(CoffeesContext)
  if(!coffees) return
  
    return (
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10'>
          {
            coffees.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
          }
        </section>
    );
};

export default Home;