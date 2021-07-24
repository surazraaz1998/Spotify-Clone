export const initialState={
    user:null,
    playlist:[],
    playing:false,
    item:null,
    //Remove after developing....
    token:'BQCWRUVeekhkwrcG7WFc7fKfSRp0V89wmswOAoxJ0G0EUYWqjN_JOqsQplqrAN_kW4sh86qrnZjq7GbYaTzfzehEIN_AVb3NFL6fa6Mk_N-nnZZf7V9gCJXSpWiscAmxch5VwZmjd7Ccv6MgpOjtRNsVL2j8ZzR8iE8rHQtV34PF8Fg0',
}
const reducer=(state,action)=>{
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.user,
            }
            case 'SET_TOKEN':
                return{
                    ...state,
                    token:action.token,
                }
        default:
            return state;
    }
}
export default reducer;