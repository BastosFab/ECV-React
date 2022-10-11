import {useState} from "react";
import button from "bootstrap/js/src/button";

function Theme() {
    const [theme, setTheme] = useState(false);

    const handleClick = (event) => {
        if (theme === false) {
            event: setTheme(true)
            document.body.classList.add('theme-light');
            document.body.classList.remove('theme-dark');

        } else {
            setTheme(false)
            document.body.classList.add('theme-dark');
            document.body.classList.remove('theme-light');
        }
    }

    return(
        <button onClick={handleClick} className={'toggle-theme'}>
            <i className="fa-solid fa-sun display-sun"></i>
            <i className="fa-solid fa-moon display-moon"></i>
        </button>
    )
}

export default Theme;