/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import data from "../../data.json";
import { styled } from "styled-components";
import { useState } from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const [state, setState] = useState({
        region: "",
        amount: 20,
        search: "",
        open: false,
    });

    const cards = data
        .filter((obj) => state.region === "" || obj.region === state.region)
        .slice(0, state.amount)
        .map((obj) => <Card key={obj.name} {...obj} />);

    const more = () => {
        setState((prevState) => {
            return { ...prevState, amount: prevState.amount + 20 };
        });
    };

    const dropDown = () => {
        setState((prevState) => ({ ...prevState, open: !prevState.open }));
    };

    console.log(state.open);
    return (
        <StyledHome>
            <Nav />
            <div className="max-width">
                <header>
                    <div className="search-input">
                        <img src="/icons/search.svg" alt="search icon" />
                        <form
                            onSubmit={(e) => {
                                e.preventDefault(),
                                    navigate(`/detail/${state.search}`);
                            }}>
                            <input
                                type="search"
                                placeholder="Search for a country..."
                                onChange={(e) => {
                                    setState({
                                        ...state,
                                        search: e.target.value,
                                    });
                                }}
                            />
                        </form>
                    </div>

                    <section className="filter-menu">
                        <button
                            className="drop-down-btn"
                            selected="selected"
                            onClick={dropDown}>
                            Filter by Region
                            <box-icon
                                name="chevron-down"
                                color="var(--Text)"
                                style={{
                                    transform: state.open
                                        ? "rotate(180deg)"
                                        : "rotate(0deg)",
                                    transition: "transform 0.3s ease-in-out",
                                }}></box-icon>
                        </button>
                        <menu
                            onClick={(e) =>
                                setState({
                                    ...state,
                                    region: e.target.value,
                                    open: false,
                                })
                            }
                            style={{
                                top: state.open ? "55px" : "0px",
                                opacity: state.open ? "1" : "0",
                            }}>
                            <button className="option" value="Africa">
                                Africa
                            </button>
                            <button className="option" value="Americas">
                                Americas
                            </button>
                            <button className="option" value="Asia">
                                Asia
                            </button>
                            <button className="option" value="Europe">
                                Europe
                            </button>
                            <button className="option" value="Oceania">
                                Oceania
                            </button>
                        </menu>
                    </section>
                </header>
                <main>
                    {state.region && (
                        <h2 className="home-title">{state.region}</h2>
                    )}
                    <section className="cards-container">{cards}</section>

                    <div className="btn-container">
                        <button className="show-more-btn" onClick={more}>
                            Show more...
                        </button>
                    </div>
                </main>
            </div>
        </StyledHome>
    );
}

const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: var(--Background);

    .max-width {
        width: 100%;
        max-width: 1440px;
    }

    .filter-menu {
        width: 200px;
        position: relative;
    }

    .drop-down-btn {
        width: 100%;
        height: 50px;
        border: none;
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background: var(--Elements);
        color: var(--Text);
        box-shadow: 0 0 1em var(--Shadow);
        text-align: left;
        padding: 0 20px;
        position: relative;
        z-index: 2;
        outline: none;
    }

    .drop-down-btn:hover {
        cursor: pointer;
    }

    .filter-menu menu {
        width: 200px;
        background: var(--Elements);
        color: var(--Text);
        box-shadow: 0 0 1em var(--Shadow);
        border-radius: 5px;
        position: absolute;
        z-index: 1;
        transition: all 0.3s ease-in-out;
    }

    .option {
        width: 100%;
        height: 50px;
        border: none;
        background: var(--Elements);
        color: var(--Text);
        border-top: 3px solid var(--Background);
        display: flex;
        align-items: center;
        padding: 20px;
    }

    .option:hover {
        cursor: pointer;
        background: var(--Background);
    }

    header {
        width: 100%;
        padding: 1em;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 1em;
    }

    .search-input {
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        padding: 10px 20px;
        gap: 1em;
        border-radius: 5px;
        background: var(--Elements);
        box-shadow: 0 0 1em var(--Shadow);
    }

    form {
        width: 100%;
    }

    input {
        width: 100%;
        height: fit-content;
        outline: none;
        border: none;
        background: var(--Elements);
        color: var(--Text);
    }

    input::placeholder {
        font-size: 1.2em;
        color: var(--Text);
    }

    .home-title {
        width: 100%;
        text-align: left;
        padding: 0 20px;
        color: var(--Text);
        font-size: 60px;
        text-shadow: 0 0 1em var(--Shadow);
    }

    .cards-container {
        width: 100%;
        padding: 1em;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
        gap: 2em;
        justify-items: center;
    }

    .btn-container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px 0 20px;
    }

    .show-more-btn {
        width: 120px;
        height: 35px;
        border: none;
        background: var(--Elements);
        color: var(--Text);
        box-shadow: 0 0 1em var(--Shadow);
    }

    .show-more-btn:hover {
        cursor: pointer;
    }

    @media (min-width: 768px) {
        header {
            flex-direction: row-reverse;
            justify-content: space-between;
        }

        .search-input {
            max-width: 700px;
        }
    }

    @media (min-width: 1024px) {
        background-image: url(/images/bg-world.png);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        background-attachment: fixed;
        background-blend-mode: multiply;
    }
`;
