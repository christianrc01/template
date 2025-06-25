import { ROUTE_PATHS } from "../../../app/routes";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>©{new Date().getFullYear()} All rights reserved</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href={ROUTE_PATHS.TERMS} className="hover:!underline">
            Terms
          </a>
          <a href={ROUTE_PATHS.PRIVACY} className="hover:!underline">
            Privacy
          </a>
          <a href={ROUTE_PATHS.CONTACT} className="hover:!underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
