const initialData = {
    data: []
}


const addState = (state = initialData, action) => {
    if (action.type === 'ADD') {
        const { Id, value1, value2 } = action.payload
        // console.log(value1, "accept", value2, action.payload)
        return {
            ...state,
            data: [
                ...state.data,
                {
                    id: Id,
                    heading: value1,
                    body: value2,
                }
            ]
        }
    }
    if (action.type === 'DELETE') {
        // data.pop(action.payload)
        const elm = action.payload;
        const newdata = state.data.filter((elem) => elem.heading !== elm);
        return {
            ...state,
            data: newdata
        }
    }
    if (action.type === 'UPDATE') {
        const heading = action.payload.heading
        const body = action.payload.body
        const Id = action.payload.id
        const item = { "heading": heading, "body": body }

        state.data.forEach((element, index) => {
            if (index === parseInt(Id)) {
                state.data[index] = item;
            }
        });
        return {
            ...state,
            data: state.data
        }
    }
    else {
        return state
    }
}

export default addState;