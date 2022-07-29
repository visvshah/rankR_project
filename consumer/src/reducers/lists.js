export default (lists = [], action) => {
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return lists;
        default:
            return lists;
    }
}
