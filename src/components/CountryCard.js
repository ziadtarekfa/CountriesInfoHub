import Image from "next/image";
const CountryCard = ({ country }) => {
    return (
        <div className="mt-8 relative">

            <Image className=" w-full h-full rounded-t-md" src={country.flags.svg} alt="flag"
                width={200} height={200} />

            <div className="p-10 bg-white rounded-b-md">
                <h1 className="font-bold text-3xl break-words">{country.name}</h1>
                <p className="mt-4"><span className="font-semibold">Population: </span>{country.population}</p>
                <p><span className="font-semibold">Region: </span  >{country.region}</p>
                <p><span className="font-semibold">Capital: </span>{country.capital}</p>
            </div>
        </div>
    );
}

export default CountryCard;