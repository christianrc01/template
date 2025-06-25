import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import LoadingSpinner from "../common/LoadingSpinner";
import type { LayoutProps } from "../../types/IShared";
import DocumentTitle from "./DocumentTitle";

function Layout({ children }: LayoutProps): React.ReactElement {
  return (
    <div className="min-h-screen w-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-6 flex">
        <React.Suspense fallback={<LoadingSpinner />}>
          <DocumentTitle />
          {children || <Outlet />}
        </React.Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
