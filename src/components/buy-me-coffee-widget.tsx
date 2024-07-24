"use client";

import { Button } from "./ui/button";
import { Coffee } from "lucide-react";

export const BuyMeCofeeWidget = () => {
  return (
    <div className="lg:fixed bottom-0 right-0 p-6">
      <a href="https://www.buymeacoffee.com/paulydev" target="_blank">
        <Button className="w-full">
          <div className="flex items-center">
            <Coffee className="w-6 h-6 mr-2" />
          </div>
          <p className="font-semibold">Buy me a coffee</p>
        </Button>
      </a>
    </div>
  );
};
