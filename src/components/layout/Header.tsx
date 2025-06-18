import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useCMS } from '../../context/CMSContext';
import Logo from '../common/Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { siteSettings } = useCMS();

  const navItems = [
    { title: 'Product', path: '/product' },
    { title: 'For Institutions', path: '/institutions' },
    { title: 'About Us', path: '/about' },
    { title: 'News', path: '/news' },
    { title: 'Contact', path: '/contact', isButton: false },
    { title: 'Book a Demo', path: '/contact?demo=true', isButton: true }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-medium shadow-lg py-2' 
          : 'bg-white/90 backdrop-blur-light py-4'
      } animate-slide-in-top`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <div className="animate-pulse-slow">
              <Logo />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              item.isButton ? (
                <Link
                  key={index}
                  to={item.path}
                  className="btn-primary ripple magnetic hover-glow animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.title}
                </Link>
              ) : (
                <Link
                  key={index}
                  to={item.path}
                  className={`nav-link animate-fade-in-up ${
                    location.pathname === item.path ? 'active' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.title}
                </Link>
              )
            ))}
          </nav>

          <button
            className="lg:hidden text-gray-900 focus:outline-none magnetic hover-scale"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0' : ''}`}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : 'closed'}`}>
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <Logo />
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover-scale"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <nav className="flex-1 px-6 py-8">
            <div className="space-y-6">
              {navItems.map((item, index) => (
                item.isButton ? (
                  <Link
                    key={index}
                    to={item.path}
                    className="btn-primary w-full text-center block animate-fade-in-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={toggleMenu}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <Link
                    key={index}
                    to={item.path}
                    className={`block py-3 text-lg font-medium transition-colors duration-300 animate-fade-in-left ${
                      location.pathname === item.path 
                        ? 'text-[#094d88]' 
                        : 'text-gray-700 hover:text-[#094d88]'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={toggleMenu}
                  >
                    {item.title}
                  </Link>
                )
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Header;