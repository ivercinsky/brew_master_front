const init_state = {
    list: [{
        id: 2,
        name: "Pale Ale",
        extract: 1.037,
        color: 4,
        amount: 10,
        use: "MASH"
    }, {
        id: 1,
        name: "Caramelo 30",
        extract: 1.035,
        color: 30,
        amount: 0.5,
        use: "MASH"
    }],
    title: "Malta"
}
const grain = (state = {}, action) => {
    switch (action.type) {
        case "CHANGE_GRAIN": {
            var newGrain = {...state}
            newGrain[action.key] = action.value;
            return newGrain;
        }
        default : {
            return state;
        }
    }
}
const grains = (state = init_state, action) => {
    switch (action.type) {
        case "ADD_NEW_GRAIN": {
            var new_state = { ...state };
            new_state.list = [
                ...state.list,
                {
                    id: state.list.length + 1,
                    name: "",
                    extract: 0,
                    color: 0,
                    amount: 0,
                    use: ""
                }];
            return new_state;
        }
        case "CHANGE_GRAIN": {
            var new_state = { ...state };
            var indexOf = state.list.findIndex((grain) => { return grain.id === action.id })
            
            var new_list = [
                ...state.list.slice(0, indexOf),
                grain(state.list[indexOf], action),
                ...state.list.slice(indexOf+1, state.list.length)
            ]
            console.log("New List", new_list);
            new_state.list = new_list
            return new_state;
        }
        default: return state;
    }
}
export default grains;