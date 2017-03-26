import React, { Component } from 'react';
import Recipe from './Recipe.js'
import {arrayMove} from 'react-sortable-hoc';
import BrewHelper from './BrewHelper.js'
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
        eficiency:75,
        abv:5.82
      },
      grains: {
        attrs: [{
          id:2,
          name:"Pale Ale",
          extract: 1.037,
          color: 4,
          amount: 10,
          use: "MASH"
        },{
          id:1,
          name:"Caramelo 30",
          extract: 1.035,
          color: 30,
          amount: 0.5,
          use: "MASH"
        }]
      },
      hops: {
        attrs: [{
          id:1,
          name: "Cascade Arg",
          alfa_acid: 6.3,
          mode: "Pellet",
          amount:100,
          use: "BOIL",
          time:60,
        },{
          id:2,
          name: "Cascade Arg",
          alfa_acid: 6.3,
          mode: "Pellet",
          amount:20,
          use: "BOIL",
          time:30,
        },{
          id:3,
          name: "East Kent Golding",
          alfa_acid: 0.0,
          mode:"Pellet",
          amount:40,
          use: "BOIL",
          time:30,
        },{
          id:4,
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
          id:1,
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
          id:1,
          name:"Irish Moss",
          type:"Finning",
          use: "Boil",
          time: 10,
          amount: 10
        },{
          id:2,
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
      id: new_state.grains.attrs.length+1,
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
      id: new_state.hops.attrs.length+1,
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
    const current_attr = new_state.yeasts.attrs[0];
    var new_attr = Object.assign(current_attr);
    Object.keys(new_attr).forEach((key) => {
        new_attr[key]=0;
    });
    console.log(new_attr);
    new_attr.id = new_state.yeasts.attrs.length+1;
    new_state.yeasts.attrs.push(new_attr);
    debugger;
    this.setState(new_state);
  }
  addNewOther() {
    var new_state = Object.assign(this.state);
    new_state.others.attrs.push({
      id: new_state.others.attrs.length+1,
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
    new_state.main.title = "Change " + data.collection;
    this.setState(new_state);
  }
  handleChange({target}) {
    const data = target.name;
    const [collection, attr, attr_id] = data.split("_");
    var new_state = Object.assign(this.state);
    var attr_old = new_state[collection].attrs.filter(({id}) => id == attr_id)[0];
    attr_old[attr] = target.value;
    new_state.main.original_gravity = BrewHelper.CalculateOG(new_state[collection].attrs, new_state.main.eficiency, new_state.main.batch_size);
    this.setState(new_state);
  }
  recipeParams() {
    const params = {
        main: this.state.main,
        grains: this.state.grains,
        hops: this.state.hops,
        yeasts: this.state.yeasts,
        others: this.state.others,
        handleChange: this.handleChange.bind(this),
        addNewHop: this.addNewHop.bind(this),
        addNewGrain: this.addNewGrain.bind(this),
        addNewOther: this.addNewOther.bind(this),
        addNewYeast: this.addNewYeast.bind(this),
        onSortEnd: this.onSortEnd.bind(this),
    };
    return params;
  }
    render() {
        return (<Recipe params={this.recipeParams.bind(this)}/>);
    }
}
export default App;