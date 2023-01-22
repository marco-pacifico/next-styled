import { useEffect, useState } from "react";


export default function DarkToggle() {

    const [hasMounted, setHasMounted] = useState(false);

    useEffect(()=> {
        setHasMounted(true);
    },[]);

    if (!hasMounted) {
        return null;
    }

    // Grab the value of the "theme" key in local storage and save it to a variable called "storedTheme" 
    // storedTheme will equal null, "light", or "dark" depending on if setLight() or setDark() have been called
    const storedTheme = localStorage.getItem("theme");
    
    // Check if the user has a prefered color scheme of dark set at the browswer level
    // perersDark will return either true or false
    const prefersDark = 
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Determine if the theme should default to dark 
    // defaultDark will be true if storedTheme = "dark"
    // defaultDark will be true if storedTheme is null and the user has a prefered color scheme of dark set at the browser level
    const defaultDark = 
        storedTheme === "dark" ||
        (storedTheme === null && prefersDark);

    // setLight() is function that sets the value at the "theme" key in local storage to "light"
    // and sets the data attribute of "data-theme" to "light"
    const setLight = () => {
        localStorage.setItem("theme","light");
        document.documentElement.setAttribute("data-theme","light");
    }
    
    // setDark() is function that sets the value at the "theme" key in local storage to "dark"
    // and sets the data attribute of "data-theme" to "dark"
    const setDark = () => {
        localStorage.setItem("theme","dark");
        document.documentElement.setAttribute("data-theme","dark");
    }
    
    // If dafaultDark is true then call the setDark function
    defaultDark && setDark();

    // A function that takes in an event
    // If the target of the event is checked then call the setDark() function, else call the setLight() function
    const toggleTheme = (e) => {
        e.target.checked ? setDark() : setLight();
    }
    

    return (
        <label htmlFor="checkbox">
            <input
                type="checkbox"
                id="checkbox"
                // Call the toggleTheme function when input value changes
                onChange={toggleTheme} 
                // Set the default checked value to the value of defaultDark
                defaultChecked={defaultDark}
            />
        </label>
    );
};