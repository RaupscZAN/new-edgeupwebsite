import React from 'react';
import { useCMS } from '../../context/CMSContext';

interface LogoProps {
  isWhite?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isWhite = false }) => {
  const { siteSettings } = useCMS();
  
  // Use the logo from settings, fallback to default EdgeUp logo
  const logoUrl = siteSettings?.logo || "https://edgeup.in/wp-content/uploads/2024/03/edgeup-logo.png";
  const siteName = siteSettings?.siteName || "EdgeUp";
  
  return (
    <div className="flex items-center">
      {isWhite ? (
        // For white version, use a white version of the logo directly
        <img 
          src="https://edgeup.in/wp-content/uploads/2024/03/edgeup-logo-white.png"
          alt={siteName}
          className="h-10"
        />
      ) : (
        // For regular version, use the color logo
        <img 
          src={logoUrl}
          alt={siteName}
          className="h-10"
        />
      )}
    </div>
  );
};

export default Logo;