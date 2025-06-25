import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { LoadingSpinner } from "./LoadingSpinner";
import type { LayoutProps } from "../types/sharedTypes";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-6 flex">
        <React.Suspense fallback={<LoadingSpinner />}>
          {children || <Outlet />}
        </React.Suspense>
      </main>
      <Footer />
    </div>
  );
};
