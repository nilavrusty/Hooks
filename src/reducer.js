export const reducer = (state,action) => {
    console.log('state',state,action)
    switch(action.type){
        case "name":
        state.name = action.value;
        return Object.assign({},state,{name:action.value});
        case "email":
        state.email = action.value;
        return state;
        default :
        return state;
    }
  
} 