import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

/*
class Region extends Component {
  componentDidMount() {
    const { match: { params } } = this.props;
    console.log('this.props ->' + this.match);
  }

    render () {
    return (
     <h1>Test</h1>
     )
    }
}

export default Region;*/

const szMuseams = [
      {'name':'Эрмитаж','link':'https://www.hermitagemuseum.org/'},
      {'name':'Русский музей','link':'https://http://www.rusmuseum.ru/'},
      {'name':'Государственный музей истории','link':'https://www.spbmuseum.ru/'},
      {'name':'Зоологический музей','link':'https://www.spbmuseum.ru/'},
      {'name':'Большой Петергофский дворец','link':'https://www.spbmuseum.ru/'},
      {'name':'Музей Анны Ахматовой','link':'https://www.spbmuseum.ru/'},

];

const Museam = ( {museam} ) => {
  return (
      <Col>
        <b>{museam.name}</b><p>{museam.link}</p>
      </Col>
  );
};

const MuseamRow = ( {museamRow} ) => {
  console.log(museamRow);
  return (
      <Row>
        {/*museamRow.map( mus => <Museam museam={mus}/> )*/}
        {museamRow.map(mus => <Museam museam={mus}/>)}
      </Row>
  );
};


function Region({ match }) {

  // console.log('match ->' + match.params.code + szMuseams.length);
  // return szMuseams.map((museam) => {return <h1>{museam.name}</h1>});
  return (
    <Grid>
        {
          szMuseams.reduce((pairs, museam, index) => {
          if (index % 2 === 0) {
            pairs.push([])
          }
            pairs[pairs.length - 1].push(museam);

          return pairs;
        }, []).map( pair => (<MuseamRow museamRow={pair}/>))
        };
    </Grid>
  )
}

export default Region;