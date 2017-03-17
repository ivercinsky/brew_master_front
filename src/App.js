import React, { Component } from 'react';
import './App.css';
import GridAttributes from './GridAttributes.js'
import ListAttributes from "./ListAttributes.js"
import {Grid, Row} from 'react-bootstrap';
class App extends Component {
  constructor() {
    super();
    this.state = {
      main: {
        name: "SusanIPA",
        original_gravity:1057,
        batch_size:40,
        final_gravity:1013,
        balance:1.97,
        style:"12C - English IPA (BJCP 2015)",
        ibu:50.6,
        eficiency:70,
        abv:5.82
      },
      grains: {
        attrs: [{
          name:"Pale Ale",
          extract: 1037,
          color: 4,
          amount: 10,
          use: "MASH"
        },{
          name:"Caramelo 30",
          extract: 1035,
          color: 30,
          amount: 0.5,
          use: "MASH"
        }]
      },
      hops: {
        attrs: [{
          name: "Cascade Arg",
          alfa_acid: 6.3,
          mode: "Pellet",
          amount:100,
          use: "BOIL",
          time:60,
        },{
          name: "Cascade Arg",
          alfa_acid: 6.3,
          mode: "Pellet",
          amount:20,
          use: "BOIL",
          time:30,
        },{
          name: "East Kent Golding",
          alfa_acid: 0.0,
          mode:"Pellet",
          amount:40,
          use: "BOIL",
          time:30,
        },{
          name: "Cascade Arg",
          alfa_acid: 6.3,
          mode: "Pellet",
          amount:20,
          use: "BOIL",
          time:15,
        }]
      },
      yeasts: {
        attrs: [{
          yeast: "SAFALE US-05",
          amount: 28,
          density: 15,
          package_size:11,
          atenuation:78,
          inoculation_rate:"",
          optimal_amount:28,
          excess_amount:0,
          packages:3
        }]
      },
      others: {
        attrs: [{
          name:"Irish Moss",
          type:"Finning",
          use: "Boil",
          time: 10,
          amount: 10
        },{
          name:"Gelatin",
          type:"Finning",
          use: "Secondary",
          time: 0,
          amount: 10
        }]
      }
    };
  }
  render() {
    return (
      <div className="App">
        <Grid fluid={true}>
          <Row>
            <GridAttributes key="mainAttrs" rows={2} cols={4} title={Object.keys(this.state)[0]} attrs={this.state.main} />
          </Row>
          <Row>
            <ListAttributes key="grains" title={Object.keys(this.state)[1]} attrs={this.state.grains.attrs} />
          </Row>
          <Row>
            <ListAttributes key="hops" title={Object.keys(this.state)[2]} attrs={this.state.hops.attrs} />
          </Row>
          <Row>
            <ListAttributes key="yeast" title={Object.keys(this.state)[3]} attrs={this.state.yeasts.attrs} />
          </Row>
          <Row>
            <ListAttributes key="others" title={Object.keys(this.state)[4]} attrs={this.state.others.attrs} />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
