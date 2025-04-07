
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

type NavItem = {
  label: string;
  icon: React.ReactNode;
  href: string;
  active?: boolean;
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navItems: NavItem[] = [
    {
      label: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      href: "/",
      active: location.pathname === "/",
    },
    {
      label: "Conversations",
      icon: <MessageSquare size={20} />,
      href: "/conversations",
      active: location.pathname.includes("/conversations"),
    },
    {
      label: "Knowledge Base",
      icon: <Database size={20} />,
      href: "/knowledge-base",
      active: location.pathname.includes("/knowledge-base"),
    },
    {
      label: "Analytics",
      icon: <BarChart size={20} />,
      href: "/analytics",
      active: location.pathname.includes("/analytics"),
    },
    {
      label: "LLM Configuration",
      icon: <Terminal size={20} />,
      href: "/llm-config",
      active: location.pathname.includes("/llm-config"),
    },
    {
      label: "User Management",
      icon: <Users size={20} />,
      href: "/users",
      active: location.pathname.includes("/users"),
    },
    {
      label: "Settings",
      icon: <Settings size={20} />,
      href: "/settings",
      active: location.pathname.includes("/settings"),
    },
  ];

  return (
    <>
      <button 
        onClick={toggleSidebar} 
        className={`fixed top-[72px] z-20 bg-whatsapp-primary text-white p-2 rounded-r-md shadow-md transition-all ${isOpen ? 'left-[220px]' : 'left-0'}`}
      >
        {isOpen ? <ChevronLeft size={20} /> : <Menu size={20} />}
      </button>
      
      <aside 
        className={`bg-whatsapp-gray min-h-screen border-r fixed left-0 top-0 pt-16 transition-all duration-300 ${
          isOpen ? 'w-[220px] translate-x-0' : 'w-[70px] translate-x-0'
        }`}
      >
        <div className="p-4">
          {isOpen && <p className="text-sm font-semibold text-gray-700 mb-4">MAIN NAVIGATION</p>}
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                  item.active
                    ? "bg-slate-200"
                    : "hover:bg-slate-100"
                }`}
                title={!isOpen ? item.label : undefined}
              >
                <span className={`${item.active ? 'text-whatsapp-primary' : 'text-gray-700'}`}>{item.icon}</span>
                {isOpen && <span className={`${item.active ? 'font-medium' : ''} text-gray-800`}>{item.label}</span>}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
