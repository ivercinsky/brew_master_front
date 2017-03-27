export const addNewHop = (hop) => {
    return {
        type: "ADD_NEW_HOP",
        data : hop
    };
}


export const changeHop = (id, key, value) => {
    console.log(id, key, value);
    return {
        type : "CHANGE_HOP",
        id: id,
        key : key,
        value : value
    };
}

export const onSortEnd = () => {
    return {
        type : "SORT_HOPS"
    }
}