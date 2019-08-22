import React, {Component}  from "react";
import "../../scss/loggedviewheader.scss";

import { Link } from 'react-router-dom'

class LoggedViewHeader extends Component {
    state = {
        dropdownMenu: false
    }
    
    showDropdownMenu = () => {
        this.setState({
            dropdownMenu: !this.state.dropdownMenu
        })
    };

 render() {
     return (
         <div id="logged">
             <div className="logged-view-container">
                 <div className="logged-view-login">
                     <ul>
                         <li>
                             Witaj Agata
                         </li>
                         <span onClick={this.showDropdownMenu}>
                             {this.state.dropdownMenu ?
                                 <ul className="logged-view-dropdown-menu">
                                     <li>
                                         Profil
                                     </li>
                                     <li>
                                         Ustawienia
                                     </li>
                                     <li>
                                         Moje zbiórki
                                     </li>
                                     <li>
                                         Wyloguj
                                     </li>
                                 </ul>
                                 : null
                             }
                         </span>
                     </ul>
                 </div>
                    <nav className="logged-view-nav">
                        <ul>
                            <li>
                                <Link to="/">
                                    Start
                                </Link>
                            </li>
                            <li>
                                <Link to ="/">
                                    O co chodzi?
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    O nas
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Fundaje i organizacje
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Kontakt
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="logged-view-call-to-action">
                        <h1>
                            Oddaj rzeczy, których już nie chcesz
                        </h1>
                        <span>
                            potrzebującym
                        </span>
                        <div className="logged-view-call-to-action-decoration"></div>
                        <h1>
                            Wystarczą 4 proste kroki:
                        </h1>
                        <div className="logged-view-boxes">
                            <div>
                                <p>
                                    1
                                </p>
                                <p>
                                    Wybierz rzeczy
                                </p>
                            </div>
                            <div>
                                <p>
                                    2
                                </p>
                                <p>
                                    Spakuj je w worki
                                </p>
                            </div>
                            <div>
                                <p>
                                    3
                                </p>
                                <p>
                                    Wybierz fundację
                                </p>
                            </div>
                            <div>
                                <p>
                                    4
                                </p>
                                <p>
                                    Zamów kuriera
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info-bar">
                    <h1>
                        Ważne!
                    </h1>
                    <p>
                        Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu je najlepiej przekazać.
                    </p>
                </div>
            </div>
        )
    }
}

export default LoggedViewHeader;