import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import shoppinglist from "shoppinglist";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <shoppinglist />
  </StrictMode>
);
