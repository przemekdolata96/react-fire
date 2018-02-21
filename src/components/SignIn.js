require('normalize.css/normalize.css');
require('styles/SignIn.scss');

//var firebase = require('firebase');
import React from 'react';
import * as firebase from 'firebase';

var config = {

};
firebase.initializeApp(config);
class SignIn extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password:'',
      error:{
        message:''
      }
    }
  }

  signUp() {
    console.log('this.state',this.state);
    const {email,password}=this.state;
    firebase.auth().createUserWithEmailAndPassword(email,password).catch(error => {
      this.setState({error});
    });
  }

  render() {
    return (
          <div className = "wrapper" >
                 <form>
                    <input type='email' name='email' placeholder='email'
                    onChange={event => this.setState({email: event.target.value})}/>
                    <input type='password' name='password' placeholder='password'
                    onChange={event => this.setState({ password: event.target.value })}/>
                    <div className='buttons'>
                      <button type='button' onClick={()=>this.signUp()}>Sign Up</button>
                      <button type='button'>Sign In</button>
                    </div>
                    <div>{this.state.error.message}</div>
                 </form>
          </div>
        );
    }
}

SignIn.defaultProps = {};

export default SignIn;
