
import {arrayMove} from 'react-sortable-hoc';

export const onSortEnd = (data, e) => {
    var new_state = Object.assign(this.state);
    new_state[data.collection].attrs = arrayMove(new_state[data.collection].attrs, data.oldIndex, data.newIndex);
    new_state.main.title = "Change " + data.collection;
    this.setState(new_state);
}