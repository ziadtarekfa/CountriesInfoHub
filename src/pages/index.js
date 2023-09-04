import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import CountryCard from '@/components/CountryCard';



export default function Home() {

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all").then((response) => {
      return response.json();
    }).then((data) => {
      setCountries(data);
    })
  }, []);

  return (
    <main>
      <header className='flex justify-between items-center py-8 px-6 bg-white shadow-md'>
        <h2 className='font-bold'>Where in the world?</h2>
        <button className='bg-transparent font-semibold'>Dark Mode</button>
      </header>
      <div className='flex flex-col justify-between h-36 px-4 mt-6'>
        <input className='p-3 rounded-md' placeholder="Search for a country" id="search"></input>
        <select className='p-3 pr-0 rounded-md w-[60%]' id="region-selector">
          <option defaultValue>Filter by Region</option>
          <option>Africa</option>
          <option>America</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </div>

      <div className='px-10'>
        {
          countries.map((country, index) => {
            return (
              <CountryCard key={index} country={country} />
            );
          })
        }
      </div>
    </main>
  )
}
