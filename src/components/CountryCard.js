import Image from "next/image";
const CountryCard = ({ country }) => {
    return (
        <div>
            <div className="flex flex-col justify-self-center rounded-md w-[80%]">
                <Image className="h-44 w-full rounded-md" src={country.flags.svg} alt="flag" width={100} height={100} />
            </div>
            <div className="p-10">
                <h1>{country.name}</h1>
                <p><strong>Population: </strong>{country.population}</p>
                <p><strong>Region: </strong>{country.region}</p>
                <p><strong>Capital: </strong>{country.capital}</p>
            </div>
        </div>
    );
}

export default CountryCard;