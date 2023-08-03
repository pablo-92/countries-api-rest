/* eslint-disable react/prop-types */
import styled from "styled-components";
import ThemeButton from "./ThemeButton";

export default function Nav() {
    return (
        <StyledNav>
            <div className="max-width">
                <p className="nav-title">
                    <a href="/">Where in the world?</a>
                </p>
                <ThemeButton />
            </div>
        </StyledNav>
    );
}

const StyledNav = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
    background: var(--Elements);
    box-shadow: var(--Shadow);

    .nav-title a {
        color: var(--Text);
        font-weight: 800;
    }

    .max-width {
        width: 100%;
        max-width: 1440px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;
