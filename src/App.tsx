
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Philosophy from "./pages/Philosophy";
import Faq from "./pages/Faq";
import HowWeWork from "./pages/HowWeWork";
import { CartProvider } from "./contexts/CartContext";
import ProductPage from "./pages/ProductPage";
import AvisoLegal from "./pages/AvisoLegal";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import PoliticaCookies from "./pages/PoliticaCookies";
import TerminosCondiciones from "./pages/TerminosCondiciones";
import Checkout from "./pages/Checkout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/nuestra-filosofia" element={<Philosophy />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/como-trabajamos" element={<HowWeWork />} />
              <Route path="/checkout" element={<Checkout />} />
              {/* Legal Pages */}
              <Route path="/aviso-legal" element={<AvisoLegal />} />
              <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
              <Route path="/politica-cookies" element={<PoliticaCookies />} />
              <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />
              <Route path="/productos/:slug" element={<ProductPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
