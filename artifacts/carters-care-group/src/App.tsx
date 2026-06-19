import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState, useEffect, createContext, useContext } from "react";
import NotFound from "@/pages/not-found";
import LoadingPage from "@/pages/loading";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Contact from "@/pages/contact";

export type Skin = "ndis" | "aged-care" | "service-provider" | null;

interface SkinContextType {
  skin: Skin;
  setSkin: (skin: Skin) => void;
}

const SkinContext = createContext<SkinContextType>({
  skin: null,
  setSkin: () => {},
});

export const useSkin = () => useContext(SkinContext);

function Router() {
  const [skin, setSkin] = useState<Skin>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("carters-skin") as Skin) || null;
    }
    return null;
  });

  useEffect(() => {
    if (skin) {
      localStorage.setItem("carters-skin", skin);
    } else {
      localStorage.removeItem("carters-skin");
    }
  }, [skin]);

  const [location] = useLocation();

  return (
    <SkinContext.Provider value={{ skin, setSkin }}>
      <div data-skin={skin || ""}>
        <Switch>
          <Route path="/" component={skin ? Home : LoadingPage} />
          <Route path="/about" component={skin ? About : LoadingPage} />
          <Route path="/services" component={skin ? Services : LoadingPage} />
          <Route path="/contact" component={skin ? Contact : LoadingPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </SkinContext.Provider>
  );
}

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
