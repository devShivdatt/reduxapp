let reducer = (state = 0, action) => {
    let type = action.type;
    if( type === 'deposit') {
        return state + action.payload;
    } else if( type === 'withdraw') {
        return state + action.payload;
    } else {
    return state;
    }
}

export default reducer;