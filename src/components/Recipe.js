import React from 'react';
import './Recipe.css';
import GridAttributes from './GridAttributes.js'
import ListAttributes from "./ListAttributes.js"
import {Grid, Row} from 'react-bootstrap';

const Recipe = ({params}) => {
    const {main, grains, hops, yeasts, others, handleChange, addNewGrain, addNewHop, addNewYeast, addNewOther, onSortEnd} = params();
    return (
      <div className="Recipe">
        <Grid fluid={true}>
          <Row>
            <GridAttributes key="mainAttrs" rows={2} cols={4} title="Principal" attrs={main} />
          </Row>
          <Row>
            <ListAttributes key="grains" handleChange={handleChange} onSortEnd={onSortEnd} handleClick={addNewGrain} title="grains" attrs={grains.attrs}  />
          </Row>
          <Row>
            <ListAttributes  key="hops" handleChange={handleChange} onSortEnd={onSortEnd} handleClick={addNewHop} title="hops" attrs={hops.attrs} />
          </Row>
          <Row>
            <ListAttributes  key="yeast" handleChange={handleChange} onSortEnd={onSortEnd} handleClick={addNewYeast} title="yeasts" attrs={yeasts.attrs} />
          </Row>
          <Row>
            <ListAttributes  key="others" handleChange={handleChange} onSortEnd={onSortEnd} handleClick={addNewOther} title="others" attrs={others.attrs} />
          </Row>
        </Grid>
      </div>
    );
  }

export default Recipe;
