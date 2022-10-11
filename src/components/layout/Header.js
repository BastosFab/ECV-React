import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";
import {NavDropdown} from "react-bootstrap";
import logo from '../../logo.svg';
import Theme from "../theme/Theme";


function Header() {

    return (
        <Navbar variant={"dark"} className={'navbar-padding'}>
            <div className={'navbar-menu'}>
                <img src={logo} className="App-logo" alt="logo" />
                <NavLink to="/" className={'item'}>
                    Cours React
                </NavLink>
                <NavDropdown title={'Exemples'} className={'item item-dropdown'}>
                    <NavDropdown.Item>
                        <NavLink to="/exemple-1">Exemple 1</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <NavLink to="/exemple-2">Exemple 2</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <NavLink to="/exemple-3">Exemple 3</NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <NavLink to="/exemple-4">Exemple 4</NavLink>
                    </NavDropdown.Item>
                </NavDropdown>
                <NavLink to="/todolist" className={'item'}>
                    Todo
                </NavLink>
            </div>
            <Theme></Theme>
        </Navbar>
    )
}

export default Header;