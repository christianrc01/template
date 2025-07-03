import { ROUTE_PATHS } from "@/app/routes";
import { Link } from "react-router-dom";

function Footer() {
  const footerLinks = [
    { path: ROUTE_PATHS.TERMS, label: "Terms" },
    { path: ROUTE_PATHS.PRIVACY, label: "Privacy" },
    { path: ROUTE_PATHS.CONTACT, label: "Contact" },
  ];

  return (
    <footer className="bg-gray-800 text-white dark:bg-gray-900 dark:border-t dark:border-gray-700 py-6">
      <div className="container mx-auto px-4 text-center flex flex-col items-center gap-2">
        <p className="text-sm sm:text-base">
          ©{new Date().getFullYear()} All rights reserved
        </p>
        <ul className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
          {footerLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="hover:underline hover:text-gray-300 dark:hover:text-gray-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
