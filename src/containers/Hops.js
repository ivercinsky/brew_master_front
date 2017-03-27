import { connect } from 'react-redux'
import HopsComponent from '../components/Hops.js'
import {addNewHop, changeHop} from '../actions/Hops.js'
import {onSortEnd} from '../actions/Common.js'


const mapStateToProps = (state) => {
    return {
        hops: state.hops.list || [],
        title : state.hops.title || "Sin Titulo"
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleClick : () => {
            dispatch(addNewHop());
        },  
        onSortEnd : onSortEnd,
        handleChange : (id, key, value) => {
            dispatch(changeHop(id, key, value));
        }
    }
}

const HopsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HopsComponent)

export default HopsContainer