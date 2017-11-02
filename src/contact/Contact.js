import React from 'react';
import SimpleMap from './Map';

class Contact extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div className="contact contact_content">
          <h1>Ranczo za Bocianem</h1>
          <h2>Nasz adres:</h2>
          <h3>Prosna 11</h3>
          <h3>k. Nowego Miasta nad Pilicą</h3>
          <h3>26-420 woj. mazowieckie</h3>
          <hr />
        </div>
        <div className="contact contact_contact">
          <h3>tel: 603-773-855</h3>
          <h3 className="mail">mail: beata_glodkowska@onet.pl</h3>
          <hr />
        </div>
        <div className="contact contact_social">
          <h3>Polub nas na Facebooku!!!</h3>
          <a href="https://www.facebook.com/Ranczo-za-Bocianem-279645915504556/">
            <i className="fa fa-facebook-official" />
          </a>
          <hr />
        </div>
        <div className="contact contact_coordinates">
          <h3>GPS: N 51° 34' 38" E 20° 32' 55"</h3>
        </div>
        <div className="contact contact_map">
          <SimpleMap />
        </div>
      </div>
    );
  }
}

export default Contact;
