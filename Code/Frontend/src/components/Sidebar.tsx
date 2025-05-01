import React, { useState, useEffect } from 'react'; // Added useEffect just in case
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import the hook
import {
  LayoutDashboard,
  MessageSquare,
  Database,
  BarChart,
  Settings,
  Users,
  Terminal,
  ChevronLeft,
  Menu
} from 'lucide-react';

// Changed NavItem to use 'key' for translation key
type NavItem = {
  key: string; // Translation key
  icon: React.ReactNode;
  href: string;
  active?: boolean;
};

const Sidebar = () => {
  const { t } = useTranslation(); // Get translation function
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Use translation keys instead of hardcoded labels
  const navItems: NavItem[] = [
    {
      key: "dashboard", // Translation Key
      icon: <LayoutDashboard size={20} />,
      href: "/",
      active: location.pathname === "/",
    },
    {
      key: "conversations", // Translation Key
      icon: <MessageSquare size={20} />,
      href: "/conversations",
      active: location.pathname.includes("/conversations"),
    },
    {
      key: "knowledgeBase", // Translation Key
      icon: <Database size={20} />,
      href: "/knowledge-base",
      active: location.pathname.includes("/knowledge-base"),
    },
    {
      key: "analytics", // Translation Key
      icon: <BarChart size={20} />,
      href: "/analytics",
      active: location.pathname.includes("/analytics"),
    },
    {
      key: "llmConfiguration", // Translation Key
      icon: <Terminal size={20} />,
      href: "/llm-config",
      active: location.pathname.includes("/llm-config"),
    },
    {
      key: "userManagement", // Translation Key
      icon: <Users size={20} />,
      href: "/users",
      active: location.pathname.includes("/users"),
    },
    {
      key: "settingsTitle", // Translation Key (reusing from Settings page)
      icon: <Settings size={20} />,
      href: "/settings",
      active: location.pathname.includes("/settings"),
    },
  ];

   // Optional: useEffect for responsive handling (no style changes here)
   useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <>
      {/* Toggle Button: Styles unchanged */}
      <button
        onClick={toggleSidebar}
        // Add appropriate aria-label using translation keys (ensure these keys exist in i18n resources)
        aria-label={isOpen ? t('collapseSidebar', 'Collapse sidebar') : t('expandSidebar', 'Expand sidebar')}
        className={`fixed top-[72px] z-20 bg-whatsapp-primary text-white p-2 rounded-r-md shadow-md transition-all ${isOpen ? 'left-[220px]' : 'left-0'}`} // STYLE UNCHANGED
      >
        {isOpen ? <ChevronLeft size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar: Styles unchanged */}
      <aside
        className={`bg-whatsapp-gray min-h-screen border-r fixed left-0 top-0 pt-16 transition-all duration-300 ${ // STYLE UNCHANGED
          isOpen ? 'w-[220px] translate-x-0' : 'w-[70px] translate-x-0' // STYLE UNCHANGED
        }`}
      >
        <div className="p-4"> {/* STYLE UNCHANGED */}
          {/* Use translation function for the heading */}
          {isOpen && <p className="text-sm font-semibold text-gray-700 mb-4">{t('mainNavigation', 'Menu')}</p>} {/* STYLE UNCHANGED, Text translated */}
          <nav className="space-y-1"> {/* STYLE UNCHANGED */}
            {navItems.map((item) => {
              // Translate the label using the key
              const label = t(item.key);
              return (
                <Link
                  // Use the translation key as React key
                  key={item.key}
                  to={item.href}
                  // Styles unchanged
                  className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${ // STYLE UNCHANGED
                    item.active
                      ? "bg-slate-200" // STYLE UNCHANGED
                      : "hover:bg-slate-100" // STYLE UNCHANGED
                  }`}
                  // Use translated label for title attribute
                  title={!isOpen ? label : undefined}
                >
                  {/* Styles unchanged */}
                  <span className={`${item.active ? 'text-whatsapp-primary' : 'text-gray-700'}`}>{item.icon}</span> {/* STYLE UNCHANGED */}
                  {/* Display translated label */}
                  {isOpen && <span className={`${item.active ? 'font-medium' : ''} text-gray-800`}>{label}</span>} {/* STYLE UNCHANGED */}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;