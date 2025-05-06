
import React, { useEffect, useState } from "react";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if cookie preference exists in localStorage
    const cookiePreference = localStorage.getItem("cookiePreference");
    if (!cookiePreference) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiePreference", "accepted");
    setShowBanner(false);
    
    // Here we would initialize analytics scripts
    console.log("Analytics cookies accepted and initialized");
  };

  const handleReject = () => {
    localStorage.setItem("cookiePreference", "rejected");
    setShowBanner(false);
    
    console.log("Analytics cookies rejected");
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-bread-light shadow-lg border-t border-bread-muted">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Cookie className="h-8 w-8 text-bread-accent" />
            <div>
              <p className="text-sm md:text-base">
                Utilizamos cookies propias y de terceros para mejorar la experiencia de navegación y ofrecer contenidos de interés. 
                Al continuar con la navegación, entendemos que aceptas nuestra{" "}
                <a href="/politica-cookies" className="text-bread-accent hover:underline">
                  política de cookies
                </a>.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button 
              onClick={handleReject}
              variant="outline" 
              className="whitespace-nowrap"
            >
              Rechazar
            </Button>
            <Button 
              onClick={handleAccept}
              className="bg-bread-accent hover:bg-bread-accent/90 whitespace-nowrap"
            >
              Aceptar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
