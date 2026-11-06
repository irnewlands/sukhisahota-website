import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { language } from "@/lib/locale";

document.documentElement.lang = language.tag;

createRoot(document.getElementById("root")!).render(<App />);
