import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import LoadingSpinner from "../common/LoadingSpinner";
import type { IWrapperProps } from "../../interfaces/IError";
import DocumentTitle from "./DocumentTitle";

function Layout({ children }: IWrapperProps): React.ReactElement {
  return (
    <div className="min-h-screen w-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-6 flex">
        <React.Suspense fallback={<LoadingSpinner />}>
          <DocumentTitle />
          {children || <Outlet />}
        </React.Suspense>
      </main>
    </div>
  );
}

export default Layout;
