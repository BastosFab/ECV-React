import {Component} from "react";
import {Button} from "react-bootstrap";

class Exemple3 extends Component {

    constructor() {
        super();
        this.state = {
            isToggle: true
        }
    }

    handleClick() {
        this.setState( {
            isToggle: !this.state.isToggle
            })
    }

    render() {
        return(
            <div className={"mt-5 d-flex justify-content-center"}>
                <div className={"border-dark p-3"}>
                    <h2>Toggle</h2>
                    <Button variant={ this.state.isToggle ? "success" : "danger" } onClick={ () => this.handleClick() }>
                        { this.state.isToggle ? 'ON' : 'OFF' }
                    </Button>
                </div>
            </div>
        )
    }
}

export default Exemple3;