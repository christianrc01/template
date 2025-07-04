import { Link } from "react-router-dom";
import Button from "@/shared/views/components/common/Button";
import type { HeaderMenuLinksProps } from "@/shared/types/IShared";
import { Fragment } from "react";

function HeaderMenuLinks({
  links,
  onLogout,
  onLinkClick,
}: HeaderMenuLinksProps) {
  return (
    <Fragment>
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          onClick={onLinkClick}
          className="hover:underline hover:text-gray-300 dark:hover:text-gray-400"
        >
          {link.label}
        </Link>
      ))}
      <Button variant="primary" onClick={onLogout}>
        Logout
      </Button>
    </Fragment>
  );
}

export default HeaderMenuLinks;
