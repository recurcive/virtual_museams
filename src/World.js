import React, {Component} from  'react';
import {Route, Switch} from 'react-router-dom';
import Region from './Region';
const jQuery = require( 'jquery' );

window.jQuery = jQuery;
require('jqvmap');
require('./pages/jquery.vmap.js');
require('./pages/jquery.vmap.russia.js');

{/*<Route path='/regions' component={props => <Region {...props}/>}/>*/}

/*const openAppRoute = ( route ) => {
  hashHistory.push(route);
};
window.openAppRoute = openAppRoute;*/

class World extends Component{
/*  <main>
<Switch>
<Route path='/regions' component={props => <Region {...props}/>}/>
</Switch>
  </main*/
    drawMap(){
        jQuery(document).ready(function () {
                jQuery('#vmap').vectorMap({
                  map: 'russia_en',
                  backgroundColor: null,
                  color: '#c23616',
                  hoverOpacity: 0.7,
                  selectedColor: '#999999',
                  enableZoom: true,
                  showTooltip: true,
                  scaleColors: ['#C8EEFF', '#006491'],
                  normalizeFunction: 'polynomial',

                  onRegionClick: function(element,  code, region){
                  console.log(code)
                      // window.location.href = `/${code}/${code}.html`;
                      window.location.href = `/regions/${code}`;
                      // window.location.href = `/regions`;
                    // window.openAppRoute(`/regions`);
                  }
                });
              });
    }

    componentDidMount() {
        this.drawMap();

    }
    render(){
        return (
            <div id="vmap" style={{height: 425}}></div>
        );
    }
}

export default World;