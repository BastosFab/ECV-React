import {Component} from "react";
import button from "bootstrap/js/src/button";

class Theme extends Component{

    constructor(){
        super();
        this.state = {
            isToggle: true
        }
    }

    handleClick(event) {
        this.setState( {
            isToggle: !this.state.isToggle
        })

        if (this.state.isToggle !== false) {
            document.body.classList.add('light');
            document.body.classList.remove('dark');

        } else {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        }
    }

    render() {
        return (
            <button
                variant={ this.state.isToggle ? 'dark' : 'light'}
                onClick={() => this.handleClick()}
                className={'toggle-theme'}>
                {this.state.isToggle ?
                    <i className="fa-solid fa-sun display-sun"></i>:
                    <i className="fa-solid fa-moon display-moon"></i>}
            </button>
        )
    }
}

export default Theme;