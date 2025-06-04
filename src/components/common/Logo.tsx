import React from 'react';
import { useCMS } from '../../context/CMSContext';

const Logo: React.FC = () => {
  const { siteSettings } = useCMS();
  
  // Use the logo from settings, fallback to default EdgeUp logo
  const logoUrl = siteSettings?.logo || "https://edgeup.in/wp-content/uploads/2024/03/edgeup-logo.png";
  const siteName = siteSettings?.siteName || "EdgeUp";
  
  return (
    <div className="flex items-center">
      <img 
        src={logoUrl}
        alt={siteName}
        className="h-10"
      />
    </div>
  );
};

export default Logo;