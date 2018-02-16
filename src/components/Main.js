require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import SignIn from './SignIn'

class AppComponent extends React.Component {
    render() {
        return (
          <div className = "index" >
            <SignIn></SignIn>
          </div>
        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;
