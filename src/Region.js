import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import axios from 'axios';


const regionName = {
  kr: 'Красноярский край',

};

class Region extends Component {
    constructor(props) {
        super(props);

        this.state = {
          data: {"museams":[]}
        };
      }


    componentDidMount() {

    const { match: { params } } = this.props;

//      console.log('region.location1 -> ' + this.props.location.search) // "?filter=top&origin=im"
//      console.log('region.location2 -> ' + this.props.location) // "?filter=top&origin=im"
//      console.log('region.location3 -> ' + `${params.code}`) // "?filter=top&origin=im"

     /* fetch(`/regions/${params.code}/text_${params.code}.json`)
        .then(response => {return  response.json()})
        .then(data => this.setState({ text: data }))*/


        axios.get(`/regions/${params.code}/text_${params.code}.json`)
           .then( response => {
             this.setState({
             data: response.data
           });
         })


    }

    render () {
    const { match: { params } } = this.props;

    const numbers = {
                      "info":"John",
                      "age":30,

                    };

    const region = this.state.data;

    return (

        <div className="App">
            <h1>{ regionName[params.code] }</h1>
            <hr align="center" color="Red" />

            <Grid>
              <Row className="show-grid text-justify">
                <Col  md={8} >
                   { region.info }
                 </Col>
                <Col  md={2} className="text-center">
                  <h5>Флаг</h5>
                  <img src={ `/regions/${params.code}/flag_${params.code}.png` } alt={ regionName[params.code] } width="125" />
                </Col>
                <Col md={2} className="text-center">
                  <h5>Герб</h5>
                  <img src={ `/regions/${params.code}/emblem_${params.code}.png` } alt={ regionName[params.code] } width="100" />
                </Col>

              </Row>

              <h2>Музеи</h2>


              <Row className="show-grid text-justify">
              <Col>
                    { region.museams.map(info => ( <ul><h4>{info.city}</h4>{info.list.map(museam => <li>{museam}</li>)} </ul>))}
              </Col>
              </Row>


            </Grid>

        </div>

     )
    }
}

export default Region;