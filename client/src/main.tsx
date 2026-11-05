import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { isFrench } from "@/lib/locale";

document.documentElement.lang = isFrench ? "fr-CA" : "en-CA";

createRoot(document.getElementById("root")!).render(<App />);
