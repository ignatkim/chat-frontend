import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link as RouterLink} from "react-router-dom";
import {Avatar, Container, Grid, Link, makeStyles, Typography} from "@material-ui/core";
import LockOutlinedIcons from "@material-ui/icons/LockOutlined";
import {registerUser} from "../../store/actions/usersActions";
import FormElement from "../../components/UI/Form/FormElement";
import ButtonWithProgress from "../../components/UI/ButtonWithProgress/ButtonWithProgress";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  header: {
    marginBottom: theme.spacing(2)
  }
}));
const Register = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: '',
    password: ''
  });
  const error = useSelector(state => state.users.registerError);
  const loading = useSelector(state => state.users.registerLoading);

  const inputChangeHandler = e => {
    const {name, value} = e.target;
    setUser(prev => ({...prev, [name]: value}));
  };
  const submitFormHandler = e => {
    e.preventDefault();
    dispatch(registerUser({...user}));
  };

  const getFieldError = fieldName => {
    try {
      return error.errors[fieldName].message;
    } catch (e) {
      return undefined;
    }
  }
  return (
    <Container component="section" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcons/>
        </Avatar>
        <Typography component="h1" className={classes.header} variant="h5">
          Sign up
        </Typography>
        <Grid container spacing={1} direction={"column"} component={"form"} onSubmit={submitFormHandler}>
          <FormElement label={'Username'}
                       onChange={inputChangeHandler}
                       name={'username'}
                       value={user.username}
                       type={'text'}
                       autoComplete={'new-username'}
                       error={getFieldError('username')}
          />
          <FormElement label={'Password'}
                       onChange={inputChangeHandler}
                       name={'password'}
                       type={'password'}
                       value={user.password}
                       autoComplete={'new-password'}
                       error={getFieldError('password')}
          />
          <Grid item xs>
            <ButtonWithProgress
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              loading={loading}
              disabled={loading}
            >
              Sign up
            </ButtonWithProgress>
          </Grid>
          <Grid item container justify="flex-end">
            <Grid item>
              <Link component={RouterLink} variant="body2" to="/login">
                Already have an account? Sign in.
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};
export default Register;