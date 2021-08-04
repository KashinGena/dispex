import axios from "axios"
import sort from '../../util/sortHouses'
const config = {
    'origin':'https://dispex.org/api/vtest'
}
console.log(config);

const fetchHousesStart = () => {
    return {
        type:"FETCH_HOUSES_START"
    }
}

const fetchHousesSuccess = (houses) => {
    return {
        type:"FETCH_HOUSES_SUCCESS",
        payload:houses
    }
}

export const fetchHouses = (companyId) => {
    return async dispatch => {
        dispatch(fetchHousesStart())
        try {
           // const {data} = await axios.get('https://dispex.org/api/vtest/HousingStock/',config)
           const data= await fetch(`https://dispex.org/api/vtest/HousingStock?companyId=${companyId}`,{method:"GET", mode:'cors'})
            .then(response => response.json())
            const houseStock=sort(data);
            console.log(houseStock);
            dispatch(fetchHousesSuccess(houseStock))
            
        }
        catch(e) {
            console.log(e);
            
        }
    }
}