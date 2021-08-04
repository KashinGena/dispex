import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Apartments from '../Apartments/Apartments';

const Houses = ({house}) => {
    const [open, setOpen] = React.useState(false);
    const {houseName,flats} = house
    const handleClick = () => {
        setOpen(!open);
      };
    return (
        <>
          <ListItem button onClick={handleClick}>
          <ListItemText primary={houseName} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {flats && flats.map(flat => <Apartments flat={flat}/>)}
            </List>
          </Collapse>
        </>
        
    )
}


export default Houses