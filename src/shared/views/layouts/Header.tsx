import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@/shared/views/components/common/Button";
import { ROUTE_PATHS } from "@/app/routes";
import { authController } from "@/features/auth/controllers/authController";
import IconMenu from "@/shared/icons/IconMenu";
import { responsiveIconSize } from "@/lib/config/tailwind";
import { Popup } from "@progress/kendo-react-popup";
import useClickOutside from "@/shared/hooks/useClickOutside";
import useCloseOnBreakpoint from "@/shared/hooks/useCloseOnBreakpoint";
import HeaderMenuLinks from "@/shared/views/components/common/HeaderMenuLinks";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuAnchorRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const mainLinks = [
    { to: ROUTE_PATHS.HOME, label: "Home" },
    { to: ROUTE_PATHS.USERS, label: "Users" },
  ];

  const handleLogout = () => {
    authController.logout();
    setIsMenuOpen(false);
  };

  useCloseOnBreakpoint(setIsMenuOpen);
  useClickOutside({
    refs: [menuAnchorRef, popupRef],
    handler: () => setIsMenuOpen(false),
  });

  return (
    <header className="bg-[var(--color-bg)] text-[var(--color-text-primary)]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to={ROUTE_PATHS.HOME}
          draggable={false}
          className="text-xl font-bold"
        >
          Logo
        </Link>

        <nav className="hidden sm:flex items-center gap-6">
          <HeaderMenuLinks links={mainLinks} onLogout={handleLogout} />
        </nav>

        <div ref={menuAnchorRef} className="sm:hidden inline-block">
          <Button
            aria-label="Toggle menu"
            variant="secondary"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <IconMenu aria-hidden="true" className={responsiveIconSize} />
          </Button>
        </div>
      </div>

      <Popup
        anchor={menuAnchorRef.current}
        show={isMenuOpen}
        ref={(ref) => {
          if (ref && popupRef.current) {
            popupRef.current = ref.element;
          }
        }}
      >
        <HeaderMenuLinks
          links={mainLinks}
          onLogout={handleLogout}
          onLinkClick={() => setIsMenuOpen(false)}
        />
      </Popup>
    </header>
  );
}

export default Header;
