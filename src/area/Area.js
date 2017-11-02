import React from 'react';

class Area extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="area_content">
        <div className="intro">
          <div>
            <h2>Za płotem wiecznie tętniącego życiem rancza,
            rozciągają się malownicze pejzaże czystych lasów i łąk.</h2>
          </div>
        </div>
        <div className="prosna">
          <div>
            <h2>Prosna znajduje się na terenie Parku Krajobrazowego Dolnej Pilicy
            i Drzewiczki - Natura 2000, który poprzez Lasy Spalskie łączy się
            z Zalewem Sulejowskim.
            </h2>
          </div>
        </div>
        <div className="podroz">
          <div>
            <h2>Podróżując konno przez okoliczne lasy można kontemplować
            wszechobecną przyrodę i dotrzeć nad Pilicę a także do Łęgonic oraz Domaniewic.
            Pod osłoną drzew można zawędrować aż do Spały.
            </h2>
          </div>
        </div>
        <div className="towns">
          <div>
            <h2>W pobliżu znajduje się wiele zabytków kulturowych takich jak
             Pałac na skarpie, sanktuarium i muzeum regionalne w Nowym
            Mieście,  drewniany kościółek w Łegonicach Małych czy ruiny zamku w
            Drzewicy. Jest to także miejsce historycznych bitew z czasów II Wojny Światowej,
            m.in. Oddziału Hubala.</h2>
          </div>
        </div>
        <div className="river">
          <div>
            <h2> Ochłodę w upalne letnie dni
            zapewni kąpielisko nad zalewem w Drzewicy. Miłośnicy sportów wodnych mogą
            wziąć udział w spływie kajakowym PIlicą lub spróbować swoich sił na wakeboardzie.</h2>
          </div>
        </div>
        <div className="mushrooms">
          <div>
            <h2>Okoliczne tereny są obszarem wręcz wymarzonym dla grzybiarzy.</h2>
          </div>
        </div>
        <div className="bird">
          <div>
            <h2>Nie zwlekaj! Czekamy na Ciebie!</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Area;
