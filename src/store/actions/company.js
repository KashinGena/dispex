import axios from "axios"

export const selectCompany = (company) => {
    return {
        type:"SELECT_COMPANY",
        payload:company
    }
}

export const fetchCompanies = () => {
    return async dispatch => {
        try {
            const {data} = await axios.get('https://dispex.org/api/vtest/Request/companies')
            dispatch(fetchCompaniesSuccess(data))
        }
        catch (e) {
            console.log(e);
        }
    }
}

const fetchCompaniesSuccess = (companies) => {
    return {
        type:'GET_COMPANIES',
        payload:companies
    }
}