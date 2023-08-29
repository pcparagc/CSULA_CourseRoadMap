import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";

const Layout = (props) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} disableGutters>
        <main>
          <Header />
          {props.children}
          <Footer />
        </main>
      </Container>
    </>
  );
};

export default Layout;
