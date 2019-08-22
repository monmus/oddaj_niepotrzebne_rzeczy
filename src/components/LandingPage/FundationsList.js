import React, {Component} from "react";
import '../../scss/fundationlist.scss';

class Foundations extends Component{
        state = {
           showFoundations: true,
           showOrganizations: false,
           showCollections: false
        }

    showFoundations = () => {
           this.setState({
               showFoundations: true,
               showOrganizations: false,
               showCollections: false
           })
    };

    showOrganizations = () => {
        this.setState({
            showOrganizations: true,
            showFoundations: false,
            showCollections: false
        })
    };

    showCollections = () => {
        this.setState({
            showCollections: true,
            showOrganizations: false,
            showFoundations: false
        })
    };

    render() {
        return (
            <section id="foundations">
                <div className="foundations-main-container">
                    <div className="foundations-header">
                        <div className="foundations-title">
                            <h1>Komu pomagamy?</h1>
                            <div></div>
                        </div>
                        <ul className="foundations-elements-nav">
                            <li onClick={this.showFoundations}>Fundacjom</li>
                            <li onClick={this.showOrganizations}>Organizacjom pozarządowym</li>
                            <li onClick={this.showCollections}>Lokalnym zbiórkom</li>
                        </ul>
                        <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują</p>
                    </div>

                    {this.state.showFoundations ?
                        <div className="foundations-list-container">
                            <ul className="elements-names">
                                <li>
                                    <h3>Fundacja "Dbam o Zdrowie"</h3>
                                    <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                                    <div className="decoration"></div>
                                </li>
                                <li>
                                    <h3>Fundacja "Dla dzieci"</h3>
                                    <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                                    <div className="decoration"></div>
                                </li>
                                <li>
                                    <h3>Fundacja "Bez domu"</h3>
                                    <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                                    <div className="decoration"></div>
                                </li>
                            </ul>
                            <ul className="elements-descriptions">
                                <li>
                                    <h3>.</h3>
                                    <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                                    <div className="decoration"></div>
                                </li>
                                <li>
                                    <h3>.</h3>
                                    <p>ubrania, meble, zabawki</p>
                                    <div className="decoration"></div>
                                </li>
                                <li>
                                    <h3>.</h3>
                                    <p>ubrania, jedzenie, ciepłe koce</p>
                                    <div className="decoration"></div>
                                </li>
                            </ul>
                        </div>
                        : null
                    }

                    {this.state.showOrganizations ?
                        <div className="organizations-list-container">
                            <ul className="elements-names">
                                <li>
                                    <h3>Organizacja "Tęcza"</h3>
                                    <p>Cel i misja: Pomoc osobom w znajdującym się w trudnej sytuacji życiowej.</p>
                                    <div className="decoration"></div>
                                </li>
                                <li>
                                    <h3>Organizacja "Happy-end"</h3>
                                    <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                                    <div className="decoration"></div>
                                </li>
                                <li>
                                    <h3>Organizacja "Pomaganie na zawołanie"</h3>
                                    <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                                    <div className="decoration"></div>
                                </li>
                            </ul>
                            <ul className="elements-descriptions">
                                <li>
                                    <h3>.</h3>
                                    <p>jedzenie</p>
                                    <div className="decoration"></div>
                                </li>
                                <li>
                                    <h3>.</h3>
                                    <p>meble</p>
                                    <div className="decoration"></div>
                                </li>
                                <li>
                                    <h3>.</h3>
                                    <p>ubrania</p>
                                    <div className="decoration"></div>
                                </li>
                            </ul>
                        </div>
                        : null
                    }

                    {this.state.showCollections ?
                        <div className="collections-list-container">
                            <ul className="elements-names">
                                <li>
                                    <h3>Zbiórka "Oddaje za free"</h3>
                                    <p>Cel i misja: Pomoc osobom w znajdującym się w trudnej sytuacji życiowej.</p>
                                    <div className="decoration"></div>
                                </li>
                                <li>
                                    <h3>Zbiórka "Pomocna dłoń"</h3>
                                    <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                                    <div className="decoration"></div>
                                </li>
                                <li>
                                    <h3>Zbiórka "Nie wyrzucam, oddaje"</h3>
                                    <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                                    <div className="decoration"></div>
                                </li>
                            </ul>
                            <ul className="elements-descriptions">
                                <li>
                                    <h3>.</h3>
                                    <p>używana elektronika</p>
                                    <div className="decoration"></div>
                                </li>
                                <li>
                                    <h3>.</h3>
                                    <p>stare meble</p>
                                    <div className="decoration"></div>
                                </li>
                                <li>
                                    <h3>.</h3>
                                    <p>używane ubrania</p>
                                    <div className="decoration"></div>
                                </li>
                            </ul>
                        </div>
                        : null
                    }
                </div>
            </section>
        )
    }
}

export default Foundations;