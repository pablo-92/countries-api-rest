/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useState, useEffect } from "react";

export default function ThemeButton() {
    const [theme, setTheme] = useState("light");

    const changeTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.body.dataset.theme = theme;
    };

    useEffect(() => {
        const getStorage = () => localStorage.getItem("theme");
        if (getStorage) {
            setTheme(getStorage);
        }
        document.body.dataset.theme = theme;
    }, [theme]);

    return (
        <StyledThemeButton onClick={changeTheme}>
            <box-icon
                name="moon"
                type={theme === "light" ? "regular" : "solid"}
                color="var(--Text)"></box-icon>
            Dark Mode
        </StyledThemeButton>
    );
}

const StyledThemeButton = styled.button`
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    background-color: transparent;
    color: var(--Text);
`;
