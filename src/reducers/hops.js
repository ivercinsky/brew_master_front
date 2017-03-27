const init_state = {
    list: [{
        id: 1,
        name: "Cascade Arg",
        alfa_acid: 6.3,
        mode: "Pellet",
        amount: 100,
        use: "BOIL",
        time: 60,
    }, {
        id: 2,
        name: "Cascade Arg",
        alfa_acid: 6.3,
        mode: "Pellet",
        amount: 20,
        use: "BOIL",
        time: 30,
    }, {
        id: 3,
        name: "East Kent Golding",
        alfa_acid: 0.0,
        mode: "Pellet",
        amount: 40,
        use: "BOIL",
        time: 30,
    }, {
        id: 4,
        name: "Cascade Arg",
        alfa_acid: 6.3,
        mode: "Pellet",
        amount: 20,
        use: "BOIL",
        time: 15,
    }],
    title: "Lupulo"
}
const hop = (state = {}, action) => {
    switch (action.type) {
        case "CHANGE_HOP": {
            var newHop = {...state}
            newHop[action.key] = action.value;
            return newHop;
        }
        default : {
            return state;
        }
    }
}
const hops = (state = init_state, action) => {
    switch (action.type) {
        case "ADD_NEW_HOP": {
            var new_state = { ...state };
            new_state.list = [
                ...state.list,
                {
                    id: state.list.length + 1,
                    name: "",
                    alfa_acid: 0,
                    mode: 0,
                    amount: 0,
                    use: "",
                    time:0
                }];
            return new_state;
        }
        case "CHANGE_HOP": {
            var new_state = { ...state };
            var indexOf = state.list.findIndex((hop) => { return hop.id === action.id })

            var new_list = [
                ...state.list.slice(0, indexOf),
                hop(state.list[indexOf], action),
                ...state.list.slice(indexOf + 1, state.list.length)
            ]
            console.log("New List", new_list);
            new_state.list = new_list
            return new_state;
        }
        default: return state;
    }
}
export default hops;