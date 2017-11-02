import React from 'react';
import 'animate.css/animate.min.css';

import * as images from '../data/Images';
import Member from './Member';


class Animals extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Member name={'Mahira'} content={'Haflinger, klacz alfa - rzadzi w stadzie. Koń profesor w hipoterapii, idealna w obsłudze dla dzieci i oprowadzankach z nimi. Klacz z charakterem - jazda w teren  tylko dla doświadczonych jeżdżcow.'} source={images.MAHIRA} />
        <Member name={'Starletka'} content={'Haflinger, mądra i najbardziej zrównoważona. Doskonała do nauki jazdy oraz jazdy w terenie.Jej zmorą są muchy w lecie.'} source={images.STARLETKA} />
        <Member name={'Basta'} content={'hucuł, pochodzi z Bieszczad, była dzikim koniem a teraz jest największą Przylepą i Pieszczochem. Uwielbia głaskanie i czesanie. Idealna w obsłudze. Ulubienica dzieci. Ma swój huculski charakterek, czasami jej sie nic nie chce. Szczególnie jesli ma chodzić w kółku na lonży. W terenie idealna.'} source={images.BASTA} />
        <Member name={'Tiger'} content={'Oaza spokoju i cierpliwosci. Uwiebia dzieci. Wielki pieszczoch.'} source={images.TIGER} />
        <Member name={'Minik'} content={'Przyjaciel Tajgera, znajda, bardzo wdzięczny i wesoły, przyjazny dla wszystkich a w szczególnosci gdy jest coś do zjedzenia.'} source={images.MINIK} />
        <Member name={'Mizia'} content={'Siostra Kizi, Królowa która rządzi. Jej nic nie umknie, jest najszybsza i najsprytniejsza ze wszystkich zwierzaków, największy pieszczoch, myszy dla niej to rozrywka.'} source={images.MIZIA} />
        <Member name={'Kizia'} content={'Siostra Mizi, uwielbia polować na myszy i często przynosi je pod drzwi w dowód wdzięczności. Jest płochliwa jeśli kogoś nie zna.'} source={images.KIZIA} />
      </div>
    );
  }
}

export default Animals;
