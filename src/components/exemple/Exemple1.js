import {Component} from "react";
import {Button} from "react-bootstrap";

class Exemple1 extends Component {

    constructor() {
        super();
        this.state = {
            compteur: 0,
        }
    }

    increment() {
        this.setState({
            compteur: this.state.compteur + 1
        })
    }

    render() {
        return(
            <div className={"mt-5 d-flex justify-content-center"}>
                <div className={"border-dark p-3"}>
                    <h2>Compteur</h2>
                    <p>{ this.state.compteur }</p>
                    <Button variant={"success"} onClick={ () => this.increment() }>Cliquer</Button>
                </div>
            </div>
        )
    }
}

export default Exemple1;