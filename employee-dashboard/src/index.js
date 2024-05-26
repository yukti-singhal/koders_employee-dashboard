import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "../src/Components/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
//Component to render React and run App.js
