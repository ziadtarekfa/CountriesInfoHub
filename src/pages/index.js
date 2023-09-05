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

      <div className='flex flex-col justify-between h-36 px-4 mt-6 sm:flex-row sm:h-auto'>
        <input className='p-3 rounded-md sm:w-96' placeholder="Search for a country" id="search"></input>
        <select className='p-3 pr-0 rounded-md w-[60%] sm:w-auto sm:pr-8' id="region-selector">
          <option defaultValue>Filter by Region</option>
          <option>Africa</option>
          <option>America</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </div>

      <div className='px-10 grid grid-cols-1 grid-rows-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-10'>
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
