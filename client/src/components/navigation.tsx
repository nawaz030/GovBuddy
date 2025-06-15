import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/form", label: "Find Schemes", icon: "🔍" },
    { path: "/about", label: "About", icon: "ℹ️" },
    { path: "/contact", label: "Contact", icon: "📧" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">🏛️</span>
              </div>
              <span className="text-xl font-bold text-blue-600">GovBuddy</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-500 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  isActive(item.path)
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-500 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
