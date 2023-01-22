import React from 'react';
import AppDrawer from "./AppDrawer";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    height: '100%'
  },
  content: {
    flexGrow: 1,
    display: "flex",
    flexDirection:'column',
    padding: theme.spacing(1),
  }
}))

const ChatLayout = ({children}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppDrawer/>
      <div className={classes.content}>
        {children}
      </div>


    </div>
  );
};

export default ChatLayout;