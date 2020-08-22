// General imports
import React from 'react';

// Component imports
import Auxiliary from '../../hoc/Auxiliary';

const Layout = (props) => {
  return (
    <Auxiliary>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main>
        {props.children}
      </main>
    </Auxiliary>
  );
};

export default Layout; 