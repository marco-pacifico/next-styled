import { useEffect } from "react";

const setLight = () => {
    localStorage.setItem("theme","light");
    document.documentElement.setAttribute("data-theme","light");
}

const setDark = () => {
    localStorage.setItem("theme","dark");
    document.documentElement.setAttribute("data-theme","dark");
}

const toggleTheme = (e) => {
    e.target.checked ? setDark() : setLight();
}

if (typeof window !== 'undefined') {
    // Perform localStorage action
    const storedTheme = localStorage.getItem("theme");

    const prefersDark = 
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

    const defaultDark = 
        storedTheme === "dark" ||
        (storedTheme === null && prefersDark)

    defaultDark && setDark();
}


export default function DarkToggle() {
    return (
        <label htmlFor="checkbox">
            <input
                type="checkbox"
                id="checkbox"
                onChange={toggleTheme}
                
            />
        </label>
    );
};