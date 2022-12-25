import { CssBaseline, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/Router";
import { theme } from "./theme/theme";
import * as React from 'react';


function App() {

  return (
  
   <ThemeProvider theme={theme}>
   <RouterProvider router={router}></RouterProvider>
   <CssBaseline></CssBaseline>
   </ThemeProvider>


  );
}

export default App;
