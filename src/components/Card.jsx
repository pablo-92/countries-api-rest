/* eslint-disable react/prop-types */
import styled from "styled-components";

export default function Card(props) {
    return (
        <a href={`/detail/${props.name}`}>
            <StyledCard>
                <div className="img-container">
                    <img
                        src={props.flags.svg}
                        className="country-flag"
                        title={props.name}
                    />
                </div>
                <section>
                    <h2>{props.name}</h2>
                    <p>{`Population: ${props.population.toLocaleString(
                        "es-US"
                    )}`}</p>
                    <p>{`Region: ${props.region}`}</p>
                    <p>{props.capital && `Capital: ${props.capital}`}</p>
                </section>
            </StyledCard>
        </a>
    );
}

const StyledCard = styled.article`
    width: 20em;
    height: 25em;
    border-radius: 10px;
    overflow: hidden;
    background: var(--Elements);
    box-shadow: 0 0 1em var(--Shadow);
    color: var(--Text);

    .img-container {
        width: 100%;
        height: 180px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    section {
        padding: 20px;
    }

    h2 {
        font-size: 25px;
        margin: 10px 0;
    }
`;
