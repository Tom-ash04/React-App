import React from 'react';
import RanchContent from './RanchContent';

import * as images from '../data/Images';

class Ranch extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <RanchContent title={'Jazdy konne'} content={'Nasz ośrodek specjalizuje się głównie w kilkugodzinnych wycieczkach terenowych, podczas których poznajemy piękne tereny zachodniego pogranicza Mazowsza. Dla początkujących oferujemy przygotowanie do jazdy w terenie oraz naukę jazdy na maneżu. Możliwość oprowadzanek dla dzieci. Prowadzimy zajęcia z hipoterapii. Dla osób nie jeżdżących konno oferujemy przejażdżki rowerami po okolicy.'} imgSrc={images.jazdy1} />
        <RanchContent title={'Agroturystyka'} content={'Istnieje możliwość przenocowania w przytulnym domku dla gości, który może pomieścić 4 osoby (2 pokoje dwuosobowe). Do dyspozycji także poddasze dla 5 osób. Dla fanów egzotyki, możliwość noclegu na stogu siana w stodole. Latem zapraszamy także osoby z namiotami.  Jest miejsce na ognisko i grilla.'} imgSrc={images.agroturystyka1} />
        <RanchContent title={'Zapraszamy!!!'} content={''} imgSrc={images.wstęp5} />
      </div>
    );
  }
}

export default Ranch;
