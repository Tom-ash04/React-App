import React from 'react';
import Content from './Content';

import * as images from '../data/Images';

class Main extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Content date={'20-10-2017'} title={'Nowy domek'} content={'Jak grzyby po deszczu tak samo tej jesieni rośnie nasz drugi domek! Pomieści on 8 osób, znajdzie się w nim też miejsce na łazienkę oraz kuchnię.  Z niecierpliwością czekamy!'} imgSrc={images.img4} />
        <Content date={'24-09-2017'} title={'Grzybobranie'} content={'Od kilku dni okolice Prosnej mienią się ferią barw a to wszystko przez grzyby! Muchomory, maślaki, podgrzybki zawojowały pobliskie lasy. Swoją obecnością zaszczycił nas nawet król wszystkich grzybów,  prawdziwek. Grzybów starczy dla wszystkich, najbardziej martwimy się o drogę prowadzącą przez Prosną, niedługo zostanie doszczętnie rozjechana przez grzybiarzy.'} imgSrc={images.grzyby1} />
        <Content date={'01-09-2017'} title={'Witamy jesień'} content={'Lato za nami, ale nie przejmujemy się tym i czekamy na sezon grzybowy.'} imgSrc={images.jesien1} />
        <Content date={'23-06-2017'} title={'Lato na ranczu'} content={'Wakacje już są! Serdecznie zapraszamy do Rancza za bocianem. Ostatnie wolne terminy, zainteresowanych prosimy o kontakt!'} imgSrc={images.lato1} />
        <Content date={'07-03-2017'} title={'Wielkie oko patrzy!'} content={'Spokojnie, to nie kamery obserwujące każdy Twój krok a teleskop śledzący wędrówkę gwiazd po niebie.  Pan  Maks docenił nasze odludzie i to właśnie na Ranczu poznaje tajniki astronomii.'} imgSrc={images.teleskop1} />
      </div>
    );
  }
}

export default Main;
