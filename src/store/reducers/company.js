const initialState = {
    selectedCompany:'',
    companies:[]
}

const companyReducer = (state = initialState, action) => {
    switch (action.type) {
        case ("GET_COMPANIES"):
            return {
                ...state,
                companies:action.payload
            }
        case ("SELECT_COMPANY"):
            return {
                ...state,
                selectedCompany:action.payload
            }
        default: 
            return state
    }
} 

export default companyReducer