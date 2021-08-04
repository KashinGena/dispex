import React from 'react'
import CompanySelect from './components/CompanyList/CompanyList';
import { fetchCompanies,selectCompany } from './store/actions/company';
import { useDispatch,useSelector } from 'react-redux';
import HousesStock from './containers/HousesStock';

function App() {
  const dispatch = useDispatch()
  const companies = useSelector(state => state.companyReducer.companies)
  const selectedCompany= useSelector(state => state.companyReducer.selectedCompany)

 const onSelectCompanyHandler = (companyId) => {
    console.log(companyId);
    dispatch(selectCompany(companyId))
    
  }

  React.useEffect(() => {
    dispatch(fetchCompanies())
  },[])



  return (
    <div className="App">
      <CompanySelect onSelectCompany={onSelectCompanyHandler} companies={companies}/>
      <HousesStock/>
    </div>
  );
}

export default App;
