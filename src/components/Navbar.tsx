import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import ReactDOM from "react-dom";
import logo from "../assets/images/logo-circle.png";
import { NAV_ITEMS } from "../data/NavTabs";

type NavItem = {
  name: string;
  path?: string;
  external?: boolean;
  subItems?: Array<{
    name: string;
    path?: string;
    external?: boolean;
  }>;
};

type SubmenuPosition = {
  name: string;
  position: DOMRect;
} | null;

const SCROLL_THRESHOLD = 100;
const VALID_SCHOOLS = [
  'school-of-engineering',
  'school-of-management',
  'vishwabharati-polytechnic-institute'
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [submenuPosition, setSubmenuPosition] = useState<SubmenuPosition>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const lastScrollYRef = useRef(0);
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Memoized school prefix calculation
  const schoolPrefix = useMemo(() => {
    const parts = pathname.split('/').filter(p => p);
    return VALID_SCHOOLS.find(school => school === parts[0]) || null;
  }, [pathname]);

  // Memoized path prefixing
  const getPrefixedPath = useCallback((originalPath: string, isExternal?: boolean) => {
    if (isExternal || !schoolPrefix) return originalPath;
    return originalPath === '/'
      ? `/${schoolPrefix}/home`
      : `/${schoolPrefix}${originalPath}`;
  }, [schoolPrefix]);

  // Memoized school heading
  const schoolHeading = useMemo(() => {
    switch (schoolPrefix) {
      case 'school-of-management':
        return "School of Management";
      case 'school-of-engineering':
        return "School of Engineering";
      case 'vishwabharati-polytechnic-institute':
        return "Vishwabharati Polytechnic Institute";
      default:
        return "Matoshri Pratishthan Group of Institutions, Nanded";
    }
  }, [schoolPrefix]);

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
    setOpenSubmenu(prev => prev === name ? null : name);
  }, []);

  // Scroll handler with throttling
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsScrolled(currentScrollY > SCROLL_THRESHOLD);

    if (isMobileMenuOpen) return;

    const scrollDelta = currentScrollY - lastScrollYRef.current;
    setShowNavbar(currentScrollY < SCROLL_THRESHOLD || scrollDelta < -10);
    lastScrollYRef.current = currentScrollY;
  }, [isMobileMenuOpen]);

  // Desktop submenu handlers
  const handleDesktopSubmenuHover = useCallback((e: React.MouseEvent, item: NavItem) => {
    if (!item.subItems) return;
    cleanup();
    const rect = e.currentTarget.getBoundingClientRect();
    setSubmenuPosition({ name: item.name, position: rect });
  }, [cleanup]);

  const handleDesktopSubmenuLeave = useCallback(() => {
    cleanup();
    timeoutRef.current = setTimeout(() => setSubmenuPosition(null), 200);
  }, [cleanup]);

  // Event listeners setup
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Resize observer
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    const resizeObserver = new ResizeObserver(updateHeaderHeight);
    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
      cleanup();
    };
  }, [cleanup]);

  // Render helpers
  const renderSubmenuItems = useCallback(
    (subItems: NavItem["subItems"], isMobile: boolean) =>
      subItems?.map((subItem) => (
        <li key={subItem.name}>
          <Link
            to={getPrefixedPath(subItem.path || '#', subItem.external)}
            onClick={closeAllMenus}
            className={`block ${isMobile ? 'px-6 py-3 text-sm' : 'px-4 py-2 text-base'
              } font-medium ${pathname === getPrefixedPath(subItem.path || '', subItem.external)
                ? `${isMobile ? 'text-mpgin-blue' : 'bg-mpgin-blue/10 text-mpgin-blue'}`
                : `${isMobile ? 'text-gray-600 hover:text-mpgin-blue' : 'text-gray-700 hover:bg-gray-50'}`
              }`}
          >
            {subItem.name}
          </Link>
        </li>
      )),
    [closeAllMenus, pathname, getPrefixedPath]
  );

  const renderNavItem = useCallback(
    (item: NavItem, isMobile: boolean) => {
      const isActive = pathname === getPrefixedPath(item.path || '', item.external);

      return item.path ? (
        <Link
          key={item.name}
          to={getPrefixedPath(item.path, item.external)}
          onClick={closeAllMenus}
          className={`${isMobile ? 'px-6 py-3 text-sm' : 'px-4 py-2.5 text-base'
            } font-medium flex items-center ${isActive
              ? `${isMobile ? 'bg-mpgin-blue/10 text-mpgin-blue' : 'text-mpgin-blue bg-blue-50'}`
              : 'text-gray-700 hover:bg-gray-50'
            }`}
        >
          {item.name}
        </Link>
      ) : (
        <div key={item.name} className="relative">
          <button
            onClick={isMobile ? () => toggleSubmenu(item.name) : undefined}
            onMouseEnter={!isMobile ? (e) => handleDesktopSubmenuHover(e, item) : undefined}
            onMouseLeave={!isMobile ? handleDesktopSubmenuLeave : undefined}
            className={`${isMobile ? 'w-full px-6 py-3 text-sm' : 'px-4 py-2.5 text-base'
              } font-medium flex items-center justify-between gap-1 ${(isMobile ? openSubmenu === item.name : submenuPosition?.name === item.name)
                ? 'text-mpgin-blue bg-blue-50'
                : 'text-gray-700 hover:bg-gray-50'
              }`}
            aria-expanded={Boolean(
              isMobile ? openSubmenu === item.name : submenuPosition?.name === item.name
            )}
          >
            <span>{item.name}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${(isMobile ? openSubmenu === item.name : submenuPosition?.name === item.name)
                  ? 'rotate-180'
                  : ''
                }`}
            />
          </button>

          {isMobile && openSubmenu === item.name && item.subItems && (
            <ul className="bg-gray-50 pl-6 border-t border-gray-200">
              {renderSubmenuItems(item.subItems, true)}
            </ul>
          )}
        </div>
      );
    },
    [
      pathname,
      openSubmenu,
      submenuPosition,
      getPrefixedPath,
      closeAllMenus,
      toggleSubmenu,
      handleDesktopSubmenuHover,
      handleDesktopSubmenuLeave,
      renderSubmenuItems
    ]
  );

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed w-full top-0 z-50 shadow-lg transition-transform duration-300 ease-in-out ${showNavbar ? 'translate-y-0' : '-translate-y-full'
          } ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}
      >
        {/* Top Section - Logo and Institution Name */}
        <div className={`py-2 ${isScrolled ? 'hidden' : 'block'} bg-mpgin-darkBlue border-b`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-4 ">
                <Link to="/">
                  <img
                    src={logo}
                    alt="MPGIN Logo"
                    className="h-16 w-16 md:h-20 md:w-20 hover:scale-105 transition-transform duration-200"
                    width={80}
                    height={80}
                    loading="lazy"
                  />
                </Link>
                <Link
                  to={schoolPrefix ? `/${schoolPrefix}/home` : "/"}
                  className="flex items-center gap-4"
                >
                  <h1 className="text-mpgin-blue font-bold text-xl md:text-2xl lg:text-4xl tracking-tight">
                    {schoolHeading}
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation - Main Menu */}
        <nav ref={navRef} className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Desktop Navigation */}
              <div className="hidden md:block flex-1">
                <div className="relative whitespace-nowrap">
                  <ul className="flex items-center">
                    {NAV_ITEMS.map((item, index) => (
                      <li
                        key={item.name}
                        className={`group relative ${index !== NAV_ITEMS.length - 1 ? 'border-r border-gray-200' : ''
                          }`}
                        onMouseEnter={(e) => handleDesktopSubmenuHover(e, item)}
                        onMouseLeave={handleDesktopSubmenuLeave}
                      >
                        {renderNavItem(item, false)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center ml-auto">
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
                {NAV_ITEMS.map((item) => (
                  <li key={item.name} className="hover:bg-gray-50 transition-colors">
                    {renderNavItem(item, true)}
                  </li>
                ))}
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
            {renderSubmenuItems(
              NAV_ITEMS.find((item) => item.name === submenuPosition.name)?.subItems,
              false
            )}
          </ul>,
          document.body
        )}

      {/* Header height spacer */}
      {headerHeight > 0 && (
        <div style={{ height: headerHeight, transition: 'height 0.3s ease' }} />
      )}
    </>
  );
};

export default Navbar;