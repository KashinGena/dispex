import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
const CompanySelect = ({companies, onSelectCompany}) => {
    const classes = useStyles();
    const [сompany,setCompany]=React.useState('')

    const handleChange = (event) => {
        setCompany(event.target.value)
        onSelectCompany(event.target.value)
      };
    
    return (
        <div>
          <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Выберите компанию</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={сompany}
                    onChange={handleChange}
                  >
                  {companies && companies.map(company =>
                      <MenuItem
                          key={company.id}
                          value={company.id}
                      >
                          {company.name}
                      </MenuItem>)}
                  </Select>
           </FormControl>
        </div>
    )
}

export default CompanySelect