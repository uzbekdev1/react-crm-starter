import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';

import {SIGN_IN_REQ, SIGN_IN_RES} from './index.js';

export default function withAuth(ComponentToProtect, protectedModule='') {
  class ProtectedComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        redirect: false,
        loading:true,
        hasAccessRight:true
      };
    }
    componentDidMount() {
      console.log('withAuth mounted');
      this.props.getActiveUser().then((user)=>{
        var hasAccessRight=true;
        var redirect=false;

        if(user && user._id){
          if(protectedModule && !(user.rights.indexOf(protectedModule)>=0)){
            hasAccessRight=false
          }
        }else{
          redirect=true;
        }

        this.setState({
          redirect,
          loading:false,
          hasAccessRight
        });

        // checking access right of a user for protected component
      });
    }
    render() {
      console.log('withAuth',protectedModule);
      const {redirect, loading, hasAccessRight} = this.state;
      const props=this.props;

      if(loading){
        return <LinearProgress />;
      }

      if(!hasAccessRight){
        console.log('has no access right',props.user.rights);
        console.log(props.user.rights.indexOf(protectedModule));
        props.history.goBack();
      }

      if (!props.user.loggedIn && redirect) {
        window.localStorage.setItem('lastVisitedPath',this.props.location.pathname);
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