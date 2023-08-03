/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../../data.json";
import Nav from "../components/Nav";

export default function CountryDetail() {
    const countryDetail = `${useParams().countryName}`;

    const countryName = (alpha3) => {
        let country = data.find((obj) => obj.alpha3Code === alpha3);
        return country.name;
    };

    const details = data
        .filter((obj) => obj.name === countryDetail)
        .map((obj) => (
            <div key={obj.name} className="detail-container">
                <div className="flag-container">
                    <img src={obj.flags.svg} alt={`${obj.name} Flag`} />
                </div>
                <section className="data-container">
                    <h2>{obj.name}</h2>
                    <div className="parts">
                        <section className="data--first-part">
                            <p>
                                <span className="bold">Native Name: </span>
                                {obj.nativeName && obj.nativeName}
                            </p>
                            <p>
                                <span className="bold">Population: </span>
                                {obj.population &&
                                    obj.population.toLocaleString("es-US")}
                            </p>
                            <p>
                                <span className="bold">Region: </span>
                                {obj.region && obj.region}
                            </p>
                            <p>
                                <span className="bold">Sub Region: </span>
                                {obj.subregion && obj.subregion}
                            </p>

                            {obj.capital && (
                                <p>
                                    <span className="bold">Capital: </span>
                                    {obj.capital}
                                </p>
                            )}
                        </section>
                        <section className="data--second-part">
                            <p>
                                <span className="bold">Top Level Domain: </span>
                                {obj.topLevelDomain && obj.topLevelDomain}
                            </p>

                            {obj.currencies && (
                                <p>
                                    <span className="bold">Currencies: </span>
                                    {obj.currencies[0].name}
                                </p>
                            )}
                            <p>
                                <span className="bold">Languages: </span>
                                {obj.languages &&
                                    obj.languages
                                        .map(({ name: language }) => language)
                                        .join(", ")}
                            </p>
                        </section>
                    </div>
                    <section className="border-countries">
                        <h3 className="title bold">Border Countries:</h3>
                        <div className="borders-container">
                            {obj.borders &&
                                obj.borders.map((code) => (
                                    <a
                                        href={`/detail/${countryName(code)}`}
                                        key={code}>
                                        <div className="border">
                                            {countryName(code)}
                                        </div>
                                    </a>
                                ))}
                        </div>
                    </section>
                </section>
            </div>
        ));

    return (
        <StyledCountryDetail>
            <Nav />
            <header>
                <button className="back">
                    <a href="/" type="button">
                        <div className="icon-container">
                            <box-icon
                                name="arrow-back"
                                color="var(--Text)"
                                size="s"></box-icon>
                        </div>
                        Back
                    </a>
                </button>
            </header>
            <main>
                <article>{details}</article>
            </main>
        </StyledCountryDetail>
    );
}

const StyledCountryDetail = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--Background);
    color: var(--Text);

    header,
    main {
        width: 100%;
        max-width: 1440px;
        padding: 20px;
    }

    .back {
        width: 100px;
        height: 30px;
        border: none;
        margin: 20px 0 30px;
    }

    .back a {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5px;
        background: var(--Elements);
        color: var(--Text);
    }

    .icon-container {
        width: 20px;
        height: 20px;
    }

    .flag-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .flag-container img {
        width: 100%;
        height: 100%;
    }

    h2 {
        font-size: 35px;
        margin: 10px 0;
    }

    .data-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .data--first-part,
    .data--second-part {
        line-height: 35px;
    }

    .borders-container {
        width: 100%;
        margin: 20px 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
        gap: 20px;
    }

    .border {
        width: 100%;
        min-width: fit-content;
        min-height: 40px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--Elements);
        color: var(--Text);
    }

    .bold {
        font-weight: 600;
    }

    @media (min-width: 1024px) {
        .detail-container {
            width: 100%;
            max-width: 1440px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 100px;
        }

        .flag-container {
            width: 65%;
            max-width: 700px;
        }

        .data-container {
            width: 35%;
        }

        h2 {
            font-size: 50px;
        }

        .parts {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
        }

        h3 {
            width: 250px;
        }
    }
`;
