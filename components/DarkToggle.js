import { useEffect, useState } from "react";


export default function DarkToggle() {

    const [hasMounted, setHasMounted] = useState(false);

    useEffect(()=> {
        setHasMounted(true);
    },[]);

    if (!hasMounted) {
        return null;
    }

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
    
    const storedTheme = localStorage.getItem("theme");
    
    const prefersDark = 
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const defaultDark = 
        storedTheme === "dark" ||
        (storedTheme === null && prefersDark)
    
    defaultDark && setDark();

    return (
        <label htmlFor="checkbox">
            <input
                type="checkbox"
                id="checkbox"
                onChange={toggleTheme}
                defaultChecked={defaultDark}
            />
        </label>
    );
};