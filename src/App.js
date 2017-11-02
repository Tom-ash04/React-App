import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';
import PageShell from './shell/PageShell';
import Main from './main/Main';
import Footer from './main/Footer';
import Jumbo from './main/Jumbo';
import Animals from './animals/Animals';
import Contact from './contact/Contact';
import Gallery from './gallery/Gallery';
import Offer from './offer/Offer';
import Area from './area/Area';
import Ranch from './ranch/Ranch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navShow: { top: null } };
  }

  render() {
    const jumbo = () => <div><Jumbo /><Main /></div>;
    return (
      <div className="container">
        <Router>
          <div>
            <div className="navbar" style={this.state.navShow}>
              <h1 className="navbar_header"><NavLink exact to="/" onClick={() => { if (window.innerWidth <= 600) { this.setState({ navShow: { top: '-415px' } }); } }} >Ranczo za Bocianem</NavLink></h1>
              <ul className="navbar_list">
                <li><NavLink to="/ranch" activeClassName="active" onClick={() => { if (window.innerWidth <= 600) { this.setState({ navShow: { top: '-415px' } }); } }}>RANCZO</NavLink></li>
                <li><NavLink to="/area" activeClassName="active" onClick={() => { if (window.innerWidth <= 600) { this.setState({ navShow: { top: '-415px' } }); } }}>OKOLICA</NavLink></li>
                <li><NavLink to="/animals" activeClassName="active" onClick={() => { if (window.innerWidth <= 600) { this.setState({ navShow: { top: '-415px' } }); } }}>ZWIERZĘTA</NavLink></li>
                <li><NavLink to="/gallery" activeClassName="active" onClick={() => { if (window.innerWidth <= 600) { this.setState({ navShow: { top: '-415px' } }); } }}>GALERIA</NavLink></li>
                <li><NavLink to="/offer" activeClassName="active" onClick={() => { if (window.innerWidth <= 600) { this.setState({ navShow: { top: '-415px' } }); } }}>CENNIK</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active" onClick={() => { if (window.innerWidth <= 600) { this.setState({ navShow: { top: '-415px' } }); } }}>KONTAKT</NavLink></li>
              </ul>
            </div>
            <Route exact path="/" component={PageShell(jumbo)} />
            <Route path="/ranch" component={PageShell(Ranch)} />
            <Route path="/animals" component={PageShell(Animals)} />
            <Route path="/contact" component={PageShell(Contact)} />
            <Route path="/gallery" component={PageShell(Gallery)} />
            <Route path="/offer" component={PageShell(Offer)} />
            <Route path="/area" component={PageShell(Area)} />
          </div>
        </Router>
        <div className="menuButton" onClick={() => this.setState({ navShow: { top: '0px' } })}>
          <div />
          <div />
          <div />
        </div>
        <ScrollToTop showUnder={160} duration={1500}>
          <div className="upButton">
            <i className="fa fa-arrow-circle-up" />
          </div>
        </ScrollToTop>
        <Footer />
      </div>
    );
  }
}
// function addNavEvent() {
//   const but = document.querySelector('.menuButton');
//   const nav = document.querySelector('.navbar');
//   but.addEventListener('click', () => { nav.style.top = '0'; });
// }
// addNavEvent();

export default App;
