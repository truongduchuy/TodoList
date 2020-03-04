import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';

import { createAction } from "./redux/createAction";
import { CHANGE_USER } from './redux/types';

const Box = styled.div`
      width: 400px;
      height: 400px;
      margin: auto;
      box-shadow: 0 3px 9px rgba(0,0,0,.5);
      transform: translate(-50%, -50%);
      position: absolute;
      top: 50%;
      left: 50%;

      > form {
        display: flex;
        flex-direction: column;
        padding: 50px;

        h2 {
          text-align: center;
          text-transform: uppercase;
        }
        
        > *:not(:first-child) {
          padding: 10px 20px;
          margin-top: 40px;
          width: 100%;
          border-radius: 10px;
          outline: none;
          border: 1px solid #a59b9b;

          input {
            border: none;
          }
        }

        button {
          background-color: #4caf50;
          color: #fff;
          cursor: pointer;
        }
      }
    `;

const Login = ({ user, history, changeUser }) => {
  const { username, password } = user;

  const _handleLogin = e => {
    e.preventDefault();

    if (username === '' || password === '') {
      if (username === '') {
        alert('Enter your username!')
      }
      else alert('Enter your password!')
    }
    else {
      if (username === 'huy' && password === '123') {
        const token = jwt.sign({}, 'verysecure', { expiresIn: '1h' });

        localStorage.setItem('token', token);
        return history.push(`/todo/${username}`);
      }
    }
  }


  return (
    <Box>
      <form onSubmit={_handleLogin}>
        <h2>Login</h2>
        <input type="text" placeholder="username" value={username} onChange={e => changeUser('username', e.target.value)} />
        <input type="password" placeholder="password" value={password} onChange={e => changeUser('password', e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </Box>
  )
}

const mapStateToProps = state => ({ user: state.user.user })

const mapDispatchToProps = dispatch => ({
  changeUser: (key, value) => dispatch(createAction(CHANGE_USER, { key, value })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);