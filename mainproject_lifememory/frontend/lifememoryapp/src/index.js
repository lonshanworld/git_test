import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/index.css";
import { ThemeProvider } from './customhooks/usethemehook';
// import RouteSwitch from './routeswitch';
import { RouterProvider } from 'react-router-dom';
import router from './routeswitch';
import ErrorHandler from './customhooks/errorhander';
import ShowLoadingScreen from './customhooks/showloadingscreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <ThemeProvider>
      <ErrorHandler>
        <ShowLoadingScreen>
          <RouterProvider router={router}/>
        </ShowLoadingScreen>
      </ErrorHandler>
    </ThemeProvider>
  // </React.StrictMode>
);
