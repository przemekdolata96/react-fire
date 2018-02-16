require('normalize.css/normalize.css');
require('styles/SignIn.scss');

var firebase = require("firebase");
import React from 'react';

class SignIn extends React.Component {
  render() {
    return (
          <div className = "wrapper" >
                 <form>
                    <input type='email' name='email'/>
                    <input type='password' name='password'/>
                    <div className="buttons">
                      <button>Sign Up</button>
                      <button>Sign In</button>
                    </div>
                 </form>
          </div>
        );
    }
}

SignIn.defaultProps = {};

export default SignIn;
