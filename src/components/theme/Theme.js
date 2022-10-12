import {useState} from "react";
import button from "bootstrap/js/src/button";

function Theme() {
    const [theme, setTheme] = useState(false);

    const handleClick = () => {
        if (theme === false) {
            setTheme(true)
            document.body.classList.add('light');
        } else {
            setTheme(false)
            document.body.classList.remove('light');
        }
    }

    return(
        <button onClick={handleClick} className={'toggle-theme'}
            variant={theme ? 'dark' : 'light'}>{
            theme ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>
        }
        </button>
    )
}

export default Theme;