import React from "react";

export default class NavBar extends React.Component {
    render() {
        return (
            <nav id="menu" className="navbar navbar-expand-sm">
                <a className="navbar-brand" href="#" />
                <ul className="navbar-nav" id="nav">
                    <li class="nav-item">
                        <a className="nav-link" href="#">Boop</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link" href="#">Beeps</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link" href="#">Bippidy</a>
                    </li>
                </ul>
            </nav>
        );
    }
}