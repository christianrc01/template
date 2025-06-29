import { ROUTE_PATHS } from "@/app/routes";

function Footer() {
  const footerLinks = [
    { path: ROUTE_PATHS.TERMS, label: "Terms" },
    { path: ROUTE_PATHS.PRIVACY, label: "Privacy" },
    { path: ROUTE_PATHS.CONTACT, label: "Contact" },
  ];

  return (
    <footer className="bg-gray-800 text-white dark:bg-gray-900 dark:border-t dark:border-gray-700 py-6">
      <div className="container mx-auto px-4 text-center">
        <p>©{new Date().getFullYear()} All rights reserved</p>
        <div className="flex justify-center gap-4 mt-2">
          {footerLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="hover:underline hover:text-gray-300 dark:hover:text-gray-400"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
