import React from 'react';
import {Drawer, makeStyles, Toolbar} from "@material-ui/core";
import {Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core/index";
import {useSelector} from "react-redux";


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
}));


const AppDrawer = () => {
  const classes = useStyles();
  const users = useSelector(state => state.users.users);

  return (
    <Drawer
      className={classes.drawer}
      classes={{paper: classes.drawerPaper}}
      variant={"permanent"}
      open>
      <Toolbar/>
      <List className={classes.root}>
        {users.map((user) => (
          <div key={user.id}>
            <ListItem  alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={user.username} src="/static/images/avatar/1.jpg"/>
              </ListItemAvatar>
              <ListItemText
                primary={user.username}
              />
            </ListItem>
            <Divider variant="inset" component="li"/>
          </div>
        ))}
      </List>
    </Drawer>
  );
};

export default AppDrawer;