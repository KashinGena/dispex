import React from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


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

const Apartments = ({flat}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    
    const handleClick = () => {
        setOpen(!open);
      };

    return (
        <>
          <ListItem button className={classes.nested} onClick={handleClick}>
            <ListItemText primary={flat.flat} />
              {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
           
            </List>
          </Collapse>
        </>
        
    )
}


export default Apartments