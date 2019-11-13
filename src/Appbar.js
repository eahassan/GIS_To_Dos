import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EcoIcon from '@material-ui/icons/Eco';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "lime",
    textShadow: "2px 2px 4px #000000",
    animation: "animatezoom 0.8s",
},
  leafIcon: {
    color: "#8bc34a",
},
  linkBtn: {
    textDecoration: "none",
},    
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const headingTitle = "Reroot Task Scheduler";    
    
  return (
    
    <nav aria-label="Navigation">
      <a href="#mainContent" className="skip-link" title="Skip to main content" aria-label="Skip to main content">Skip to main content</a>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="secondary" aria-label="Menu" href="/">
            <EcoIcon fontSize="large" className={classes.leafIcon}/>
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            {headingTitle}
          </Typography>
          <Link to="/about" className={classes.linkBtn}>About</Link>
        </Toolbar>
      </AppBar>
    </div>
    </nav>      
  );
}
