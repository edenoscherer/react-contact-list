import React from "react";
import { BrowserRouter, Route, Routes as ReactRoutes } from "react-router-dom";

import Layout from "./components/layout";
import Contacts from "./pages/contacts";
import NewContact from "./pages/contacts/new-contact";
import Home from "./pages/home";

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/contacts/new" element={<NewContact />} />
          <Route path="*" element={<div>Error</div>} />
        </Route>
      </ReactRoutes>
    </BrowserRouter>
  );
};
