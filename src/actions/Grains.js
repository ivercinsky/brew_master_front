export const addNewGrain = (grain) => {
    return {
        type: "ADD_NEW_GRAIN",
        data : grain
    };
}


export const changeGrain = (id, key, value) => {
    console.log(id, key, value);
    return {
        type : "CHANGE_GRAIN",
        id: id,
        key : key,
        value : value
    };
}

export const onSortEnd = () => {
    return {
        type : "SORT_GRAINS"
    }
}