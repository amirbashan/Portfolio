import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <ChakraProvider>
      <div>
        <div id="welcome">
          <Welcome />
        </div>
        <div id="about"></div>
        <div id="projects"></div>
        <div id="contact"></div>
      </div>
    </ChakraProvider>
  );
}

export default App;
