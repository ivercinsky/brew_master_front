import { combineReducers } from 'redux'
import grains from './grains'
import hops from './hops'

const recipeApp = combineReducers({
    grains,
    hops
});


export default recipeApp