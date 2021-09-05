const initialState = true

// if (localStorage.getItem('loginState')!='null') {
//     initialState = localStorage.getItem('loginState')
// }


const loginState = (state = initialState,action) => {
    if (action.type === 'LOGIN') {
        return state = action.payload;
    }if (action.type === 'LOGOUT') {
        return state = false;
    }else{
        return state;
    }
}



export default loginState;
