import Layout from "../components/layout/Layout";

function NotFoundPage() {
  return (
    <Layout>
      <div className="grid place-items-center w-full">
        <h1 className="text-center font-bold text-gray-800">
          404 | Page not found
        </h1>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
