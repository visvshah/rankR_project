export default (lists = [], action) => {
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...lists, action.payload];
        case 'DELETE':
            return lists.filter((list) => list._id !== action.payload);
        case 'UPDATE':
            return lists.map((list)=> (list._id === action.payload._id ? action.payload : list));
        default:
            return lists;
    }
}
