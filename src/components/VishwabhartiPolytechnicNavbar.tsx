import { useState, useRef, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import ReactDOM from "react-dom";
import logo from "../assets/images/logo-circle.png";
import { NAV_ITEMS } from "../data/NavTabs";

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

// const NAV_ITEMS: NavItem[] = [
//   {
//     name: "Home",
//     path: "/vishwabharati-polytechnic-institute/home",
//   },
//   {
//     name: "About",
//     subItems: [
//       { name: "History", path: "/vishwabharati-polytechnic-institute/history" },
//       {
//         name: "Leadership",
//         path: "/vishwabharati-polytechnic-institute/leadership",
//       },
//       {
//         name: "Infrastructure",
//         path: "/vishwabharati-polytechnic-institute/infrastructure",
//       },
//     ],
//   },
//   {
//     name: "Academics",
//     subItems: [
//       {
//         name: "Courses",
//         path: "/vishwabharati-polytechnic-institute/courses",
//       },
//       {
//         name: "Admissions",
//         path: "/vishwabharati-polytechnic-institute/admissions",
//       },
//       {
//         name: "Syllabus",
//         path: "/vishwabharati-polytechnic-institute/syllabus",
//       },
//     ],
//   },
//   {
//     name: "Gallery",
//     path: "/vishwabharati-polytechnic-institute/gallery",
//   },
//   {
//     name: "Contact",
//     path: "/vishwabharati-polytechnic-institute/contact",
//   },
// ];

const VishwabhartiPolytechnicNavbar = () => {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [submenuPosition, setSubmenuPosition] = useState<SubmenuPosition>(null);

  const lastScrollYRef = useRef(0);
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll handling with debounce
  const handleScroll = useCallback(() => {
    if (isMobileMenuOpen) return;

    const currentScrollY = window.scrollY;
    const scrollThreshold = 100;
    const scrollDelta = 5;

    if (currentScrollY < scrollThreshold) {
      setShowNavbar(true);
      return;
    }

    if (Math.abs(currentScrollY - lastScrollYRef.current) < scrollDelta) return;

    setShowNavbar(currentScrollY < lastScrollYRef.current);
    lastScrollYRef.current = currentScrollY;
  }, [isMobileMenuOpen]);

  // Event listeners management
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Header height observer
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      setHeaderHeight(entries[0].contentRect.height);
    });

    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  // Submenu handlers
  const handleDesktopSubmenuHover = useCallback(
    (e: React.MouseEvent, item: NavItem) => {
      if (!item.subItems) return;
      const rect = e.currentTarget.getBoundingClientRect();
      setSubmenuPosition({ name: item.name, position: rect });
    },
    []
  );

  const handleDesktopSubmenuLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setSubmenuPosition(null), 200);
  }, []);

  // Menu management
  const closeAllMenus = useCallback(() => {
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
    setSubmenuPosition(null);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu((prev) => (prev === name ? null : name));
  };

  // Submenu rendering
  const renderSubmenuItems = useCallback(
    (subItems: NavItem["subItems"], isMobile = false) =>
      subItems?.map((subItem) => (
        <li key={subItem.name}>
          <Link
            to={subItem.path || "#"}
            onClick={closeAllMenus}
            className={`block px-6 py-3 text-lg font-medium ${
              pathname === subItem.path
                ? "bg-mpgin-blue/10 text-mpgin-blue"
                : "text-gray-700 hover:bg-gray-50"
            } ${isMobile ? "pl-10 hover:bg-blue-50" : ""}`}
          >
            {subItem.name}
          </Link>
        </li>
      )),
    [closeAllMenus, pathname]
  );

  // Main navigation rendering
  const renderNavItem = useCallback(
    (item: NavItem, index: number) => (
      <li
        key={item.name}
        className="group relative"
        onMouseEnter={(e) =>
          item.subItems && handleDesktopSubmenuHover(e, item)
        }
        onMouseLeave={item.subItems ? handleDesktopSubmenuLeave : undefined}
      >
        {item.path ? (
          <Link
            to={item.path}
            onClick={closeAllMenus}
            className={`px-6 py-4 flex items-center text-lg font-semibold ${
              pathname === item.path
                ? "text-mpgin-blue bg-mpgin-blue/10"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            {item.name}
          </Link>
        ) : (
          <button
            onClick={() => toggleSubmenu(item.name)}
            className={`px-6 py-4 flex items-center gap-2 w-full text-lg font-semibold ${
              pathname === item.path || submenuPosition?.name === item.name
                ? "text-mpgin-blue bg-mpgin-blue/10"
                : "text-gray-700 hover:bg-gray-50"
            }`}
            aria-expanded={openSubmenu === item.name}
          >
            {item.name}
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                submenuPosition?.name === item.name ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      </li>
    ),
    [
      closeAllMenus,
      pathname,
      submenuPosition,
      openSubmenu,
      handleDesktopSubmenuHover,
      handleDesktopSubmenuLeave,
    ]
  );


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
                className={`px-2 py-2.5 flex items-center text-base font-medium ${
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
                  className={`px-2 py-2.5 flex items-center gap-1 text-base font-medium ${
                    submenuPosition?.name === item.name
                      ? "text-mpgin-blue bg-blue-50"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  aria-expanded={submenuPosition?.name === item.name}
                  aria-haspopup="true"
                >
                  {item.name}
                  <ChevronDown
                    className={`w-3 h-3 transition-transform ${
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

    

    


  return (
    <>
      <header
        ref={headerRef}
        className={`fixed w-full top-0 z-50 bg-white shadow-lg transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Top Header Section */}
        <div className="bg-mpgin-darkBlue py-4 border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-6">
              <Link
                to="/vishwabharati-polytechnic-institute/home"
                className="flex items-center gap-4 hover:scale-105 transition-transform duration-200"
              >
                <img
                  src={logo}
                  alt="Vishwabharti Polytechnic Logo"
                  className="h-16 w-16 object-contain"
                />
                <h1 className="text-mpgin-blue font-bold text-4xl tracking-tight">
                  Vishwabharti Polytechnic Institute
                </h1>
              </Link>

              {/* Mobile Menu Button */}
              {/* <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg"
                aria-label="Toggle navigation"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button> */}
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        {/* <nav className="hidden md:block bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <ul className="flex justify-center items-stretch">
              {NAV_ITEMS.map(renderNavItem)}
            </ul>
          </div>
        </nav> */}

<nav className="bg-white shadow-md border-t border-black-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div
                ref={navRef}
                className="relative whitespace-nowrap py-4 overflow-x-auto"
              >
                <ul className="inline-flex">{renderDesktopNavItems()}</ul>
              </div>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center justify-end py-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X size={30} className="text-current" />
                ) : (
                  <Menu size={30} className="text-current" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {/* {isMobileMenuOpen && (
            <div className="md:hidden bg-white shadow-lg">
              <ul className="divide-y divide-gray-200">
                {renderMobileNavItems()}
              </ul>
            </div>
          )} */}
        </nav>

        {/* Mobile Navigation */}
        {/* {isMobileMenuOpen && (
          <nav className="md:hidden bg-white shadow-lg">
            <ul className="divide-y divide-gray-200">
              {NAV_ITEMS.map((item) => (
                <li key={item.name} className="hover:bg-gray-50">
                  {item.path ? (
                    <Link
                      to={item.path}
                      onClick={closeAllMenus}
                      className={`block px-6 py-4 text-lg font-semibold ${
                        pathname === item.path
                          ? "text-mpgin-blue bg-mpgin-blue/10"
                          : "text-gray-700"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => toggleSubmenu(item.name)}
                        className="w-full flex justify-between items-center px-6 py-4"
                      >
                        <span className="text-lg font-semibold">
                          {item.name}
                        </span>
                        <ChevronRight
                          className={`w-6 h-6 transition-transform ${
                            openSubmenu === item.name ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      {openSubmenu === item.name && (
                        <ul className="bg-gray-50">
                          {renderSubmenuItems(item.subItems, true)}
                        </ul>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )} */}
      </header>

      {/* Desktop Submenu Portal */}
      {/* {submenuPosition &&
        ReactDOM.createPortal(
          <ul
            className="fixed bg-white shadow-xl rounded-lg py-2 border border-gray-200 z-50 min-w-[200px]"
            style={{
              top: `${submenuPosition.position.bottom}px`,
              left: `${submenuPosition.position.left}px`,
            }}
            onMouseEnter={() =>
              timeoutRef.current && clearTimeout(timeoutRef.current)
            }
            onMouseLeave={handleDesktopSubmenuLeave}
          >
            {renderSubmenuItems(
              NAV_ITEMS.find((i) => i.name === submenuPosition.name)?.subItems
            )}
          </ul>,
          document.body
        )} */}

      {/* Header height spacer */}
      <div style={{ height: headerHeight, transition: "height 0.3s" }} />
    </>
  );
};

export default VishwabhartiPolytechnicNavbar;
