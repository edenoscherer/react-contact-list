import React from "react";
import { BrowserRouter, Route, Routes as ReactRoutes } from "react-router-dom";

import Layout from "./components/layout";
import Home from "./pages/home";

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<div>Error</div>} />
        </Route>
      </ReactRoutes>
    </BrowserRouter>
  );
};
