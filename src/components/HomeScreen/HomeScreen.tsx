"use client";

import { Button, Card } from "@tremor/react";
import { ArrowRight, BarChart3 } from "lucide-react";
import Link from "next/link";

const HomeScreen = () => {
  return (
    <Card className="w-full mx-auto max-w-xs flex flex-col gap-5">
      <p className="text-tremor-default text-dark-tremor-content">
        Puede ver analíticas sobre las visitas de la página
      </p>

      <div className="flex items-center justify-center gap-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:from-purple-500/75 hover:to-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">
        <div className="flex items-center justify-center gap-2">
          <BarChart3 className="h-4 w-4" />
          Analytics
        </div>
      </div>
    </Card>
  );
};

export default HomeScreen;
