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
      <header className='flex justify-between py-2 px-6'>
        <h2>Where in the world</h2>
        <button className='bg-transparent'>Dark Mode</button>
      </header>
      <div className='flex justify-between h-10 px-4 mt-2'>
        <input placeholder="Search for a country" id="search"></input>
        <select id="region-selector">
          <option defaultValue>Filter by Region</option>
          <option>Africa</option>
          <option>America</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </div>

      <button>Back</button>
      <div>
        {
          countries.map((country, index) => {
            return (
              <CountryCard key={index} country={country} />
            );
          })
        }
        {/* countries container */}
      </div>
    </main>
  )
}
