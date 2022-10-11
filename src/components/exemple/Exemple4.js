import {Component} from "react";
import {Button, Form} from "react-bootstrap";

class Exemple4 extends Component {

    constructor() {
        super();
        this.state = {
            userName: ''
        }
    }

    handleChange(event) {
        this.setState( {
            userName: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('Bonjour: ' + this.state.userName);
    }

    render() {
        return(
            <div className={"mt-5 d-flex justify-content-center"}>
                <div className={"border-dark p-3"}>
                    <Form onSubmit={((event) => this.handleSubmit(event))}>
                        <Form.Label>
                            <h3>Votre nom :</h3>
                        </Form.Label>
                        <Form.Control type={"text"} value={this.state.userName} onChange={((event) => this.handleChange(event))}></Form.Control>
                        <Button className={"mt-3"} variant={"success"} type={"submit"}>Submit</Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Exemple4;