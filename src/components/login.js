import { login, logout } from '../feature/user';

import { useDispatch } from 'react-redux';
import { Fragment } from 'react';

const Login = () => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <button
        onClick={() => {
          dispatch(
            login({
              name: 'eyasu',
              age: 32,
              email: 'selamawitlegesse@gmail.com',
            })
          );
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </Fragment>
  );
};
export default Login;
