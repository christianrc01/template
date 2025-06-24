import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { LoadingSpinner } from "./LoadingSpinner";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-6">
        <React.Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </React.Suspense>
      </main>
      <Footer />
    </div>
  );
};
