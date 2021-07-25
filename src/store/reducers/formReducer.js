const initialState = {}

export function formReducer(state=initialState, action){
    switch (action.type) {
        case 'CUSTOMER_INFO':
            return Object.assign({},{
                ...state,
                ...action.payload
            })
        default: return state
    }
}