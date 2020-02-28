import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  align-items: center;
  
  .wrapper {
    position: relative;

    h3 {
      cursor: pointer;
    }

    > div:last-child {
      position: absolute;
      visibility: hidden;
      padding: 5px 10px 10px 10px;
      background: #fff;
      box-shadow: 0 2px 6px rgba(0,0,0,.5);
      top: 30px;
      left: -22px;
      ${props => props.isToggleLogout && `
      visibility: visible;
    `} 
      
      &::before {
        position: absolute;
        content: '';
        border-style: solid;
        border-width: 0 7px 7px 7px;
        border-color: transparent transparent #fff transparent;
        top: -7px;
        left: 50%;
      }

      > a { 
        color: black;
        cursor: pointer;
      }

    }
  }

`;

const Header = ({ history, user }) => {
  const [isToggleLogout, setIsToggleLogout] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    history.push('/login');
  }

  return (
    <Container isToggleLogout={isToggleLogout}>
      <h2>Home</h2>
      <div className="wrapper">
        <h3 onClick={() => setIsToggleLogout(!isToggleLogout)}>{user}</h3>
        <div>
          <a onClick={handleLogout}>Logout</a>
        </div>
      </div>
    </Container>
  )
}

// nếu Header nằm ngoài router mà muốn điều hướng đến các component trong router thì phải dùng withRouter,
// khi thêm HOC này thì sẽ có thêm một số prop, trong đó prop history dùng để điều hướng đến router khác
export default withRouter(Header);
