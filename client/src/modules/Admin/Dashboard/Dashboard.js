import React from 'react';
import clsx from 'clsx';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';

import EmployeesList from '../Request/List';
import {SET_TITLE} from '../index';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  }
}));

function Dashboard(props) {
  props.setTitle('Dashboard');
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  console.log('Dashboard',props);

  return (
    <React.Fragment>
      <EmployeesList header="Employees" />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              Some Dashboard Content
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps=(state)=>{
	return {...state.Dashboard};
}

const mapDispatchToProps=(dispatch)=>{
	return {
    setTitle:(title)=>{
      dispatch({
        type:SET_TITLE,
        payload:title
      });
    }
  }
}

const DashboardContainer=connect(
  mapStateToProps, 
  mapDispatchToProps
)(Dashboard);

export default DashboardContainer;