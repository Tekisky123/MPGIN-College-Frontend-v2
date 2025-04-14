import { useState, useRef, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import ReactDOM from "react-dom";
import logo from "../assets/images/logo-circle.png";
import { NAV_ITEMS } from "../data/NavTabs";

// Type definitions
type NavItem = {
  name: string;
  path?: string;
  subItems?: Array<{
    name: string;
    path?: string;
  }>;
};

type SubmenuPosition = {
  name: string;
  position: DOMRect;
} | null;

const Navbar = () => {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [submenuPosition, setSubmenuPosition] = useState<SubmenuPosition>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Refs
  const lastScrollYRef = useRef<number>(0);
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Get school-specific heading based on route
  const getSchoolHeading = () => {
    if (pathname === "/school-of-management/home") {
      return "School of Management";
    } else if (pathname === "/school-of-engineering/home") {
      return "School of Engineering";
    } else if (pathname === "/vishwabharati-polytechnic-institute/home") {
      return "Vishwabharati Polytechnic Institute";
    }
    return "Matoshri Pratishthan Group of Institutions, Nanded";
  };

  // Cleanup function
  const cleanup = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  // Close all menus
  const closeAllMenus = useCallback(() => {
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
    setSubmenuPosition(null);
    cleanup();
  }, [cleanup]);

  // Toggle mobile submenu
  const toggleSubmenu = useCallback((name: string) => {
    setOpenSubmenu((prev) => (prev === name ? null : name));
  }, []);

  // Handle scroll behavior
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const scrollThreshold = 100;

    setIsScrolled(currentScrollY > scrollThreshold);

    if (isMobileMenuOpen) return;

    if (currentScrollY < scrollThreshold) {
      setShowNavbar(true);
      lastScrollYRef.current = currentScrollY;
      return;
    }

    setShowNavbar(currentScrollY < lastScrollYRef.current - 10);
    lastScrollYRef.current = currentScrollY;
  }, [isMobileMenuOpen]);

  // Handle desktop submenu hover
  const handleDesktopSubmenuHover = useCallback(
    (e: React.MouseEvent, item: NavItem) => {
      if (!item.subItems) return;
      cleanup();

      const rect = e.currentTarget.getBoundingClientRect();
      setSubmenuPosition({ name: item.name, position: rect });
    },
    [cleanup]
  );

  // Handle desktop submenu leave with delay
  const handleDesktopSubmenuLeave = useCallback(() => {
    cleanup();
    timeoutRef.current = setTimeout(() => {
      setSubmenuPosition(null);
    }, 200);
  }, [cleanup]);

  // Setup scroll and resize observers
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeaderHeight();
    const resizeObserver = new ResizeObserver(updateHeaderHeight);

    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
      cleanup();
    };
  }, [cleanup]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeAllMenus();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen, closeAllMenus]);

  // Render desktop submenu items
  const renderDesktopSubmenuItems = useCallback(
    (subItems: NavItem["subItems"]) => {
      if (!subItems) return null;

      return subItems.map((subItem) => (
        <li key={subItem.name}>
          <Link
            to={subItem.path || "#"}
            onClick={closeAllMenus}
            className={`px-4 py-2 block text-base font-medium ${
              pathname === subItem.path
                ? "bg-mpgin-blue/10 text-mpgin-blue"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            {subItem.name}
          </Link>
        </li>
      ));
    },
    [closeAllMenus, pathname]
  );

  // Render mobile submenu items
  const renderMobileSubmenuItems = useCallback(
    (subItems: NavItem["subItems"]) => {
      if (!subItems) return null;

      return subItems.map((subItem) => (
        <li key={subItem.name}>
          <Link
            to={subItem.path || "#"}
            onClick={closeAllMenus}
            className={`block px-6 py-3 text-sm font-medium ${
              pathname === subItem.path
                ? "text-mpgin-blue"
                : "text-gray-600 hover:text-mpgin-blue"
            }`}
          >
            {subItem.name}
          </Link>
        </li>
      ));
    },
    [closeAllMenus, pathname]
  );

  // Render desktop nav items
  const renderDesktopNavItems = useCallback(
    () =>
      NAV_ITEMS.map((item, index) => (
        <li
          key={item.name}
          className={`group relative ${
            index !== NAV_ITEMS.length - 1 ? "border-r border-gray-200" : ""
          }`}
          onMouseEnter={(e) => handleDesktopSubmenuHover(e, item)}
          onMouseLeave={handleDesktopSubmenuLeave}
        >
          {item.path ? (
            <Link
              to={item.path}
              onClick={closeAllMenus}
              className={`px-4 py-2.5 flex items-center text-base font-medium ${
                pathname === item.path
                  ? "text-mpgin-blue bg-blue-50"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {item.name}
            </Link>
          ) : (
            <div className="relative">
              <button
                className={`px-4 py-2.5 flex items-center gap-1 text-base font-medium ${
                  submenuPosition?.name === item.name
                    ? "text-mpgin-blue bg-blue-50"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                aria-expanded={submenuPosition?.name === item.name}
                aria-haspopup="true"
              >
                {item.name}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    submenuPosition?.name === item.name ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          )}
        </li>
      )),
    [
      closeAllMenus,
      handleDesktopSubmenuHover,
      handleDesktopSubmenuLeave,
      pathname,
      submenuPosition?.name,
    ]
  );

  // Render mobile nav items
  const renderMobileNavItems = useCallback(
    () =>
      NAV_ITEMS.map((item) => (
        <li key={item.name} className="hover:bg-gray-50 transition-colors">
          {item.path ? (
            <Link
              to={item.path}
              onClick={closeAllMenus}
              className={`block px-6 py-3 text-sm font-medium ${
                pathname === item.path
                  ? "bg-mpgin-blue/10 text-mpgin-blue"
                  : "text-gray-700"
              }`}
            >
              {item.name}
            </Link>
          ) : (
            <div>
              <button
                onClick={() => toggleSubmenu(item.name)}
                className={`w-full flex justify-between items-center px-6 py-3 text-sm font-medium ${
                  openSubmenu === item.name
                    ? "bg-mpgin-blue/10 text-mpgin-blue"
                    : "text-gray-700"
                }`}
                aria-expanded={openSubmenu === item.name}
                aria-haspopup="true"
              >
                <span>{item.name}</span>
                <ChevronRight
                  className={`w-5 h-5 transition-transform ${
                    openSubmenu === item.name ? "rotate-90" : ""
                  }`}
                />
              </button>

              {openSubmenu === item.name && item.subItems && (
                <ul className="bg-gray-50 pl-6 border-t border-gray-200">
                  {renderMobileSubmenuItems(item.subItems)}
                </ul>
              )}
            </div>
          )}
        </li>
      )),
    [
      closeAllMenus,
      openSubmenu,
      pathname,
      renderMobileSubmenuItems,
      toggleSubmenu,
    ]
  );

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed w-full top-0 z-50 shadow-lg transition-all duration-300 ease-in-out ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } ${isScrolled ? "bg-white" : "bg-white"}`}
      >
        {/* Top Section - Logo and Institution Name */}
        <div className={`py-2 ${isScrolled ? "hidden" : "block"} bg-mpgin-darkBlue border-b`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-4">
              <Link to="/" className="flex items-center gap-4">
                <img
                  src={logo}
                  alt="MPGIN Logo"
                  className="h-16 w-16 md:h-20 md:w-20 hover:scale-105 transition-transform duration-200"
                  width={80}
                  height={80}
                  loading="lazy"
                />
                <h1 className="text-mpgin-blue font-bold text-xl md:text-2xl lg:text-4xl tracking-tight">
                  {getSchoolHeading()}
                </h1>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Navigation - Main Menu */}
        <nav className={`bg-white ${isScrolled ? "shadow-md" : ""}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Desktop Navigation */}
              <div className="hidden md:block flex-1">
                <div ref={navRef} className="relative whitespace-nowrap">
                  <ul className="flex items-center">{renderDesktopNavItems()}</ul>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Toggle navigation menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  {isMobileMenuOpen ? (
                    <X size={24} className="text-current" />
                  ) : (
                    <Menu size={24} className="text-current" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white shadow-lg">
              <ul className="divide-y divide-gray-200">
                {renderMobileNavItems()}
              </ul>
            </div>
          )}
        </nav>
      </header>

      {/* Portal for desktop submenus */}
      {submenuPosition &&
        ReactDOM.createPortal(
          <ul
            className="fixed bg-white shadow-xl rounded-lg min-w-[200px] py-1 border border-gray-200 z-50"
            style={{
              top: `${submenuPosition.position.bottom}px`,
              left: `${submenuPosition.position.left}px`,
            }}
            onMouseEnter={cleanup}
            onMouseLeave={handleDesktopSubmenuLeave}
            aria-label={`${submenuPosition.name} submenu`}
          >
            {renderDesktopSubmenuItems(
              NAV_ITEMS.find((item) => item.name === submenuPosition.name)
                ?.subItems
            )}
          </ul>,
          document.body
        )}

      {/* Header height spacer */}
      {headerHeight > 0 && (
        <div style={{ height: headerHeight, transition: "height 0.3s ease" }} />
      )}
    </>
  );
};

export default Navbar;