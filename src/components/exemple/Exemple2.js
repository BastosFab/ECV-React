import {Component} from "react";

class Exemple2 extends Component {

    constructor() {
        super();
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
     clearInterval(this.timer);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return(
            <div className={"mt-5 d-flex justify-content-center"}>
                <div className={"border-dark p-3"}>
                    <h2>Clock</h2>
                    <p>{ this.state.date.toLocaleTimeString() }</p>
                </div>
            </div>
        )
    }
}

export default Exemple2;