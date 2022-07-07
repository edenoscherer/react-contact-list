import React from "react";
import { BrowserRouter, Route, Routes as ReactRoutes } from "react-router-dom";

import Home from "./pages/home";

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<div>Error</div>} />
        </Route>
      </ReactRoutes>
    </BrowserRouter>
  );
};
