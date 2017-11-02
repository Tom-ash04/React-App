import React from 'react';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

import * as images from '../data/Images';

class Offer extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="offer_content">
        <ul>
          <li><h1>Jazdy konne:</h1></li>
          <li><h2>Nauka jazdy (30min)</h2><h2>30zł</h2></li>
          <li><h2>Oprowadzanki dla dzieci (30min)</h2><h2>30zł</h2></li>
          <li><h2>Wycieczki w teren (1h)</h2><h2>40zł</h2></li>
          <li><h2>Wycieczki całodniowe</h2><h2>150zł</h2></li>
          <li><h2>Hipoterapia (30min)</h2><h2>35zł</h2></li>
          <li><h1>Agroturystyka:</h1></li>
          <li><h2>Domek gościnny (2 x 2 osoby)</h2><h2>150zł</h2></li>
          <li><h2>Nocleg na poddaszu</h2><h2>15zł</h2></li>
          <li><h2>Miejsce na namiot</h2><h2>10zł</h2></li>
          <li><h2>Spanie na sianie</h2><h2>10zł</h2></li>
          <ScrollAnimation animateIn="tada">
            <li className="warning"><h1>Prosimy o telefoniczne
    uzgadnianie terminów pobytu i jazd :)</h1></li>
          </ScrollAnimation>
        </ul>
        <div>
          <img src={images.oferta1} alt="#" />
          <div className="imageBackground" />
        </div>
      </div>
    );
  }
}

export default Offer;
