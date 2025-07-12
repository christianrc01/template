import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/shared/views/layouts/Header";
import LoadingSpinner from "@/shared/views/components/common/LoadingSpinner";
import DocumentTitle from "@/shared/components/DocumentTitle";
import TrackPageView from "@/shared/components/TrackPageView";
import type { IWrapperProps } from "@/shared/types/IError";

function Layout({ children }: IWrapperProps) {
  return (
    <div className="min-h-screen w-screen flex flex-col bg-[var(--color-bg)]">
      <Header />
      <TrackPageView />
      <DocumentTitle />
      <main role="main" className="flex-grow container mx-auto p-4 md:p-6 flex">
        <Suspense fallback={<LoadingSpinner />}>
          {children || <Outlet />}
        </Suspense>
      </main>
    </div>
  );
}

export default Layout;
