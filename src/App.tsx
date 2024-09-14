// @ts-ignore
import React from "react";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import RuffinwebTheme from "./Theme";
import AppContainer from "./components/AppContainer/AppContainer";

import { navItems } from "./config/navConfig";
import LandingPage from "./pages/LandingPage/LandingPage";

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
              // Contains components shared by all apps across Ruffinweb.
              <Route index element={<LandingPage />} /> // Components unique to
              this app.
              {navItems.map((item) => (
                <Route
                  key={item.name}
                  path={item.route}
                  element={item.element}
                />
              ))}
              {/*<Route path="/search" element={<Search />} />*/}
              {/*<Route path="/register" element={<Register />} />*/}
              {/*<Route path="/login" element={<Login />} />*/}
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
