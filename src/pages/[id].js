import Image from "next/image";

import Link from "next/link";



export const getStaticPaths = async () => {
    const res = await fetch('https://restcountries.com/v2/all');
    const countries = await res.json();


    const paths = countries.map((country) => {
        return {
            params: { id: country.name }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://restcountries.com/v2/name/' + id);
    const countries = await res.json();
    return {
        props: { countries }
    }
}



const CountryDetails = ({ countries }) => {
    const country = countries[0];

    return (
        <div className="mt-10 m-auto px-7 pb-12 max-w-[500px] md:max-w-none md:flex md:flex-col">
            <Link href='/'>
                <button className="bg-white px-8 py-1 rounded-sm shadow-xl"  >Back</button>
            </Link>

            <div className="md:flex md:items-center md:absolute md:top-[30%] md:max-w-[1118px] md:self-center md:w-auto ">
                <img className="mt-10 md:w-[50%] md:max-w-xl" src={country.flag} alt="flag" />

                <section className="mt-8 md:ml-16">

                    <h1 className="font-bold text-2xl">{country.name}</h1>
                    <div className="md:flex">
                        <section className="mt-6 flex flex-col justify-between text-md overflow-hidden">
                            <p><span className="font-semibold">Native Name: </span>{country.nativeName}</p>
                            <p><span className="font-semibold">Population: </span>{country.population}</p>
                            <p><span className="font-semibold">Region: </span>{country.region}</p>
                            <p><span className="font-semibold">Sub Region: </span>{country.subregion}</p>
                            <p><span className="font-semibold">Capital: </span>{country.capital}</p>

                        </section>
                        <section className="mt-8 text-md md:ml-20 overflow-hidden">
                            <p><span className="font-semibold">Top Level Domain: </span>{country.topLevelDomain}</p>
                            <div>
                                <span className="font-semibold">Currencies: </span>
                                {
                                    country.currencies.map((currency, index) => {
                                        return (
                                            <span key={index}>{currency.name}</span>
                                        )
                                    })
                                }
                            </div>

                            <div className="overflow-hidden">
                                <span className="font-semibold">Languages: </span>
                                {
                                    country.languages.map((language, index) => {
                                        return (
                                            <span key={index}>{language.name}</span>
                                        )
                                    })
                                }
                            </div>
                        </section>
                    </div>

                    <h4 className="font-semibold text-md mt-12 ">Border Countries: </h4>
                    <section className="flex mt-3">

                        {
                            country.borders.map((border, index) => {
                                return (
                                    <div key={index} className="px-8 mr-2 bg-white border-solid border border-gray-200 
                                    rounded ">{border}</div>
                                );
                            })
                        }
                    </section>
                </section>
            </div>


        </div>
    );
}

export default CountryDetails;