import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Menu, Button, MenuItem} from "@material-ui/core";
import {logoutUser} from "../../../../store/actions/usersActions";

const UserMenu = ({user}) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <>
      <Button color={'inherit'} onClick={handleClick}>
        Hello, {user.username}!
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem onClick={()=>dispatch(logoutUser())}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;