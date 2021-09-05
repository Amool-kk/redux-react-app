export const loginFun = (value) => {
    return{
        type: "LOGIN",
        payload: value
    }
}

export const logoutFun = (value) => {
    return{
        type: "LOGOUT",
        payload: value
    }
}

let t=0
export const addFun = (value) => {
    return{
        type: "ADD",
        payload: {
            value1: value.heading,
            value2: value.body,
            Id: t++
        }
    }
}

export const deleteFun = (value) => {
    // console.log(value)
    return{
        type: "DELETE",
        payload: value
    }
}

export const updateFun = (value) => {
    
    return{
        type: "UPDATE",
        payload: value
    }
}


