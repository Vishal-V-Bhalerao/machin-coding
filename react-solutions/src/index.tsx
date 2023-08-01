import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./state/store";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import FileExplorer from "./pages/file-explorer";

const rootEle = document.getElementById("root");
if (rootEle) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
    },
    {
      path: "/file-explorer",
      element: <FileExplorer></FileExplorer>,
    },
  ]);

  const root = ReactDOM.createRoot(rootEle);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
