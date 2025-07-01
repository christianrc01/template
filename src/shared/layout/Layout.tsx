import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/shared/layout/Header";
import LoadingSpinner from "@/shared/components/common/LoadingSpinner";
import DocumentTitle from "@/shared/layout/DocumentTitle";
import TrackPageView from "@/shared/layout/TrackPageView";
import type { IWrapperProps } from "@/shared/types/IError";

function Layout({ children }: IWrapperProps): React.ReactElement {
  return (
    <div className="min-h-screen w-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-6 flex">
        <React.Suspense fallback={<LoadingSpinner />}>
          <TrackPageView />
          <DocumentTitle />
          {children || <Outlet />}
        </React.Suspense>
      </main>
    </div>
  );
}

export default Layout;
