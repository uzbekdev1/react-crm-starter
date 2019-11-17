import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';

import {SIGN_IN_REQ, SIGN_IN_RES} from './index.js';

export default function withAuth(ComponentToProtect) {
  class ProtectedComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        redirect: false,
        loading:true
      };
    }
    componentDidMount() {
      console.log('withAuth mounted');
      this.props.getActiveUser().then((user)=>{
        console.log('active user', user);
        this.setState({
          redirect:!user,
          loading:false
        });
      });
    }
    render() {
      console.log('withAuth',this.props);
      const {redirect, loading} = this.state;
      const props=this.props;

      if(loading){
        return <LinearProgress />;
      }

      if (!props.user.loggedIn && redirect) {
        console.log('redirecting', props.match.path+"/login");
        return <Redirect to={'/admin/login'} />;
      }

      return (
        <React.Fragment>
          <ComponentToProtect {...this.props} />
        </React.Fragment>
      );
    }
  }

  const mapStateToProps=state=>{
    return {
      user:state.Admin.user
    }
  }

  const mapDispatchToProps=dispatch=>{
    return{
      getActiveUser:()=>{
        dispatch({type:SIGN_IN_REQ});
        return fetch('/api/user/active').then((res)=>res.ok?res.json():{}).then((json)=>{
          dispatch({
            type:SIGN_IN_RES,
            payload:json ? json.user : {}
          });
          return json.user;
        });
      }
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(ProtectedComponent)
}