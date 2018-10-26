// Higher Order Components

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1> Info </h1>
    <p> The info is: {props.info}</p>
  </div>
);


const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      <p>This is private info.Please don't share</p>
      <WrappedComponent {...props}/>
    </div>
  )
};

//requireAuthentication

const requireAuthentication = (WrappedComp) => {
  return (props) => (
    <div>
    {props.isAuthenticated && <p>Auth</p>}
    <WrappedComp {...props} />
    </div>
  )
}



const AdminInfo = withAdminWarning(Info);
 const AuthInfo = requireAuthentication(Info);


//  ReactDOM.render(<AdminInfo info="there are the details" />, document.getElementById('app')); 
ReactDOM.render(<AuthInfo isAuthenticated={false} info="there are the details" />, document.getElementById('app'));