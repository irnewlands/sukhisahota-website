import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Autobiography from "./pages/Autobiography";
import AutobiographyFr from "./pages/AutobiographyFr";
import About from "./pages/About";
import Election2025 from "./pages/Election2025";
import RenewalReport from "./pages/RenewalReport";
import Issues from "./pages/Issues";
import GetInvolved from "./pages/GetInvolved";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/autobiography"} component={Autobiography} />
      <Route path={"/autobiography-fr"} component={AutobiographyFr} />
      <Route path={"/election-2025"} component={Election2025} />
      <Route path={"/renewal-report"} component={RenewalReport} />
      <Route path={"/issues"} component={Issues} />
      <Route path={"/get-involved"} component={GetInvolved} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
