import { createRoot } from "react-dom/client";
import React from "react";
import App from "@pages/content/ui/app";

const root = document.createElement("div");
root.id = "chrome-extension";

document.body.append(root);

const rootIntoShadow = document.createElement("div");
rootIntoShadow.id = "shadow-root";

const shadowRoot = root.attachShadow({ mode: "open" });
shadowRoot.appendChild(rootIntoShadow);

createRoot(rootIntoShadow).render(React.createElement(App));
