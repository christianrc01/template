import { ROUTE_PATHS } from "@/app/routes";
import Link from "@/shared/views/components/common/Link";
import Text from "@/shared/views/components/common/Text";

function Footer() {
  const footerLinks = [
    { path: ROUTE_PATHS.TERMS, label: "Terms" },
    { path: ROUTE_PATHS.PRIVACY, label: "Privacy" },
    { path: ROUTE_PATHS.CONTACT, label: "Contact" },
  ];

  return (
    <footer className="bg-[var(--color-bg)] text-[var(--color-text-primary)] py-6">
      <div className="container mx-auto px-4 text-center flex flex-col items-center gap-2">
        <Text as="p">
          &copy;
          <time dateTime={new Date().getFullYear().toString()}>
            {new Date().getFullYear()}
          </time>{" "}
          All rights reserved
        </Text>
        <ul className="flex flex-wrap justify-center gap-4">
          {footerLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path} draggable={false}>
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
