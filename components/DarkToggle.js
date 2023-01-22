import { useEffect, useState } from "react";

export default function DarkToggle() {

    // const [hasMounted, setHasMounted] = useState(false);
    
    const [theme, setTheme] = useState(undefined);
    console.log(theme);
    // if (!theme) {
    //     return null;
    // }
    
    useEffect(()=> {
        setTheme(getInitialTheme);
        console.log(theme);
    },[theme]);

    const setAndStoreTheme = (value) => {
        setTheme(value);

        localStorage.setItem("theme",value);
        document.documentElement.setAttribute("data-theme",value);
    }
    
    const toggleTheme = (e) => {
        setAndStoreTheme(e.target.checked ? "dark" : "light");
    }


    return (
        <label htmlFor="checkbox">
            <input
                type="checkbox"
                id="checkbox"
                // Call the toggleTheme function when input value changes
                onChange={toggleTheme} 
                // Set the default checked value to the value of defaultDark
                checked={theme === "dark"}
            />
        </label>
    );
};

function getInitialTheme() {

    // Check if there is a theme value is stored in local storage
    const storedTheme = localStorage.getItem("theme");
    // If theme value is not null or undefined, return the a string equal to either "dark" or "light"
    if (storedTheme) {
        return storedTheme;
    }

    // Check if the user has a prefered color scheme of dark set at the browser level
    // perersDark will return either true or false
    const prefersDark = 
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

    // If prefersDark is defined, return the a string equal to either "dark" or "light" depending on if prefersDark is true or not
    if (prefersDark != 'undefined') {
        return prefersDark ? "dark" : "light";
    }

    // If user doesn't have preference on localStorage or at the browser level, then defualt to light
    return "light";

}


// // Grab the value of the "theme" key in local storage and save it to a variable called "storedTheme" 
//     // storedTheme will equal null, "light", or "dark" depending on if setLight() or setDark() have been called
//     const storedTheme = localStorage.getItem("theme");
    
//     // Check if the user has a prefered color scheme of dark set at the browswer level
//     // perersDark will return either true or false
//     const prefersDark = 
//         window.matchMedia &&
//         window.matchMedia("(prefers-color-scheme: dark)").matches;
    
//     // Determine if the theme should default to dark 
//     // defaultDark will be true if storedTheme = "dark"
//     // defaultDark will be true if storedTheme is null and the user has a prefered color scheme of dark set at the browser level
//     const defaultDark = 
//         storedTheme === "dark" ||
//         (storedTheme === null && prefersDark);

//     // setLight() is function that sets the value at the "theme" key in local storage to "light"
//     // and sets the data attribute of "data-theme" to "light"
//     const setLight = () => {
//         localStorage.setItem("theme","light");
//         document.documentElement.setAttribute("data-theme","light");
//     }
    
//     // setDark() is function that sets the value at the "theme" key in local storage to "dark"
//     // and sets the data attribute of "data-theme" to "dark"
//     const setDark = () => {
//         localStorage.setItem("theme","dark");
//         document.documentElement.setAttribute("data-theme","dark");
//     }
    
//     // If dafaultDark is true then call the setDark function
//     // defaultDark && setDark();

//     // A function that takes in an event
//     // If the target of the event is checked then call the setDark() function, else call the setLight() function
//     const toggleTheme = (e) => {
//         e.target.checked ? setDark() : setLight();
//     }