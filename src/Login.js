import React, { Component } from 'react';
import styled from 'styled-components';

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

class Login extends Component {
  state = {
    user: {
      username: '',
      password: ''
    }
  }

  _handleChange = (key, value) => {
    console.log(key, value)
    this.setState({ user: { ...this.state.user, [key]: value } });
  }

  _handleLogin = e => {
    e.preventDefault();
    const { user } = this.state
    const { username, password } = user;

    if (username === '' || password === '') {
      if (username === '') {
        alert('Enter your username!')
      }
      else alert('Enter your password!')
    }
    else {
      if (username === 'huy' && password === '123') {
        localStorage.setItem('isLogined', true);
        return this.props.history.push(`/todo/${username}`);
      }
    }
  }

  render() {
    const { username, password } = this.state.user;

    return (
      <Box>
        <form onSubmit={this._handleLogin}>
          <h2>Login</h2>
          <input type="text" placeholder="username" value={username} onChange={e => this._handleChange('username', e.target.value)} />
          <input type="password" placeholder="password" value={password} onChange={e => this._handleChange('password', e.target.value)} />
          <button type="submit">Login</button>
        </form>
      </Box>
    )
  }
}

export default Login;