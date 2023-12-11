import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  myColors: {
    main: "#424B50",
    second: "#DBDDEA",
    accent: "#FFFFFF",
  },
};

const extendedTheme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={extendedTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
