// General imports
import React from 'react';
import classes from './Layout.module.css';
// Component imports
import Auxiliary from '../../hoc/Auxiliary';



const Layout = (props) => {
  return (
    <Auxiliary>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={classes.Content}>
        {props.children}
      </main>
    </Auxiliary>
  );
};

export default Layout; 