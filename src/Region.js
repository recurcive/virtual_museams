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

function RowMuseam() {
  <Row>
    <Col/>
  </Row>
};


function Region({ match }) {

  console.log('match ->' + match.params.code + szMuseams.length);
  // szMuseams.map((museam) => {return <h1>{museam.name}</h1>});
    // return <h1>Hello {match.params.code}</h1>
  return szMuseams.map((museam) => {return <h1>{museam.name}</h1>});
}

export default Region;