import { mdiCodeParentheses } from '@mdi/js';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

const Contacts = (props) => {
  console.log(props);

  /*  

 setTimeout(()=>{
    props.history.push('/')
  },2000) 
  */

  return (
    <>
      <Link to={`${props.match.path}/first`}>To first contact</Link>
      <Link to={`${props.match.path}/second`}>To second contact</Link>
      <Switch>
        <Route path={`${props.match.path}/first`} component={ContactInfo} />
        <Route path={`${props.match.path}/second`} component={ContactInfo} />
      </Switch>
    </>
  );
};

function ContactInfo(props) {
  console.log('ok')
  return <div>{JSON.stringify(props)}</div>;
}

export default Contacts;
