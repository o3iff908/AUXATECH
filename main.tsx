import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const tawkScript = document.createElement("script");

tawkScript.src = "https://embed.tawk.to/6a0a4c64e57a6a1c342a55e9/1jos3kqci";
tawkScript.async = true;
tawkScript.charset = "UTF-8";
tawkScript.setAttribute("crossorigin", "*");

document.body.appendChild(tawkScript);

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </BrowserRouter>
);