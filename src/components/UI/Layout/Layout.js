import React from 'react';
import Container from "@material-ui/core/Container";
import {CssBaseline} from "@material-ui/core/index";
import AppToolBar from "../AppToolBar/AppToolBar";

const Layout = ({children}) => {
  return (
    <>
      <CssBaseline/>
      <header><AppToolBar/></header>
      <main>
        <Container maxWidth="xl" style={{height: '85vh' }}>
          {children}
        </Container>
      </main>
    </>
  );
};

export default Layout;