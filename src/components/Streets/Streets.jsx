import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Houses from '../Houses/Houses';
import { useSelector } from 'react-redux';



const Streets = ({name,housesIds}) => {
    const [open, setOpen] = React.useState(false);
    const houses = useSelector(state => state.housesReducer.houses)
    const handleClick = () => {
        setOpen(!open);
      };

      
    return (
        <>
          <ListItem button onClick={handleClick}>
            <ListItemText primary={name} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {housesIds.map(index =>
                <Houses key={index}
                        house = {houses[index]}
                />
              )}     
            </List>
          </Collapse>
          </>
    )
}

export default Streets