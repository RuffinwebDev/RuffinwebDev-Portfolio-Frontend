// @ts-ignore
import React from "react";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import RuffinwebTheme from "./Theme";
import AppContainer from "./components/AppContainer/AppContainer";
import { mainAppRoutes } from "./config/mainAppRoutes";
import { footerRoutes } from "./config/footerRoutes";
import ErrorPageNotFound from "./pages/Error/ErrorPageNotFound";

import LandingPage from "./pages/LandingPage/LandingPage";
import Info from "./pages/Info/Info";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={RuffinwebTheme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<AppContainer />}>
              {" "}
              <Route index element={<LandingPage />} />
              {mainAppRoutes.map((item) => (
                <Route
                  key={item.name}
                  path={item.route}
                  element={item.element}
                />
              ))}
              {/*Footer Routes*/}
              {footerRoutes.map((item) => (
                <Route
                  key={item.name}
                  path={item.route}
                  element={<Info pageKey={item.route} />}
                />
              ))}
            </Route>
            <Route path="*" element={<ErrorPageNotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
