import { RouterProvider } from "react-router";

import {  ThemeModeScript, ThemeProvider } from 'flowbite-react';
import customTheme from './utils/theme/custom-theme';
import router from "./routes/Router";
import { Toaster } from "./components/shadcn-ui/Default-Ui/toaster";

function App() {

  return (
    <>
      <ThemeModeScript />
      <ThemeProvider theme={customTheme}>
      <RouterProvider router={router} />
      </ThemeProvider>
      <Toaster />
    </>
  );
}

export default App;
