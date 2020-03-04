import React from 'react';
import jwt from 'jsonwebtoken';


const withLogin = (WrappedComponent) => {
  class WithLogin extends React.Component {
    componentDidMount() {
      const { history } = this.props;

      const token = localStorage.getItem('token');

      if (token) {
        try {
          const decoded = jwt.verify(token, 'verysecure');

          const currentTime = Date.now() / 1000;

          if (decoded && currentTime > decoded.exp) {
            localStorage.removeItem('token');
            history.push('/login')
          }

        }
        catch (e) {
          console.log(e.message)
          localStorage.removeItem('token');
          history.push('/login')
        }
      }
      else this.props.history.push('/login')

    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return WithLogin;
}

export default withLogin;