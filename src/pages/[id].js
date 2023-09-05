import Image from "next/image";

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
        <div>
            <Image src={country.flag} width={200} height={200} />

            <section>

                <h1>{country.name}</h1>
                <section>
                    <p><span>Population: </span>{country.population}</p>
                    <p><span>Region: </span>{country.region}</p>
                    <p><span>Sub Region: </span>{country.subregion}</p>
                    <p><span>Capital: </span>{country.capital}</p>

                </section>
                <section>
                    <p><span>Top Level Domain: </span>{country.topLevelDomain}</p>
                    <p><span>Currencies: </span>{country.currencies.name}</p>
                    <p><span>Langauges: </span>{country.languages.name}</p>
                </section>
                <section>
                    <h4>Border Countries:</h4>
                    {
                        country.borders.map((border) => {
                            return (
                                <div>{border}</div>
                            );
                        })
                    }
                </section>
            </section>
        </div>
    );
}

export default CountryDetails;