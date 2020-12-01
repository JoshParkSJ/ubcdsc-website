import React, { ReactElement } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavigationBar from "./components/navigation/NavigationBar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Events from "./sections/Events";

export default function Router(): ReactElement {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route path="/">{<Home />}</Route>
          <Route path="/admin">{/* <AdminUpdate /> */}</Route>
          <Route path="/project">{/* <UploadProject /> */}</Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}
