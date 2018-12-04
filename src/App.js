import React, { Component } from 'react';
import './App.css';
import World from './World';
import Region from './Region';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Carousel from 'react-bootstrap/lib/Carousel';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={World}/>
      <Route path='/kr/kr.html' component={Region}/>
    </Switch>
  </main>
)

const MainCarousel =()  => (

        <div className="App">
        <h1>Виртуальные музеи России</h1>
        <Link to='/kr/kr.html'>Region</Link>
        <World />
         <hr align="center" color="Red" />

        <Grid>
         <Row className="show-grid text-justify">
             <Col xs={6} md={4} >
               {'Каждый из нас хоть раз в жизни посещал музей. Нас с детства приобщают к культуре. Это делают и наши родители, и учебные заведения, где мы учимся. Иногда, после посещения, некоторые задаются вопросом: «Зачем нужны музеи?». Я считаю, что сохраняемые экспонаты, объекты искусства и история помогают нам расширять кругозор и приобщать себя к большому и интересному миру.'}

             </Col>
             <Col xs={6} md={4}>
             {'Виртуальные музеи – технология, которая позволяет расширить возможности обучения и образования, сохранить культурное наследие для потомков и сделать посещение любого музея мира доступным для всех людей планеты, имеющих выход в интернет. Музеи с поддержкой интернет-технологий имеют шансы решать основные музейные трудности (хранение, безопасность, обеспечение более широкого, быстрого и легкого доступа к экспонатам). '}
             </Col>
             <Col xs={6} md={4}>
             {'Актуальность моей исследовательской работы заключается в том, что я решила собрать и обобщить информацию о виртуальных музеях нашей страны на специальной странице в сети интернет, и тем самым привлечь общественность к данной теме. Также в рамках работы был создан виртуальный тур по музею нашей школы, что позволяет считать мой исследовательский проект актуальным.'}
             </Col>
           </Row>
        </Grid>

        <hr align="center" color="Red" />

        <Grid>
          <Row className="show-grid text-center">
            <Col xs={6} md={4}>
              <h3>{'Регионов России'}</h3>
              <h1>85</h1>
            </Col>
            <Col xs={6} md={4}>
              <h3>{'Музеев России'}</h3>
              <h1>>5000</h1>
            </Col>
            <Col xs={6} md={4}>
              <h3>{'Экспонатов'}</h3>
              <h1>>10000000</h1>
            </Col>
          </Row>
        </Grid>

        <hr align="center" color="Red" />

      <Carousel>
        <Carousel.Item>
          <img height={500} alt="900x500" src="./carousel/462488_1600x1200.JPG" />
          <Carousel.Caption>
            <h3>Третьяковская галерея</h3>
            <p>Главный музей национального искусства России, отражающий его уникальный вклад в мировую культуру. Это гостеприимный музей, известный своей богатой коллекцией и многообразием представленных идей.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height={500} alt="900x500" src="./carousel/Hermitage.jpg" />
          <Carousel.Caption>
            <h3>Государственный Эрмитаж</h3>
            <p>Насчитывает около трех миллионов произведений искусства и памятников мировой культуры</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>

)


class App extends Component {

  render() {
    return (
        <MainCarousel />
    );
  }
}

export default App;
