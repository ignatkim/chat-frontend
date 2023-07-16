import React, {useEffect, useRef, useState} from 'react';
import history from "../../history";
import {clearErrors} from "../../store/actions/usersActions";
import {useDispatch, useSelector} from "react-redux";
import ChatLayout from "../../components/UI/Layout/ChatLayout";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Paper,
  Typography
} from "@material-ui/core/index";
import {apiURL} from "../../config";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
}));

const Chat = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const user = useSelector(state => state.users.user);

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const ws = useRef(null);

  history.listen((location) => {
    if (location.pathname === '/login' || location.pathname === '/register') {
      dispatch(clearErrors());
    }
  });

  useEffect(() => {
    ws.current = new WebSocket(`ws://${apiURL}/chat/?token=${user.token}`);
    ws.current.onmessage = e => {
      const decoded = JSON.parse(e.data);
      dispatch(decoded);
      if (decoded.type === 'CONNECTED') {
        setMessages(decoded.messages);
      }
      if (decoded.type === 'NEW_MESSAGE') {
        console.log(decoded.message);
        setMessages(prev => [
          ...prev,
          decoded.message
        ]);
      }
    };
  }, [dispatch, user.token]);

  const sendMessage = () => {
    ws.current.send(JSON.stringify({type: 'CREATE_MESSAGE', message}));
  };

  return (
    <ChatLayout>
      <Paper style={{
        height: '100%', marginBottom: '10px', overflow: 'auto', display: 'flex',
        flexDirection: 'column-reverse'
      }}>
        {messages.slice(0).reverse().map((m, i) => (
          <List key={i} className={classes.root}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={m.author.username} src="/static/images/avatar/1.jpg"/>
              </ListItemAvatar>
              <ListItemText
                primary={m.author.username}
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {m.message}
                  </Typography>
                }
              />
            </ListItem>
          </List>
        ))}
      </Paper>
      <div>
        <input
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send message</button>
      </div>
    </ChatLayout>
  );
};

export default Chat;