const initialState = {
    houses:{},
    streets:{},
    isLoading:false
}


const housesReducer = (state=initialState, action) => {
    switch (action.type) {
        case('FETCH_HOUSES_START'):
            return {
                ...state,
                isLoading:true
            }
        case ('FETCH_HOUSES_SUCCESS'):
            return {
                ...state,
                isLoading:false,
                houses:action.payload.houses,
                streets:action.payload.streets
            }
        default:
            return state
    }
}

export default housesReducer