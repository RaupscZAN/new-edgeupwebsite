import React, { useState } from 'react';
import { useCMS } from '../../context/CMSContext';

interface LogoProps {
  isWhite?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ isWhite = false, className = "h-10" }) => {
  const { siteSettings } = useCMS();
  const [imageError, setImageError] = useState(false);
  
  // Use the logo from settings, fallback to default EdgeUp logo
  const logoUrl = siteSettings?.logo || "https://edgeup.in/wp-content/uploads/2024/03/edgeup-logo.png";
  const siteName = siteSettings?.siteName || "EdgeUp";
  
  const handleImageError = () => {
    setImageError(true);
  };

  // If image fails to load or we want a text fallback
  if (imageError || !logoUrl) {
    return (
      <div className="flex items-center">
        <span 
          className={`text-2xl font-bold ${
            isWhite ? 'text-white' : 'text-[#094d88]'
          }`}
        >
          {siteName}
        </span>
      </div>
    );
  }
  
  return (
    <div className="flex items-center">
      <img 
        src={logoUrl}
        alt={siteName}
        className={`${className} ${isWhite ? 'brightness-0 invert' : ''}`}
        onError={handleImageError}
        loading="eager" // Load logo immediately
      />
    </div>
  );
};

export default Logo;