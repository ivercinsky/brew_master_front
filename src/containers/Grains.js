import { connect } from 'react-redux'
import GrainsComponent from '../components/Grains.js'
import {addNewGrain, changeGrain} from '../actions/Grains.js'
import {onSortEnd} from '../actions/Common.js'


const mapStateToProps = (state) => {
    return {
        grains: state.grains.list || [],
        title : state.grains.title || "Sin Titulo"
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleClick : () => {
            dispatch(addNewGrain());
        },  
        onSortEnd : onSortEnd,
        handleChange : (id, key, value) => {
            dispatch(changeGrain(id, key, value));
        }
    }
}

const GrainsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GrainsComponent)

export default GrainsContainer