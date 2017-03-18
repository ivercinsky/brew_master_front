import React, { Component } from 'react';
import './App.css';
import GridAttributes from './GridAttributes.js'
import ListAttributes from "./ListAttributes.js"
import {Grid, Row} from 'react-bootstrap';
import {arrayMove} from 'react-sortable-hoc';
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

  addNewGrain() {
    var new_state = Object.assign(this.state);
    new_state.grains.attrs.push({
      name:"",
      extract: 0,
      color: 0,
      amount: 0,
      use: ""
    });
    this.setState(new_state);
  }

  addNewHop() {
    var new_state = Object.assign(this.state);
    new_state.hops.attrs.push({
      name: "",
      alfa_acid: 0,
      mode: "",
      amount:0,
      use: "",
      time:60,
    });
    this.setState(new_state);
  }

  addNewYeast() {
    var new_state = Object.assign(this.state);
    new_state.yeasts.attrs.push({
      yeast: "",
      amount: 0,
      density: 0,
      package_size:0,
      atenuation:0,
      inoculation_rate:"",
      optimal_amount:0,
      excess_amount:0,
      packages:0
    })
    this.setState(new_state);
  }
  addNewOther() {
    var new_state = Object.assign(this.state);
    new_state.others.attrs.push({
      name:"",
      type:"",
      use: "",
      time: 0,
      amount: 0
    });
    this.setState(new_state);
  }
  onSortEnd(data, e) {
    var new_state = Object.assign(this.state);
    new_state[data.collection].attrs = arrayMove(new_state[data.collection].attrs, data.oldIndex, data.newIndex);
    new_state.main.name = "Change " + data.collection;
    this.setState(new_state);
  }
  render() {
    return (
      <div className="App">
        <Grid fluid={true}>
          <Row>
            <GridAttributes key="mainAttrs" rows={2} cols={4} title={Object.keys(this.state)[0]} attrs={this.state.main} />
          </Row>
          <Row>
            <ListAttributes onSortEnd={this.onSortEnd.bind(this)} key="grains" handleClick={this.addNewGrain.bind(this)} title={Object.keys(this.state)[1]} attrs={this.state.grains.attrs} />
          </Row>
          <Row>
            <ListAttributes  key="hops" handleClick={this.addNewHop.bind(this)} title={Object.keys(this.state)[2]} attrs={this.state.hops.attrs} />
          </Row>
          <Row>
            <ListAttributes  key="yeast" handleClick={this.addNewYeast.bind(this)} title={Object.keys(this.state)[3]} attrs={this.state.yeasts.attrs} />
          </Row>
          <Row>
            <ListAttributes  key="others" handleClick={this.addNewOther.bind(this)} title={Object.keys(this.state)[4]} attrs={this.state.others.attrs} />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
