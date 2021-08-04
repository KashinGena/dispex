import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import Streets from '../components/Streets/Streets';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHouses } from '../store/actions/houses';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const  HousesStock = () => {
  const dispatch =useDispatch()
  const classes = useStyles();
  const selectedCompany= useSelector(state=> state.companyReducer.selectedCompany)
  const streets= useSelector(state=> state.housesReducer.streets)
  React.useEffect(() => {
    if (selectedCompany)
    dispatch(fetchHouses(selectedCompany))
  },[selectedCompany])

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Дома управляющей компании
        </ListSubheader>
      }
      className={classes.root}
    >
       {streets && Object.keys(streets).map(streetName => 
            <Streets keys={streets[streetName].streetId}
                     name={streetName}
                     housesIds={streets[streetName].houses}
            />
       )}   
    </List>
  );
}

export default HousesStock