export default (lists = [], action) => {
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...lists, action.payload];
        case 'DELETE':
            return lists.filter((list) => list._id !== action.payload);
        default:
            return lists;
    }
}
